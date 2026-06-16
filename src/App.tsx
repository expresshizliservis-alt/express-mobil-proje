import React, { useState, useEffect, useRef } from 'react';
import { supabase } from './supabaseClient';
import { QRCodeSVG } from 'qrcode.react'; // QR kod bileşeni
import { PlusCircle, RefreshCw, Trash2, Lock, Cpu, ChevronRight, CheckCircle2, Sparkles, Globe, Printer, Smartphone } from 'lucide-react';

// ARcomponents/FixRobot içindeki Dil Çeviri Sözlüğü (Dış siteye koymak isterseniz diye dahil edildi)
const LANGUAGES: { [key: string]: any } = {
  tr: {
    title: "Express AI: Akıllı Arıza Tespit Robotu", back: "⬅ Başa Dön", diagnosticTitle: "Ön Teşhis Sonucu:",
    formInfo: "Dükkanda sıra beklememek için bilgilerinizi girin:", namePlaceholder: "Adınız Soyadınız",
    modelPlaceholder: "Cihaz Modeli (Örn: Redmi Note 9 Pro)", btnCancel: "Yeniden Test Et", btnSubmit: "Arıza Ön Kaydı Oluştur",
    btnLoading: "Kayıt Yapılıyor...", successTitle: "Arıza Ön Kaydı Alındı!", successDesc: "Aşağıdaki takip kodunu ustaya iletmeniz yeterlidir:",
    codeLabel: "MÜŞTERİ TAKİP KODUNUZ", subNote: "* Bu kod dükkanda telefonun arkasına yapıştırılacak QR kod ile eşleşecektir.", btnFinish: "Yeni Arıza Sorgula"
  },
  ar: {
    title: "Express AI: روبوت تشخيص الأعطال الذكي", back: "⬅ العودة للبداية", diagnosticTitle: "نتيجة التشخيص الأولي:",
    formInfo: "لتجنب الانتظار في المحل، يرجى إدخال معلوماتك:", namePlaceholder: "الاسم الكامل",
    modelPlaceholder: "طراز الجهاز (مثال: Redmi Note 9 Pro)", btnCancel: "إعادة الاختبار", btnSubmit: "إنشاء تسجيل مسبق",
    btnLoading: "جاري التسجيل...", successTitle: "تم استلام التسجيل!", successDesc: "يكفي تقديم رمز التتبع التالي للفني عند حضورك:",
    codeLabel: "رمز التتبع الخاص بك", subNote: "* هذا الرمز سيتطابق مع رمز QR الذي سيتم طباعته ولصقه خلف هاتفك.", btnFinish: "استعلام جديد"
  }
};

export default function App() {
  // 1. GÜVENLİK VE GİZLİLİK GİRİŞ STATES
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const ORIGINAL_SECRET_KEY = import.meta.env.VITE_ADMIN_SECRET_KEY; // .env'den gizlice okunuyor

  // 2. ADMİN PANEL STATES
  const [devices, setDevices] = useState<any[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedDeviceForQR, setSelectedDeviceForQR] = useState<any>(null); // QR basılacak cihaz

  // 3. ARTIK ROBOT STATES (Müşteri Simülasyonu için panel içinde de görüntülenebilir)
  const [robotLang, setRobotLang] = useState<'tr' | 'ar'>('tr');
  const [robotStep, setRobotStep] = useState('start');
  const [robotDiagnostic, setRobotDiagnostic] = useState<any>(null);

  const printRef = useRef<HTMLDivElement>(null);

  // Verileri Supabase'den Çekme
  const fetchDevices = async () => {
    const { data, error } = await supabase
      .from('devices')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) setDevices(data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchDevices();
    }
  }, [isAuthenticated]);

  // Şifreli Giriş Kontrolü
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretKey === ORIGINAL_SECRET_KEY) {
      setIsAuthenticated(true);
    } else {
      alert("⚠️ Geçersiz Sistem Anahtarı!");
      setSecretKey('');
    }
  };

  // Yeni Cihaz Ekleme (Dükkandan Manuel Kayıt)
  const handleAddDevice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !deviceModel) return;
    setLoading(true);

    const { error } = await supabase
      .from('devices')
      .insert([{ customer_name: customerName, device_model: deviceModel, repair_status: 'Beklemede', notes }]);

    if (!error) {
      setCustomerName('');
      setDeviceModel('');
      setNotes('');
      fetchDevices();
    }
    setLoading(false);
  };

  // Cihaz Durumu Güncelleme
  const handleUpdateStatus = async (id: string, currentStatus: string) => {
    let nextStatus = 'Beklemede';
    if (currentStatus === 'Beklemede') nextStatus = 'Tamir Ediliyor';
    else if (currentStatus === 'Tamir Ediliyor') nextStatus = 'Tamir Edildi';

    const { error } = await supabase
      .from('devices')
      .update({ repair_status: nextStatus })
      .eq('id', id);

    if (!error) fetchDevices();
  };

  // Cihaz Silme
  const handleDeleteDevice = async (id: string) => {
    if (window.confirm("Bu cihaz kaydını silmek istediğinize emin misiniz?")) {
      const { error } = await supabase.from('devices').delete().eq('id', id);
      if (!error) fetchDevices();
    }
  };

  // 🖨️ FİZİKSEL YAZICIYA QR BARKOD GÖNDERME FONKSİYONU
  const handlePrintQR = (device: any) => {
    setSelectedDeviceForQR(device);
    setTimeout(() => {
      const printContent = document.getElementById('printable-qr-area')?.innerHTML;
      const originalContent = document.body.innerHTML;
      if (printContent) {
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload(); // Sayfayı kendine getirmek için hızlıca yeniliyoruz
      }
    }, 300);
  };

  // RENK DİNAMİĞİ (Cam Efektli Kartlar İçin)
  const getStatusColor = (status: string) => {
    if (status === 'Tamir Ediliyor') return 'rgba(251, 191, 36, 0.15)'; // Sarı mt
    if (status === 'Tamir Edildi') return 'rgba(16, 185, 129, 0.15)'; // Yeşil mt
    return 'rgba(255, 255, 255, 0.03)'; // Varsayılan Koyu Kül
  };

  // --- GİZLİ EKRAN (KANITSIZ GİRİŞ) ---
  if (!isAuthenticated) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginCard}>
          <Lock size={36} style={{ color: '#475569', marginBottom: '16px' }} />
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="password"
              placeholder="Sistem Anahtarı..."
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              style={styles.loginInput}
              required
            />
            <button type="submit" style={styles.loginBtn}>Sistemi Aç</button>
          </form>
        </div>
      </div>
    );
  }

  // --- ANA GİZLİ ADMİN PANELİ ---
  return (
    <div style={styles.dashboardContainer}>
      
      {/* Üst Başlık Alanı */}
      <div style={styles.headerRow}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', letterSpacing: '0.5px' }}>EXPRESS MOBIL</h1>
          <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '13px' }}>Genel Altyapı Yönetim ve Kontrol Merkezi</p>
        </div>
        <button onClick={fetchDevices} style={styles.refreshBtn}>
          <RefreshCw size={16} /> Yenile
        </button>
      </div>

      <div style={styles.mainGrid}>
        
        {/* SOL TARAF: CİHAZ KAYIT VE YAZICI ÖNİZLEME */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Cihaz Kayıt Kartı */}
          <div style={styles.glassCard}>
            <h3 style={styles.cardTitle}><PlusCircle size={18} /> Yeni Cihaz Girişi</h3>
            <form onSubmit={handleAddDevice} style={styles.form}>
              <input type="text" placeholder="Müşteri Adı Soyadı" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={styles.input} required />
              <input type="text" placeholder="Cihaz Modeli (Örn: Redmi Note 9 Pro)" value={deviceModel} onChange={(e) => setDeviceModel(e.target.value)} style={styles.input} required />
              <textarea placeholder="Arıza Notları / İstekler" value={notes} onChange={(e) => setNotes(e.target.value)} style={{ ...styles.input, height: '80px', resize: 'none' }} />
              <button type="submit" style={styles.submitBtn} disabled={loading}>
                {loading ? "Kaydediliyor..." : "Cihazı Sisteme İşle"}
              </button>
            </form>
          </div>

          {/* QR Kod Canlı Baskı Önizleme Kartı */}
          <div style={styles.glassCard}>
            <h3 style={styles.cardTitle}><Printer size={18} /> QR Barkod Baskı İstasyonu</h3>
            {selectedDeviceForQR ? (
              <div style={{ textAlign: 'center', padding: '10px' }}>
                <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '12px' }}>
                  <strong>{selectedDeviceForQR.customer_name}</strong> - {selectedDeviceForQR.device_model}
                </p>
                <div style={{ background: '#fff', padding: '12px', display: 'inline-block', borderRadius: '12px' }}>
                  <QRCodeSVG value={selectedDeviceForQR.id} size={110} />
                </div>
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#94a3b8', marginTop: '8px' }}>
                  ID: {selectedDeviceForQR.id.substring(0, 8)}...
                </p>
                <button onClick={() => handlePrintQR(selectedDeviceForQR)} style={styles.printActionBtn}>
                  <Printer size={14} /> Şeffaf Barkod Etiketi Bas
                </button>
              </div>
            ) : (
              <p style={{ color: '#64748b', fontSize: '13px', textAlign: 'center', padding: '20px' }}>
                Yazıcıya göndermek ve telefonun arkasına yapıştırmak için sağdaki listeden bir cihaza ait "QR Bas" butonuna tıklayın.
              </p>
            )}
          </div>
        </div>

        {/* SAĞ TARAF: CANLI TAKİP LİSTESİ */}
        <div style={styles.glassCard}>
          <h3 style={styles.cardTitle}><Smartphone size={18} /> Aktif Servis Takip Listesi</h3>
          <div style={styles.listContainer}>
            {devices.length === 0 ? (
              <p style={{ color: '#64748b', fontSize: '13px', textAlign: 'center', marginTop: '40px' }}>Şu an serviste aktif cihaz bulunmuyor.</p>
            ) : (
              devices.map((device) => (
                <div key={device.id} style={{ ...styles.deviceItem, backgroundColor: getStatusColor(device.repair_status) }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '15px' }}>{device.customer_name}</span>
                      <span style={styles.modelBadge}>{device.device_model}</span>
                    </div>
                    {device.notes && <p style={styles.deviceNotes}>{device.notes}</p>}
                    <span style={styles.uuidText}>Takip UUID: {device.id}</span>
                  </div>

                  <div style={styles.actionArea}>
                    <button onClick={() => handleUpdateStatus(device.id, device.repair_status)} style={{
                      ...styles.statusBtn,
                      backgroundColor: device.repair_status === 'Beklemede' ? '#3b82f6' : device.repair_status === 'Tamir Ediliyor' ? '#f59e0b' : '#10b981'
                    }}>
                      {device.repair_status}
                    </button>
                    <button onClick={() => setSelectedDeviceForQR(device)} style={styles.qrSelectBtn}>QR Gör</button>
                    <button onClick={() => handlePrintQR(device)} style={styles.iconPrintBtn} title="Direkt Yazdır"><Printer size={14} /></button>
                    <button onClick={() => handleDeleteDevice(device.id)} style={styles.deleteBtn}><Trash2 size={14} /></button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      {/* 🖨️ GİZLİ YAZICI ÇIKTI ŞABLONU (SADECE BARKOD YAZICIDAN ÇIKARKEN GÖRÜNÜR) */}
      <div style={{ display: 'none' }}>
        <div id="printable-qr-area" style={{ width: '50mm', height: '30mm', padding: '5px', textAlign: 'center', color: '#000', fontFamily: 'monospace' }}>
          <div style={{ fontSize: '10px', fontWeight: 'bold', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '4px' }}>EXPRESS MOBIL</div>
          {selectedDeviceForQR && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
                <div style={{ background: '#fff', padding: '2px' }}>
                  <QRCodeSVG value={selectedDeviceForQR.id} size={55} />
                </div>
                <div style={{ textAlign: 'left', fontSize: '8px', flex: 1, paddingLeft: '6px', lineHeight: '1.1' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '9px', overflow: 'hidden', maxHeight: '11px' }}>{selectedDeviceForQR.customer_name.substring(0, 15)}</div>
                  <div style={{ color: '#333' }}>{selectedDeviceForQR.device_model}</div>
                  <div style={{ marginTop: '2px', fontWeight: 'bold' }}>ID: {selectedDeviceForQR.id.substring(0, 8)}</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
}

// GLASSMORPHISM VE GİZLİLİK STİLLERİ
const styles: { [key: string]: React.CSSProperties } = {
  loginContainer: { minHeight: '100vh', background: '#090d16', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' },
  loginCard: { background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '32px', textAlign: 'center', width: '280px' },
  loginInput: { padding: '12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)', background: '#000', color: '#fff', textAlign: 'center', outline: 'none', fontSize: '14px' },
  loginBtn: { padding: '12px', borderRadius: '8px', border: 'none', background: '#1e293b', color: '#94a3b8', fontWeight: 'bold', cursor: 'pointer' },
  dashboardContainer: { minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', color: '#f8fafc', padding: '30px', fontFamily: 'system-ui, sans-serif' },
  headerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '20px' },
  refreshBtn: { display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', cursor: 'pointer', fontSize: '13px' },
  mainGrid: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '25px' },
  glassCard: { background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' },
  cardTitle: { margin: '0 0 20px 0', fontSize: '16px', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: { padding: '12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.2)', color: '#fff', fontSize: '14px', outline: 'none' },
  submitBtn: { padding: '12px', borderRadius: '10px', border: 'none', background: 'linear-gradient(90deg, #2563eb, #1d4ed8)', color: '#fff', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', marginTop: '6px' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '550px', overflowY: 'auto', paddingRight: '4px' },
  deviceItem: { padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px', transition: 'all 0.3s ease' },
  modelBadge: { background: 'rgba(255,255,255,0.1)', color: '#cbd5e1', fontSize: '11px', padding: '2px 8px', borderRadius: '8px', fontWeight: '600' },
  deviceNotes: { margin: '6px 0 0 0', fontSize: '13px', color: '#94a3b8', lineHeight: '1.4' },
  uuidText: { display: 'block', fontSize: '10px', color: '#475569', fontFamily: 'monospace', marginTop: '6px' },
  actionArea: { display: 'flex', alignItems: 'center', gap: '8px' },
  statusBtn: { border: 'none', color: '#fff', fontSize: '12px', fontWeight: '600', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', minWidth: '105px', textAlign: 'center' },
  qrSelectBtn: { border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer' },
  iconPrintBtn: { border: 'none', background: '#475569', color: '#fff', padding: '7px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' },
  printActionBtn: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '10px', borderRadius: '10px', border: 'none', background: '#10b981', color: '#fff', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', marginTop: '16px' },
  deleteBtn: { border: 'none', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '7px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }
};
