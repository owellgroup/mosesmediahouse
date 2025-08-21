import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSlider from "@/components/hero-slider"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
      </main>
      <Footer />
    </div>
  )
}
