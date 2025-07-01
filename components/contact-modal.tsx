"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, Mail, User, Building, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar error cuando el usuario empiece a escribir
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Clonamos la respuesta para poder leer dos veces (JSON o texto)
      const resClone = response.clone()
      let parsed: { error?: string; message?: string } = {}
      try {
        parsed = await response.json()
      } catch {
        // Si el body no es JSON, usamos el clon para leer como texto
        const text = await resClone.text()
        parsed.error = text
      }

      if (!response.ok) {
        throw new Error(parsed.error || "Error al enviar el mensaje")
      }

      setIsSubmitted(true)

      // Cerrar modal después de 4 segundos
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", company: "", message: "" })
        onClose()
      }, 4000)
    } catch (error) {
      console.error("Error:", error)
      setError(error instanceof Error ? error.message : "Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSubmitted(false)
      setError(null)
      setFormData({ name: "", email: "", company: "", message: "" })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Hablar con un experto</h2>
              <p className="text-sm text-slate-400">Te contactaremos pronto</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="text-slate-400 hover:text-white hover:bg-slate-700 rounded-full h-8 w-8 p-0"
            disabled={isSubmitting}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Message */}
              {error && (
                <div className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Nombre */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Nombre completo *</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Tu nombre completo"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email *</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="tu@empresa.com"
                  disabled={isSubmitting}
                />
              </div>

              {/* Empresa */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white flex items-center space-x-2">
                  <Building className="h-4 w-4" />
                  <span>Empresa</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Nombre de tu empresa"
                  disabled={isSubmitting}
                />
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Mensaje *</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte a automatizar tus procesos..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Enviar mensaje</span>
                  </div>
                )}
              </Button>

              <p className="text-xs text-slate-400 text-center">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para brindarte información sobre
                flowtika.
              </p>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
              <p className="text-slate-300 mb-4">
                Gracias por tu interés en flowtika. Nuestro equipo se pondrá en contacto contigo dentro de las próximas
                24 horas.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Cerrando automáticamente...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
