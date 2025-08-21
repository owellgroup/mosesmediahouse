import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Camera, Video, Users } from "lucide-react"
import Link from "next/link"

const weddingPackages = [
  {
    name: "Silver Package",
    price: "N$7,499",
    features: ["Wedding Videos (Edited)", "Brides Preparation", "32GB USB"],
    popular: false,
  },
  {
    name: "Gold Package",
    price: "N$10,499",
    features: [
      "Full Video (Edited)",
      "Unlimited Pictures (All Edited)",
      "Grooms Preparation",
      "Couple Shoot (X1 Look)",
      "Invitation card (Digital Ones)",
      "10 Count Downs",
      "32GB USB",
    ],
    popular: true,
  },
  {
    name: "Platinum Package",
    price: "N$14,999",
    features: [
      "Pre Wedding Shoot (Traditional prep)",
      "Full Wedding Video (Edited)",
      "Unlimited Pictures (All Edited)",
      "Grooms Preparation",
      "Brides Preparation",
      "Couple Shoot (x2 Look)",
      "Invitation card (Digital & Printed)",
      "Wedding Highlights",
      "10 Count Downs",
      "x1 A0 Canvas",
      "32GB USB",
    ],
    popular: false,
  },
]

const additionalWeddingServices = [
  {
    name: "Wedding Pictures Only",
    price: "N$4,000",
    description: "Professional wedding photography without videography",
  },
  {
    name: "Drone Coverage",
    price: "N$2,500",
    description: "Aerial photography and videography for your special day",
  },
]

const generalShootPackages = [
  {
    category: "Single",
    options: [
      { looks: "x1 look", pictures: "10 pictures", price: "N$899" },
      { looks: "x2 look", pictures: "15 pictures", price: "N$1,299" },
    ],
  },
  {
    category: "Couples",
    options: [
      { looks: "x1 look", pictures: "10 pictures", price: "N$1,499" },
      { looks: "x2 look", pictures: "15 pictures", price: "N$2,000" },
    ],
  },
  {
    category: "Family",
    options: [
      { looks: "x1 look", pictures: "10 pictures", price: "N$1,499" },
      { looks: "x2 look", pictures: "15 pictures", price: "N$1,500" },
    ],
  },
]

const corporatePackages = [
  {
    name: "Hourly Photography",
    price: "N$850",
    unit: "per hour",
    description: "Professional event photography on an hourly basis",
    icon: Camera,
  },
  {
    name: "Full Day Photography",
    price: "N$4,000",
    unit: "per day",
    description: "Complete photography coverage for your entire event",
    icon: Camera,
  },
  {
    name: "Videography Package",
    price: "N$5,000",
    unit: "per event",
    description: "Professional videography services for corporate events",
    icon: Video,
  },
]

export default function ServicesContent() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional photography and videography packages tailored to capture your most important moments
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wedding Services */}
        <section className="py-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service1.jpg-bzJ80JnOcBxAh4vQ2kIANWd2oiFgxw.jpeg"
                alt="Wedding Photography"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl object-cover border-4 border-yellow-400"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Wedding Packages</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Capture every precious moment of your special day with our comprehensive wedding photography and
              videography packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {weddingPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative bg-gray-800 border-gray-700 text-white ${pkg.popular ? "ring-2 ring-yellow-400" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-yellow-400">{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book-now">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                      Book This Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Wedding Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalWeddingServices.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-white">{service.name}</CardTitle>
                    <span className="text-2xl font-bold text-yellow-400">{service.price}</span>
                  </div>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/book-now">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-yellow-400 bg-opacity-20 border border-yellow-400 rounded-lg">
            <p className="text-sm text-yellow-200 text-center">
              <strong>Note:</strong> Transport and Accommodation not included in all Wedding Packages
            </p>
          </div>
        </section>

        {/* General Shoots */}
        <section className="py-16 border-t border-gray-700">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Service2.jpg-9lH4r7RnmUnjUFQk7JOa7vKhYdrFWS.jpeg"
                alt="General Photography"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl object-cover border-4 border-yellow-400"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">General Shoots</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Including Graduations, Families, and Individual Portrait Sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {generalShootPackages.map((category, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center space-x-2 text-white">
                    <Users className="h-6 w-6 text-yellow-400" />
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.options.map((option, idx) => (
                      <div key={idx} className="border border-gray-600 rounded-lg p-4 bg-gray-700">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-white">{option.looks}</span>
                          <span className="text-xl font-bold text-yellow-400">{option.price}</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-3">{option.pictures} (Professional retouched)</p>
                        <Link href="/book-now">
                          <Button
                            size="sm"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                          >
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Corporate Shoots */}
        <section className="py-16 border-t border-gray-700">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Service3.jpg-mvevC523DZh0GnBJXu12dj63UvFkF5.jpeg"
                alt="Corporate Photography"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl object-cover border-4 border-yellow-400"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Corporate Shoots</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Professional documentation for your business events, conferences, and corporate gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-white">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-yellow-400 rounded-full">
                      <pkg.icon className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{pkg.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-yellow-400">
                    {pkg.price} <span className="text-sm font-normal text-gray-300">{pkg.unit}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 text-center">{pkg.description}</p>
                  <Link href="/book-now">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Session?</h2>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your photography needs and create lasting memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-semibold px-8">
                  Book Now
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white px-8 bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
