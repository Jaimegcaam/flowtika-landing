"use client"

import { useScrollNavbar } from "@/hooks/use-scroll-navbar"
import { Workflow } from "lucide-react"
import Link from "next/link"

export function ScrollNavbar() {
  const { isVisible, isScrolled } = useScrollNavbar()

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-700 
        transition-all duration-300 ease-in-out
        ${
          isVisible
            ? `translate-y-0 ${
                isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-slate-900/90 backdrop-blur-sm shadow-md"
              }`
            : "bg-transparent backdrop-blur-none shadow-none -translate-y-full"
        }
      `}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse">
            <Workflow className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Flowtika</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#beneficios"
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group"
          >
            Beneficios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#como-funciona"
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group"
          >
            Cómo funciona
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#integraciones"
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group"
          >
            Integraciones
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group"
          >
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
