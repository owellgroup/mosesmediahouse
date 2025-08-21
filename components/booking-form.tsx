"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Camera } from "lucide-react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    location: "",
    serviceType: "",
    packageType: "",
    guestCount: "",
    additionalServices: [] as string[],
    specialRequests: "",
    budget: "",
    hearAboutUs: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-900 to-green-800 border border-green-700 rounded-lg p-8">
            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-300 mb-4">Booking Request Submitted!</h2>
            <p className="text-green-200 mb-6">
              Thank you for choosing Moses Media House! We've received your booking request and will contact you within
              24 hours to confirm the details and discuss your requirements.
            </p>
            <div className="space-y-2 text-sm text-green-300">
              <p>📧 Check your email for a confirmation message</p>
              <p>📱 We'll call you at {formData.phone} to discuss details</p>
              <p>📅 Your requested date: {formData.eventDate}</p>
            </div>
            <Button
              className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black"
              onClick={() => (window.location.href = "/")}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">Book Your Session</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to capture your special moments? Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center space-x-2 text-yellow-400">
              <Camera className="h-6 w-6" />
              <span>Booking Information</span>
            </CardTitle>
            <CardDescription className="text-gray-300">
              Please provide as much detail as possible to help us prepare the perfect package for your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-200">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="mt-1 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-200">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="mt-1 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-gray-200">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-1 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-200">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="mt-1 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-yellow-400">
                  <Calendar className="h-5 w-5" />
                  <span>Event Details</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="eventDate" className="text-gray-200">
                      Event Date *
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      required
                      className="mt-1 bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventTime" className="text-gray-200">
                      Event Time
                    </Label>
                    <Input
                      id="eventTime"
                      type="time"
                      value={formData.eventTime}
                      onChange={(e) => handleInputChange("eventTime", e.target.value)}
                      className="mt-1 bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="location" className="text-gray-200">
                    Event Location *
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="City, venue name, or address"
                    required
                    className="mt-1 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">Service Selection</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="serviceType" className="text-gray-200">
                      Service Type *
                    </Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => handleInputChange("serviceType", value)}
                    >
                      <SelectTrigger className="mt-1 bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="family">Family Portrait</SelectItem>
                        <SelectItem value="individual">Individual Portrait</SelectItem>
                        <SelectItem value="graduation">Graduation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="packageType" className="text-gray-200">
                      Preferred Package
                    </Label>
                    <Select
                      value={formData.packageType}
                      onValueChange={(value) => handleInputChange("packageType", value)}
                    >
                      <SelectTrigger className="mt-1 bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="silver">Silver Package</SelectItem>
                        <SelectItem value="gold">Gold Package</SelectItem>
                        <SelectItem value="platinum">Platinum Package</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                        <SelectItem value="consultation">Need Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="guestCount" className="text-gray-200">
                    Expected Guest Count
                  </Label>
                  <Input
                    id="guestCount"
                    type="number"
                    value={formData.guestCount}
                    onChange={(e) => handleInputChange("guestCount", e.target.value)}
                    placeholder="Approximate number of guests"
                    className="mt-1 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              {/* Additional Services */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">Additional Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Drone Coverage",
                    "Photo Booth",
                    "Same Day Highlights",
                    "Additional Photographer",
                    "Live Streaming",
                    "Photo Prints",
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.additionalServices.includes(service)}
                        onCheckedChange={(checked) => handleCheckboxChange(service, checked as boolean)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                      <Label htmlFor={service} className="text-sm text-gray-200">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t border-gray-700 pt-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="budget" className="text-gray-200">
                      Budget Range
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="mt-1 bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="under-5000">Under N$5,000</SelectItem>
                        <SelectItem value="5000-10000">N$5,000 - N$10,000</SelectItem>
                        <SelectItem value="10000-15000">N$10,000 - N$15,000</SelectItem>
                        <SelectItem value="15000-20000">N$15,000 - N$20,000</SelectItem>
                        <SelectItem value="over-20000">Over N$20,000</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests" className="text-gray-200">
                      Special Requests or Additional Information
                    </Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Tell us about any special requirements, themes, or important details we should know..."
                      rows={4}
                      className="mt-1 bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hearAboutUs" className="text-gray-200">
                      How did you hear about us?
                    </Label>
                    <Select
                      value={formData.hearAboutUs}
                      onValueChange={(value) => handleInputChange("hearAboutUs", value)}
                    >
                      <SelectTrigger className="mt-1 bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="referral">Friend/Family Referral</SelectItem>
                        <SelectItem value="previous-client">Previous Client</SelectItem>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t border-gray-700 pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </Button>
                <p className="text-sm text-gray-400 mt-3 text-center">
                  We'll contact you within 24 hours to confirm your booking and discuss the details
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
