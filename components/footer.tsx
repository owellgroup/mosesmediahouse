import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medialogo-7gXPBbpnCjPixs0lDfDkaSDTnYWzgg.png"
                alt="Moses Media House"
                width={220}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              Professional photography and videography services capturing your most precious moments.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-yellow-400" />
                <span className="text-lg">+264 81 342 3895</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-yellow-400" />
                <span className="text-lg">info@mosesmediahouse.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-yellow-400" />
                <span className="text-lg">Rundu, Windhoek Namibia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/services" className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg">
                Services
              </Link>
              <Link href="/gallery" className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg">
                Our Work
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg">
                About
              </Link>
              <Link href="/book-now" className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg">
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg">© 2025 Moses Media House. All rights reserved.</p>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <span className="text-gray-300 text-lg font-semibold">Powered by</span>
            <Link
              href="https://owellgraphics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity group"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/owellgraphicslogo-8QKu1N0zXc342FDq5JqSfe8JSbi3lM.png"
                alt="Owell Graphics - Design Solutions for Your Business"
                width={160}
                height={40}
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
