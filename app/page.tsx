"use client" 

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Shield,
  Users,
  Calendar,
  ArrowRight,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Clock,
  MapPin,
  Stethoscope,
  HeartPulse,
  Syringe,
  Pill,
  Scalpel,
  Sword,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const slides = [
  {
    src: "/hero-image.jpg",
    alt: "TMCH Medical Centre",
  },
  {
    src: "/Hero-HomePage-300x206.jpg",
    alt: "TMCH Compassionate Care",
  },
  {
    src: "/tmchbanner-2-300x200.jpg",
    alt: "TMCH Services",
  },
  {
    src: "/banner-3-300x200.jpg",
    alt: "TMCH Professional Team",
  },
  {
    src: "/general-bg-300x200.jpg",
    alt: "TMCH General Practice",
  },
  {
    src: "/service-300x200.jpg",
    alt: "TMCH Medical Services",
  },
]

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-white">
          {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <img src="/tmch.png" alt="Top Medical & Cosmetic Hub (TMCH)" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
            </div>
            <span className="text-xl font-bold">TMCH</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button>Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Updated Hero Section with Slideshow */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        {/* Slideshow Container */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🏆 Accredited General Practice
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Compassionate <span className="text-blue-300">Comprehensive Care</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-[600px]">
                  TOP MEDICAL & COSMETIC HUB (TMCH) previously known as Swanston St. Medical Centre in Melbourne CBD was established in the year 2000.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <a 
                    href="https://www.hotdoc.com.au/medical-centres/melbourne-VIC-3000/swanston-street-medical-centre/doctors" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white hover:bg-white hover:text-blue-600">
                  Call Now
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-300" />
                  <span>Student Discounts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-300" />
                  <span>Multicultural Services</span>
                </div>
              </div>
            </div>

            {/* Slideshow Navigation */}
            <div className="relative hidden lg:block h-[400px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-blue-600" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </button>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section: Above this Slide show added on 23 Jul */}
      <section id="about" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              About Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Medical Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Providing top quality service for more than 25 years
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg">
                <strong>TOP MEDICAL & COSMETIC HUB (TMCH)</strong> is an Accredited General Practice that has been providing 
                top quality service to young Families/Professionals, Vibrant Multicultural Visitors and all Students 
                with a discounted fee for more than 25 years.
              </p>
              <p className="text-lg">
                TMCH is operated by experienced specialist General Practitioners who are dedicated to serve the 
                highest quality of care with excellent organisational skills.
              </p>
              <p className="text-lg">
                Our highly trained Nurses and friendly Staff work closely as a team with our doctors for providing 
                <strong> Compassionate Comprehensive Care</strong>.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p>Level 3, 255 Bourke St, Melbourne Vic 3000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <p>Phone: 03 70460890</p>
                  <p>Fax: 03 70460840</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Hours</h3>
                  <p>9.30am – 6pm Monday to Friday</p>
                  <p>10am – 4pm Saturday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Comprehensive Medical & Cosmetic Services
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Modern and well equipped medical centre with a three bedded procedural room
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>General Health</CardTitle>
                <CardDescription>
                  Health check-ups, chronic disease management, and preventive care.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <HeartPulse className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Specialized Care</CardTitle>
                <CardDescription>
                  Skin cancer checks, weight loss clinic, and sexual health services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Syringe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Vaccinations</CardTitle>
                <CardDescription>
                  Travel vaccinations, childhood immunizations, and yellow fever vaccines.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <Sword className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Cosmetic Services</CardTitle>
                <CardDescription>
                  Featuring the latest Pico Laser for facial rejuvenation and other treatments.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Respect, Dignity & Professionalism</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              We treat all clients equally with the highest standard of care
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "TMCH has been my family doctor for years. The care and attention we receive is exceptional."
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center space-x-4">
                <Image
                  src="/patient1.jpg" // Replace with actual image
                  alt="Patient"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Long-term Patient</p>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "As an international student, I appreciate the discounted fees and multicultural understanding."
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center space-x-4">
                <Image
                  src="/student.jpg" // Replace with actual image
                  alt="Student"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-600">International Student</p>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "The cosmetic services are top-notch with professional results and care."
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center space-x-4">
                <Image
                  src="/cosmetic-patient.jpg" // Replace with actual image
                  alt="Cosmetic Patient"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-gray-600">Cosmetic Patient</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to experience compassionate care?
            </h2>
            <p className="text-xl text-blue-100">
              Book your appointment today and join our community of satisfied patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a 
                  href="https://www.hotdoc.com.au/medical-centres/melbourne-VIC-3000/swanston-street-medical-centre/doctors" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Call Now
              </Button>
            </div>
            <p className="text-sm text-blue-200">Student discounts available • Multicultural services • Walk-ins welcome</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <img src="/tmch.png" alt="TMCH" className="h-5 w-auto" />
                </div>
                <span className="text-xl font-bold">TMCH</span>
              </div>
              <p className="text-gray-400">
                Top Medical & Cosmetic Hub - Compassionate Comprehensive Care in Melbourne CBD.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <div className="space-y-2">
                <Link href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  General Health
                </Link>
                <Link href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  Cosmetic Services
                </Link>
                <Link href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  Vaccinations
                </Link>
                <Link href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  Specialized Care
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Clinic</h3>
              <div className="space-y-2">
                <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#consultation" className="block text-gray-400 hover:text-white transition-colors">
                  Fees
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-400">Level 3, 255 Bourke St, Melbourne VIC 3000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">03 70460890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">Mon-Fri: 9:30am-6pm, Sat: 10am-4pm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Top Medical & Cosmetic Hub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
