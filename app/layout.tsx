import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Moses Media House - Professional Photography & Videography",
  description:
    "Professional photography and videography services in Rundu, Windhoek, Namibia. Specializing in weddings, corporate events, family portraits, and graduations.",
  generator: "Moses Media House",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-uW4qH8LHk9OgPACHTrL4A3867QhqX9.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-uW4qH8LHk9OgPACHTrL4A3867QhqX9.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-uW4qH8LHk9OgPACHTrL4A3867QhqX9.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
