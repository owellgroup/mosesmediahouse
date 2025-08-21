import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingForm from "@/components/booking-form"

export default function BookNowPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}
