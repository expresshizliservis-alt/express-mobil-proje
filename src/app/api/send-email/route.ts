import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, recipientEmail } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Nodemailer transporter konfigürasyonu
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // E-posta şablonu
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background-color: white; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #667eea; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 Yeni İletişim Mesajı</h1>
      <p>Express Mobil İletişim Formu</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Ad Soyad:</span><br>
        ${name}
      </div>
      <div class="field">
        <span class="label">E-posta Adresi:</span><br>
        <a href="mailto:${email}">${email}</a>
      </div>
      <div class="field">
        <span class="label">Telefon Numarası:</span><br>
        ${phone || "Belirtilmemiş"}
      </div>
      <div class="field">
        <span class="label">Mesaj:</span><br>
        ${message.replace(/\n/g, "<br>")}
      </div>
      <div class="footer">
        <p>Bu mesaj Express Mobil iletişim formu üzerinden gönderilmiştir.</p>
        <p><strong>Express Mobil</strong> | Gaziantep, Türkiye</p>
        <p>📱 05539511770 | 📱 05019390627</p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // E-posta seçenekleri
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: recipientEmail || process.env.RECIPIENT_EMAIL,
      subject: `📬 Yeni İletişim Mesajı: ${name}`,
      html: emailContent,
      replyTo: email,
    };

    // E-posta gönder
    await transporter.sendMail(mailOptions);

    // Doğrulama e-postası (kullanıcıya gönder)
    const confirmationEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background-color: white; padding: 20px; border-radius: 0 0 8px 8px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Mesajınız Alındı</h1>
      <p>Express Mobil</p>
    </div>
    <div class="content">
      <p>Merhaba ${name},</p>
      <p>Mesajınız başarıyla alınmıştır. En kısa zamanda sizinle iletişime geçeceğiz.</p>
      <p><strong>Mesajınız:</strong></p>
      <p style="background-color: #f0f0f0; padding: 10px; border-radius: 5px; border-left: 4px solid #667eea;">
        ${message.replace(/\n/g, "<br>")}
      </p>
      <hr>
      <p><strong>Hızlı İletişim için:</strong></p>
      <p>
        📱 <a href="https://wa.me/905539511770">WhatsApp: 05539511770</a><br>
        📱 <a href="https://wa.me/905019390627">WhatsApp: 05019390627</a><br>
        📧 expresshizliservis@gmail.com
      </p>
      <div class="footer">
        <p>Express Mobil | Gaziantep, Türkiye</p>
        <p>Teknoloji sorunlarınız için her zaman yanınızdayız.</p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const confirmationOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "✅ Mesajınız Alındı - Express Mobil",
      html: confirmationEmail,
    };

    // Doğrulama e-postasını gönder
    await transporter.sendMail(confirmationOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

