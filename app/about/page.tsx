import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
