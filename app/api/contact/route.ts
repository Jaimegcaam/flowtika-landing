export const runtime = "nodejs"

import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("=== Iniciando envío de email con EmailJS ===")

    const { name, email, company, message } = await request.json()
    console.log("Datos recibidos:", { name, email, company: company || "N/A", message })

    // Validación básica
    if (!name || !email || !message) {
      console.log("Error: Faltan campos requeridos")
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Usar las variables de entorno que ya están configuradas
    const serviceId = process.env.EMAILJS_SERVICE_ID || "service_rrqaq38"
    const templateId = process.env.EMAILJS_TEMPLATE_ID || "template_goo2s6g"
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || "zen0Wi1RbrM1qLYln"
    const privateKey = process.env.EMAILJS_PRIVATE_KEY || "s-r7uV04UBI7m7rgbPDMa"

    console.log("Usando configuración EmailJS:", {
      serviceId: serviceId.substring(0, 10) + "...",
      templateId: templateId.substring(0, 10) + "...",
      publicKey: publicKey.substring(0, 10) + "...",
      privateKey: privateKey.substring(0, 10) + "...",
    })

    // Preparar datos para EmailJS
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        from_name: name,
        from_email: email,
        company: company || "No especificada",
        message: message,
        to_email: "jaime.caamano@flowtika.es",
        reply_to: email,
        date: new Date().toLocaleString("es-ES", {
          timeZone: "Europe/Madrid",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    }

    console.log("Enviando email con EmailJS...")
    console.log("Payload:", JSON.stringify(emailData, null, 2))

    // Enviar email usando EmailJS API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    const responseText = await response.text()
    console.log("Respuesta de EmailJS:", response.status, responseText)

    if (!response.ok) {
      console.log("Error de EmailJS:", responseText)
      throw new Error(`Error de EmailJS (${response.status}): ${responseText}`)
    }

    console.log("Email enviado exitosamente")
    return NextResponse.json({ message: "Email enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("=== Error completo ===")
    console.error("Error:", error)

    let errorMessage = "Error interno del servidor"

    if (error instanceof Error) {
      errorMessage = error.message
    } else if (typeof error === "string") {
      errorMessage = error
    }

    console.log("Enviando error al cliente:", errorMessage)
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
