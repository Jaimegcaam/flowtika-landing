"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Clock,
  Settings,
  Users,
  Play,
  MessageCircle,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  Workflow,
  Target,
  TrendingUp,
  Shield,
  Sparkles,
  ArrowRight,
  MousePointer,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { ToolsScroller } from "@/components/tools-scroller"
import { AnimatedBackground } from "@/components/animated-background"
import { TypingText } from "@/components/typing-text"
import { ScrollNavbar } from "@/components/scroll-navbar"
import { ContactModal } from "@/components/contact-modal"

export default function FlowtekaLanding() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Enlaces de contacto
  const whatsappDemoLink =
    "https://wa.me/695827053?text=¡Hola! Me interesa solicitar una demo de flowtika para automatizar mi negocio. ¿Podrían ayudarme?"
  const whatsappContactLink =
    "https://wa.me/695827053?text=¡Hola! Me interesa conocer más sobre flowtika y cómo puede ayudar a automatizar mi negocio."

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Header */}
      <ScrollNavbar />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Fondo animado sutil */}
        <AnimatedBackground />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <AnimatedSection animation="fade-in-left">
                <div className="flex items-center space-x-2 mb-6">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-2 animate-pulse">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Automatización Inteligente
                  </Badge>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-left" delay="animate-delay-200">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block text-white mb-2">Automatiza</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    <TypingText texts={["tu negocio", "tus ventas", "tus procesos", "tu éxito"]} speed={150} />
                  </span>
                  <span className="block text-slate-300 text-3xl md:text-4xl mt-4 font-normal">
                    sin escribir código
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-left" delay="animate-delay-400">
                <div className="relative">
                  <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                    Flowtika conecta tus herramientas favoritas y automatiza tareas repetitivas para que puedas{" "}
                    <span className="font-semibold text-blue-400">enfocarte en vender más</span> y{" "}
                    <span className="font-semibold text-purple-400">crecer tu negocio</span>.
                  </p>
                  <div className="absolute -right-4 top-0 text-blue-400 animate-bounce">
                    <MousePointer className="w-6 h-6" />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-left" delay="animate-delay-600">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={whatsappDemoLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    >
                      <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Solicita una demo
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={openContactModal}
                    className="group text-lg px-8 py-6 border-2 border-slate-600 bg-slate-800/80 text-white hover:bg-slate-700 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Hablar con experto
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-left" delay="animate-delay-800">
                <div className="flex items-center space-x-6 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Configuración personalizada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                    <span>Soporte incluido</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Interactive Visual */}
            <div className="relative">
              <AnimatedSection animation="scale-in" delay="animate-delay-400">
                <div className="relative">
                  {/* Main dashboard mockup */}
                  <div className="relative rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="rounded-2xl bg-slate-800 p-6">
                      <Image
                        src="workflow.webp"
                        alt="Flujo de Automatizacion"
                        width={600}
                        height={400}
                        className="w-full rounded-lg shadow-lg object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating stats cards */}
                  <div className="absolute -top-4 -left-4 bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-4 animate-float">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-white">+ Ventas</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-4 animate-float delay-1000">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-white">20h Ahorradas</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-8 bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-4 animate-float delay-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-white">200+ Apps</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <AnimatedSection animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Transforma tu negocio con automatización inteligente
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay="animate-delay-200">
              <p className="text-lg text-slate-300">
                Descubre cómo flowtika puede revolucionar la forma en que trabajas
              </p>
            </AnimatedSection>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection animation="fade-in-up" delay="animate-delay-100">
              <Card className="border border-slate-700 bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 group-hover:scale-110 transition-transform">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">Automatización de Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300">
                    Captura, califica y distribuye leads automáticamente desde múltiples fuentes. Nunca pierdas una
                    oportunidad de venta.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay="animate-delay-200">
              <Card className="border border-slate-700 bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">Ahorro de Tiempo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300">
                    Elimina tareas repetitivas y ahorra hasta 20 horas semanales. Dedica tu tiempo a lo que realmente
                    importa.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay="animate-delay-300">
              <Card className="border border-slate-700 bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 group-hover:scale-110 transition-transform">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">Flujos Personalizados</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300">
                    Crea automatizaciones únicas para tu negocio. Conecta cualquier herramienta con nuestra interfaz
                    visual.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay="animate-delay-400">
              <Card className="border border-slate-700 bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">Aumenta Ventas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300">
                    Responde más rápido a tus clientes y mejora tu tasa de conversión con seguimientos automáticos.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay="animate-delay-500">
              <Card className="border border-slate-700 bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-red-600 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">Datos Seguros</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300">
                    Tus datos están protegidos con encriptación de nivel empresarial y cumplimiento de estándares
                    internacionales.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay="animate-delay-600">
              <Card className="border border-slate-700 bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">Soporte 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300">
                    Nuestro equipo de expertos está disponible para ayudarte a configurar y optimizar tus
                    automatizaciones.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <AnimatedSection animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Cómo funciona en 3 simples pasos</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay="animate-delay-200">
              <p className="text-lg text-slate-300">Configura tu automatización en minutos, no en semanas</p>
            </AnimatedSection>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <AnimatedSection animation="fade-in-left" delay="animate-delay-100">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-2xl font-bold shadow-lg hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white">Conecta tus herramientas</h3>
                <p className="text-slate-300">
                  Integra fácilmente tus aplicaciones favoritas: CRM, email, WhatsApp, hojas de cálculo y más.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay="animate-delay-300">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl font-bold shadow-lg hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white">Diseña tu flujo</h3>
                <p className="text-slate-300">
                  Usa nuestro editor visual para crear automatizaciones personalizadas sin necesidad de programar.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay="animate-delay-500">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-2xl font-bold shadow-lg hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white">Activa y relájate</h3>
                <p className="text-slate-300">
                  Deja que flowtika trabaje por ti 24/7. Monitorea resultados y optimiza cuando sea necesario.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tools Integration */}
      <div id="integraciones">
        <ToolsScroller />
      </div>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <AnimatedSection animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Preguntas frecuentes</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay="animate-delay-200">
              <p className="text-lg text-slate-300">Resolvemos tus dudas más comunes</p>
            </AnimatedSection>
          </div>

          <div className="mx-auto max-w-3xl">
            <AnimatedSection animation="fade-in-up" delay="animate-delay-300">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-slate-700 bg-slate-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white hover:text-blue-400">
                    ¿Necesito conocimientos técnicos para usar flowtika?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    No, flowtika está diseñado para ser usado por cualquier persona sin conocimientos de programación.
                    Nuestra interfaz visual te permite crear automatizaciones arrastrando y soltando elementos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-slate-700 bg-slate-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white hover:text-blue-400">
                    ¿Qué herramientas puedo conectar?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Puedes conectar más de 200 aplicaciones incluyendo CRMs (HubSpot, Salesforce), herramientas de email
                    (Gmail, Outlook), WhatsApp Business, hojas de cálculo, redes sociales y muchas más.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-slate-700 bg-slate-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white hover:text-blue-400">
                    ¿Cuánto tiempo toma configurar una automatización?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Las automatizaciones básicas se pueden configurar en 5-10 minutos. Para flujos más complejos,
                    nuestro equipo de soporte te ayuda sin costo adicional.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-slate-700 bg-slate-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white hover:text-blue-400">
                    ¿Cómo funciona el pricing?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Ofrecemos planes flexibles basados en el número de automatizaciones y operaciones mensuales.
                    Contacta con nuestro equipo para una cotización personalizada según tus necesidades.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-slate-700 bg-slate-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white hover:text-blue-400">
                    ¿Mis datos están seguros?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Sí, utilizamos encriptación de nivel empresarial y cumplimos con estándares internacionales de
                    seguridad. Tus datos nunca se comparten con terceros.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">¿Listo para automatizar tu negocio?</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay="animate-delay-200">
              <p className="mb-8 text-lg text-blue-100">
                Únete a cientos de empresas que ya están ahorrando tiempo y aumentando sus ventas con flowtika
              </p>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay="animate-delay-400">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href={whatsappDemoLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg w-full sm:w-auto"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Solicita una demo
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openContactModal}
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 bg-transparent w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hablar con un experto
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-900 text-white py-16 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500">
                  <Workflow className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">flowtika</span>
              </div>
              <p className="text-slate-400 mb-4">
                Automatiza tu negocio sin escribir código. Conecta tus herramientas y enfócate en vender más.
              </p>
              <div className="flex space-x-4">
                <p className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </p>
                <p className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </p>
                <p className="text-slate-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Producto</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <p className="hover:text-white transition-colors">
                    Características
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Integraciones
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Casos de uso
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    API
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Soporte</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <p className="hover:text-white transition-colors">
                    Centro de ayuda
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Documentación
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Tutoriales
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Contacto
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Contacto</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <button onClick={openContactModal} className="hover:text-white transition-colors text-left">
                    jaime.caamano@flowtika.es
                  </button>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <Link href="tel:+34 695827053" className="hover:text-white transition-colors">
                    +34 695827053
                  </Link>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <Link
                    href={whatsappContactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: +34 695827053
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 flowtika. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <p className="text-slate-400 hover:text-white text-sm transition-colors">
                Términos de servicio
              </p>
              <p className="text-slate-400 hover:text-white text-sm transition-colors">
                Política de privacidad
              </p>
              <p className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookies
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href={whatsappContactLink} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg h-14 w-14 p-0 animate-pulse hover:scale-110 transition-all duration-300"
            title="Contactar por WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </div>
  )
}