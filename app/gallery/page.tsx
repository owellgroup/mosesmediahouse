import Header from "@/components/header"
import Footer from "@/components/footer"
import GalleryContent from "@/components/gallery-content"

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GalleryContent />
      </main>
      <Footer />
    </div>
  )
}
