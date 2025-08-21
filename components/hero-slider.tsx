"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide1.jpg-9nhaNBw9PUNCrtIlRTjVshPPRfj8cP.jpeg",
    title: "Wedding & Graduation Photography",
    subtitle:
      "Capturing your most precious moments with elegance and style. From intimate ceremonies to grand celebrations, we preserve every beautiful detail of your special day.",
    cta: "Book Wedding Package",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide2.jpg-1eKSVg6Aoo99VXNTtU5UhSWKnAw5Sa.jpeg",
    title: "Corporate Events Photography",
    subtitle:
      "Professional documentation of your business events, conferences, and corporate gatherings. We help you showcase your brand's success and professional achievements.",
    cta: "Book Corporate Shoot",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide3.jpg-NJe7Q8RjyG4MuvLEQezwYzc9NvCniS.jpeg",
    title: "Family & Individual Portraits",
    subtitle:
      "Beautiful family portraits and individual photography sessions that capture your personality and create lasting memories for generations to come.",
    cta: "Book Portrait Session",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <Link href="/book-now">
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg animate-fade-in-up animation-delay-400"
                  >
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-yellow-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
