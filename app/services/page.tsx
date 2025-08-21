import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesContent from "@/components/services-content"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </div>
  )
}
