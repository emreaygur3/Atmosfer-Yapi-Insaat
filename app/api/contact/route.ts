import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Nodemailer transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Gmail adresiniz
        pass: process.env.SMTP_PASSWORD, // Gmail uygulama şifreniz
      },
    })

    // Email gönder
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Mesajların gideceği email
      replyTo: email,
      subject: `Atmosfer Yapı İnşaat - Yeni İletişim Formu: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #3B82F6; margin-bottom: 20px; border-bottom: 3px solid #3B82F6; padding-bottom: 10px;">
              Yeni İletişim Formu Mesajı
            </h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 5px 0; color: #666;">
                <strong style="color: #333;">İsim:</strong> ${name}
              </p>
              <p style="margin: 5px 0; color: #666;">
                <strong style="color: #333;">Email:</strong> 
                <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <h3 style="color: #333; margin-top: 0;">Mesaj:</h3>
              <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
              <p>Bu mesaj atmosfer-yapi-insaat.com web sitesinden gönderildi.</p>
            </div>
          </div>
        </div>
      `,
      text: `
İsim: ${name}
Email: ${email}

Mesaj:
${message}
      `,
    })

    return NextResponse.json(
      { success: true, message: "Email başarıyla gönderildi" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email gönderme hatası:", error)
    return NextResponse.json(
      { success: false, message: "Email gönderilemedi" },
      { status: 500 }
    )
  }
}
