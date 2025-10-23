"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Book Now", href: "/book-now" },
  ]

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medialogo-7gXPBbpnCjPixs0lDfDkaSDTnYWzgg.png"
              alt="Moses Media House"
              width={200}
              height={80}
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+264813423895"
              className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-pulse"
            >
              <Phone className="h-4 w-4 animate-bounce" />
              <span>+264 81 342 3895</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+264813423895"
                className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-2 rounded-full font-semibold mx-3 mt-2 justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>+264 81 342 3895</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
