"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryImages = [
  // Wedding Images
  {
    filename: "wedding-beach-couple.jpg",
    category: "weddings",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40MosesMediaHouse%2035.jpg-M8pjP53ftaOJLi19JMpfCmz1jchlCu.jpeg",
  },
  {
    filename: "wedding-ceremony-indoor.jpg",
    category: "weddings",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40MosesMediaHouse%2010%20C.jpg-wBLN4tEd7FrHFU1swNNNuINLEsLjFG.jpeg",
  },
  {
    filename: "wedding-vows-exchange.jpg",
    category: "weddings",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%20BB%20C%20298.jpg-wyF6WJWpZlpbWYtKzPNDEtYzwB0fDP.jpeg",
  },
  {
    filename: "bridal-portrait-garden.jpg",
    category: "weddings",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40MosesMediaHouse%2017.jpg-IBfcNkr97l7WChFidTuAbXSOFO5F3p.jpeg",
  },
  {
    filename: "couple-balcony-portrait.jpg",
    category: "weddings",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40MosesMediaHouse%2015%20WEDDING.jpg-cbVWEnQc1opp2D9JRmgVTaNfIBQ8em.jpeg",
  },
  {
    filename: "ceremony-happy-moment.jpg",
    category: "weddings",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%20BB%20C%20304.jpg-vUduKVmGO1mTlckg3DeTFbC8MR3Maa.jpeg",
  },
  {
    filename: "beach-stylish-couple.jpg",
    category: "weddings",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40MosesMediaHouse%2022.jpg-8WqhDh6VOxvmeHAvlygVu8aEebqGvb.jpeg",
  },
  {
    filename: "luxury-venue-couple.jpg",
    category: "weddings",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40MosesMediaHouse%202%20QUEENNN.jpg-VkO3zaCHypeou13XFNAjKFqjOhV10F.jpeg",
  },
  // Corporate Event Images
  {
    filename: "corporate-vip-audience.jpg",
    category: "corporate",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%2024.jpg-nzo8x7cxN3cFxCisU8VSkcBWf7rz9K.jpeg",
  },
  {
    filename: "corporate-event-guests.jpg",
    category: "corporate",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%2047.jpg-flDNJVbrYXUIhWa2c3hwkF7NkffrAT.jpeg",
  },
  {
    filename: "conference-audience.jpg",
    category: "corporate",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%20142.jpg-mKGzkzD25Nyg9sOp97Lr4q5bXVoe4v.jpeg",
  },
  {
    filename: "corporate-panel-event.jpg",
    category: "corporate",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%2035.jpg-XsMmPMDpfBMkDarbWIhnsmef81qTh9.jpeg",
  },
  {
    filename: "keynote-speaker.jpg",
    category: "corporate",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%2035%202.jpg-z3GyUMm7xEqKhygrNG0Ak3MgxxY8GY.jpeg",
  },
  // Family & Portrait Images
  {
    filename: "luxury-couple-portrait.jpg",
    category: "family",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%205.jpg%20EDITED%20AGAIN.jpg-0eGjTw6gsMFNndYJ0ESUo1EN9a6BMy.jpeg",
  },
  {
    filename: "fashion-green-studio.jpg",
    category: "family",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%20JOJO%2013.jpg-IrQVpBAPC8fX8rNoMSmTG7yKa88UJj.jpeg",
  },
  {
    filename: "cultural-sunset-portrait.jpg",
    category: "family",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%2029.jpg-eA6l4on2pw45VSFEv9E4B4bJVgxuil.jpeg",
  },
  {
    filename: "romantic-couple-studio.jpg",
    category: "family",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.33.26%20%283%29-TVIRWPVI6JhKpdRMjNPujI3Vfy1Bj3.jpeg",
  },
  {
    filename: "professional-male-portrait.jpg",
    category: "family",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOSSES.jpg-GFV2GRMbNfCRnMH1crxvtALDth4BzU.jpeg",
  },
  {
    filename: "creative-fashion-portrait.jpg",
    category: "family",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%20ST.jpg%20A.jpg-epcoruPIUjloOPD67Po2G2G9aGB42U.jpeg",
  },
  {
    filename: "cultural-fashion-studio.jpg",
    category: "family",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%20Pro.jpg-2BL27IKGKDyMA8WxG0fuEf9BoTOpmY.jpeg",
  },
  {
    filename: "golden-hour-cultural.jpg",
    category: "family",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%2012.jpg-gS5el2HCk1qLAJc9ISL81FrBel3BEf.jpeg",
  },
  // Graduation Images
  {
    filename: "professional-male-graduate.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%20%20MANO%2025.jpg-9BvUAB6FSD8CxfJUpUkCLMhXmnfUtP.jpeg",
  },
  {
    filename: "joyful-female-graduate.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luccy.jpg-PJwi5fTKa3xSFzc4v9u21VPYK6c1I9.jpeg",
  },
  {
    filename: "elegant-graduate-stairs.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40MosesMediaHouse-12.jpg-XC89CcXS2l20TbeVnVoYTz6ntVqCyy.jpeg",
  },
  {
    filename: "couple-graduation-portrait.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DONE%209.jpg-7twwulH2161ykpVC7squesQcq2r8Rl.jpeg",
  },
  {
    filename: "confident-female-graduate.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graduation%201.jpg-1opk3GWyw77sraTLcBZNDoqIKBjCBj.jpeg",
  },
  {
    filename: "stylish-female-graduate.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eugenia%207.jpg-JAWzAsVaJZsRcqYM2OExFZSYSaCnXA.jpeg",
  },
  {
    filename: "creative-graduation-portrait.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NJ2.jpg-zgF5rLk9LNDCRmyxsUX0gAP7UQwf87.jpeg",
  },
  {
    filename: "mother-child-graduation.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20B.jpg-9KkGeg6x7bUUX823RrBLeJtzcCg03x.jpeg",
  },
  {
    filename: "elegant-graduate-purple.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MosesMediaHouse%2015.jpg%20GG.jpg-tHsdlydAQfbPVbwDczOlnmhnd0ewxr.jpeg",
  },
  {
    filename: "professional-graduate-geometric.jpg",
    category: "graduations",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40MosesMediaHouse%20TINO.jpg-qCV5vMzGZuTKkPNB2O42z4uy5EBN6e.jpeg",
  },
]

export default function GalleryContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageFilter, setImageFilter] = useState<string>("all")

  const filters = [
    { id: "all", label: "All Work" },
    { id: "weddings", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "family", label: "Family & Portraits" },
    { id: "graduations", label: "Graduations" },
  ]

  const filteredImages =
    imageFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === imageFilter)

  return (
    <div className="py-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setImageFilter(filter.id)}
              variant={imageFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-2 transition-all duration-300 ${
                imageFilter === filter.id
                  ? "bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg"
                  : "bg-black border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-yellow-400/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Images in This Category</h3>
              <p className="text-gray-300 mb-6">
                We're constantly adding new work to our portfolio. Check back soon or explore other categories!
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-black text-white rounded-lg p-12 border border-gray-700">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Love What You See?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us capture your special moments with the same passion and professionalism
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 transition-all duration-300 hover:shadow-lg"
              onClick={() => (window.location.href = "/book-now")}
            >
              Book Your Session
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </Button>
            <div className="relative">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
