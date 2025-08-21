import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Video, MapPin, Users, Award, Clock } from "lucide-react"
import Link from "next/link"

export default function AboutContent() {
  const features = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Capturing life's most precious moments with artistic vision and technical excellence",
    },
    {
      icon: Video,
      title: "Videography Services",
      description: "Creating cinematic stories that preserve your memories for generations to come",
    },
    {
      icon: MapPin,
      title: "Namibia-Wide Coverage",
      description: "Based in Rundu, we travel throughout Namibia to bring our services to you",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Every client receives individual attention and customized packages for their needs",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Professional equipment and expertise ensuring the highest quality results",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Fast turnaround times without compromising on quality or attention to detail",
    },
  ]

  return (
    <div className="py-16 text-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Moses Media House</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for professional photography and videography services across Namibia
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Welcome to Moses Media House, where passion meets professionalism in the world of photography and
                  videography. We are dedicated to capturing life's most precious moments and transforming them into
                  timeless memories that you'll treasure forever.
                </p>
                <p>
                  Based in the beautiful city of Rundu, we proudly serve clients throughout Namibia. Whether you're
                  planning a wedding in Windhoek, a corporate event in Swakopmund, or a family gathering in Oshakati,
                  our team travels to bring our expertise directly to you.
                </p>
                <p>
                  Our comprehensive services include wedding photography and videography, corporate event documentation,
                  family portraits, graduation ceremonies, and individual photo sessions. We believe every moment has a
                  story worth telling, and we're here to help you tell yours.
                </p>
                <p>
                  At Moses Media House, we combine artistic vision with technical excellence, using professional-grade
                  equipment and years of experience to deliver results that exceed expectations. Your satisfaction is
                  our priority, and we work closely with each client to ensure their unique vision comes to life.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl border-4 border-yellow-400">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About.jpg-uhlxyY8sWVSO2uiVqOkp4HRcsq7TmV.jpeg"
                  alt="Moses Media House Professional Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 border-t border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Why Choose Moses Media House?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We bring together creativity, professionalism, and technical expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-2xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-yellow-400"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-yellow-400 rounded-full">
                      <feature.icon className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 border-t border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to capture your special moments? We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
                <p className="text-gray-300">Rundu, Windhoek Namibia</p>
                <p className="text-sm text-gray-400 mt-2">We travel throughout Namibia</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <CardContent className="pt-6">
                <svg
                  className="h-8 w-8 mx-auto mb-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                <p className="text-gray-300">+264 81 456 7890</p>
                <p className="text-sm text-gray-400 mt-2">Available 7 days a week</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <CardContent className="pt-6">
                <svg
                  className="h-8 w-8 mx-auto mb-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-300">mesesmediahouse@gmail.com</p>
                <p className="text-sm text-gray-400 mt-2">Quick response guaranteed</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Let's discuss your photography and videography needs and create something amazing together
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
