// components/DeviceTracker.tsx
"use client";

import React, { useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { Search, ShieldCheck, Wrench, CheckCircle, AlertCircle } from "lucide-react";

export default function DeviceTracker() {
  const [trackId, setTrackId] = useState("");
  const [deviceData, setDeviceData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackId.trim()) return;

    setLoading(true);
    setError("");
    setDeviceData(null);

    try {
      // Supabase'den girilen ID'ye göre cihazı sorguluyoruz
      const { data, error: sbError } = await supabase
        .from("devices")
        .select("*")
        .eq("id", trackId.trim())
        .single();

      if (sbError) {
        setError("Cihaz bulunamadı. Lütfen takip numarasını doğru girdiğinizden emin olun.");
      } else {
        setDeviceData(data);
      }
    } catch (err) {
      setError("Sorgulama sırasında bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100 text-gray-800">
      <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-slate-900">
        🔍 Cihaz Durumu Sorgulama
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Express mobil servisine bıraktığınız cihazınızın durumunu öğrenmek için size verilen takip numarasını (UUID) giriniz.
      </p>

      <form onSubmit={handleTrack} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Takip numarasını yapıştırın..."
          value={trackId}
          onChange={(e) => setTrackId(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 text-sm flex items-center gap-2"
        >
          {loading ? "Sorgulanıyor..." : "Sorgula"}
        </button>
      </form>

      {/* Hata Mesajı */}
      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center gap-2 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Sonuç Ekranı */}
      {deviceData && (
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-100 space-y-4 animate-in fade-in duration-300">
          <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Müşteri</span>
            <span className="font-semibold text-slate-900">{deviceData.customer_name}</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Cihaz Modeli</span>
            <span className="font-semibold text-slate-900">{deviceData.device_model}</span>
          </div>

          <div className="flex justify-between items-center pt-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Mevcut Durum</span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
              deviceData.repair_status === "Tamir Edildi" 
                ? "bg-green-100 text-green-700" 
                : deviceData.repair_status === "Beklemede"
                ? "bg-amber-100 text-amber-700"
                : "bg-blue-100 text-blue-700"
            }`}>
              {deviceData.repair_status === "Tamir Edildi" && <CheckCircle className="w-3.5 h-3.5" />}
              {deviceData.repair_status === "Beklemede" && <AlertCircle className="w-3.5 h-3.5" />}
              {deviceData.repair_status !== "Tamir Edildi" && deviceData.repair_status !== "Beklemede" && <Wrench className="w-3.5 h-3.5" />}
              {deviceData.repair_status}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
