import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Truck,
  Star,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Shirt,
  Shield,
  Sparkles,
  Heart,
  Calendar,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ImprovedHomepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demo
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isMobileMenuOpen &&
        !target.closest("#mobile-menu") &&
        !target.closest('[aria-controls="mobile-menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobileMenuOpen]);

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-white flex items-center justify-center"
        role="status"
        aria-label="Loading"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-700 mx-auto mb-4"></div>
          <p className="text-brand-600">Loading CleanCare Express...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-700 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Top Promotional Banner */}
      <div
        className="bg-brand-800 text-center py-2"
        role="banner"
        aria-label="Special offer announcement"
      >
        <p className="text-cream-200 text-sm font-medium">
          First Time Customers Receive 30% Off Their First Order
        </p>
      </div>

      {/* Navigation */}
      <header>
        <nav
          className="bg-cream-50 shadow-sm border-b border-cream-200"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-brand-700">
                    <Link
                      to="/"
                      className="focus:outline-none focus:ring-2 focus:ring-brand-600 rounded"
                    >
                      CleanCare Express
                    </Link>
                  </h1>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div
                  className="ml-10 flex items-baseline space-x-8"
                  role="menubar"
                >
                  {[
                    { href: "#services", label: "Services" },
                    { href: "#how-it-works", label: "How It Works" },
                    { href: "#pricing", label: "Pricing" },
                    { href: "#about", label: "About" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-brand-700 hover:text-brand-800 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-600 rounded"
                      role="menuitem"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Desktop Login & Mobile Menu Button */}
              <div className="flex items-center space-x-2">
                <Link to="/dashboard" className="hidden sm:block">
                  <Button variant="outline">Customer Login</Button>
                </Link>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden" id="mobile-menu" role="menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream-100 border-t border-cream-200">
                  {[
                    { href: "#services", label: "Services" },
                    { href: "#how-it-works", label: "How It Works" },
                    { href: "#pricing", label: "Pricing" },
                    { href: "#about", label: "About" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-brand-700 hover:text-brand-800 block px-3 py-2 text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-600 rounded"
                      role="menuitem"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-2 border-t border-cream-200">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button variant="outline" className="w-full">
                        Customer Login
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section
          className="bg-gradient-to-br from-cream-50 to-cream-100 py-20"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cream-200 text-brand-800">
                    <Star className="w-4 h-4 mr-2" aria-hidden="true" />
                    Family Owned Since 1985
                  </span>
                </div>
                <h1
                  id="hero-heading"
                  className="text-5xl font-bold text-brand-900 mb-6"
                >
                  Premium Dry Cleaning
                  <span className="text-brand-700 block">
                    Delivered to Your Door
                  </span>
                </h1>
                <p className="text-xl text-brand-600 mb-8">
                  Professional cleaning services with free pickup and delivery.
                  Experience the convenience of premium garment care without
                  leaving your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4"
                    aria-describedby="schedule-description"
                  >
                    <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                    Schedule Pickup
                  </Button>
                  <p id="schedule-description" className="sr-only">
                    Schedule a free pickup for your dry cleaning items
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Button>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-brand-600">
                  <div className="flex items-center">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>Free Pickup & Delivery</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>24-48 Hour Turnaround</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0cb748d1794f46448d8f1fa3f49fe50f%2Fdaf4bd06c9eb4a5c90d07fd827edcc0d?format=webp&width=800"
                    alt="Professional dry cleaning service showing a woman in white uniform standing next to clothing racks with clean garments in a modern green-walled facility"
                    className="w-full h-96 object-cover rounded-lg"
                    loading="eager"
                  />
                  <div
                    className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold"
                    role="note"
                  >
                    Same Day Service Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-white"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="services-heading"
                className="text-4xl font-bold text-brand-800 mb-4"
              >
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From everyday garments to specialty items, we provide expert
                care for all your clothing needs.
              </p>
            </div>
            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              role="list"
            >
              {[
                {
                  icon: Shirt,
                  title: "Dry Cleaning",
                  description:
                    "Professional cleaning for delicate fabrics and business attire",
                },
                {
                  icon: Sparkles,
                  title: "Alterations",
                  description:
                    "Expert tailoring and alterations to ensure the perfect fit",
                },
                {
                  icon: Shield,
                  title: "Leather Care",
                  description:
                    "Specialized cleaning and conditioning for leather goods",
                },
                {
                  icon: Heart,
                  title: "Wedding Dress Preservation",
                  description:
                    "Protect your precious memories with professional preservation",
                },
              ].map((service, index) => (
                <Card key={index} className="text-center" role="listitem">
                  <CardHeader>
                    <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon
                        className="w-8 h-8 text-brand-700"
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-20 bg-cream-50"
          aria-labelledby="how-it-works-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="how-it-works-heading"
                className="text-4xl font-bold text-brand-800 mb-4"
              >
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple, convenient, and professional
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8" role="list">
              {[
                {
                  icon: Calendar,
                  step: "1",
                  title: "Schedule",
                  description:
                    "Book your pickup online or by phone. Choose your preferred time slot.",
                },
                {
                  icon: Truck,
                  step: "2",
                  title: "Pickup",
                  description:
                    "Our driver arrives at your location and collects your items safely.",
                },
                {
                  icon: Sparkles,
                  step: "3",
                  title: "Clean",
                  description:
                    "Expert cleaning using premium, eco-friendly products and techniques.",
                },
                {
                  icon: CheckCircle,
                  step: "4",
                  title: "Deliver",
                  description:
                    "Your clean garments are delivered back to you within 24-48 hours.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center" role="listitem">
                  <div className="relative w-20 h-20 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon
                      className="w-10 h-10 text-white"
                      aria-hidden="true"
                    />
                    <span className="absolute -top-2 -right-2 bg-white text-brand-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-20 bg-white"
          aria-labelledby="pricing-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="pricing-heading"
                className="text-4xl font-bold text-brand-800 mb-4"
              >
                Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Transparent, competitive pricing for all services
              </p>
            </div>
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              role="list"
            >
              {[
                {
                  title: "Shirts & Blouses",
                  items: [
                    { name: "Dress Shirt", price: "$3.50" },
                    { name: "Blouse", price: "$4.50" },
                    { name: "Polo Shirt", price: "$4.00" },
                  ],
                },
                {
                  title: "Suits & Formal Wear",
                  items: [
                    { name: "Two-Piece Suit", price: "$15.00" },
                    { name: "Sport Coat", price: "$8.50" },
                    { name: "Dress", price: "$12.00" },
                  ],
                },
                {
                  title: "Specialty Items",
                  items: [
                    { name: "Wedding Dress", price: "$125.00" },
                    { name: "Leather Jacket", price: "$35.00" },
                    { name: "Comforter", price: "$25.00" },
                  ],
                },
              ].map((category, index) => (
                <Card key={index} role="listitem">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3" role="list">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between"
                          role="listitem"
                        >
                          <span>{item.name}</span>
                          <span className="font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Free pickup and delivery on orders over $35
              </p>
              <Button size="lg">
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Schedule Your Pickup
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="py-20 bg-cream-50"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="testimonials-heading"
                className="text-4xl font-bold text-brand-800 mb-4"
              >
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of satisfied customers
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8" role="list">
              {[
                {
                  quote:
                    "Exceptional service! They picked up my suits on Monday and delivered them back perfectly cleaned on Wednesday. The convenience is unmatched.",
                  name: "Sarah Johnson",
                  role: "Marketing Executive",
                },
                {
                  quote:
                    "I've been using CleanCare Express for over 2 years. Their attention to detail and customer service is outstanding. Highly recommended!",
                  name: "Michael Chen",
                  role: "Business Owner",
                },
                {
                  quote:
                    "They saved my wedding dress! Professional preservation service that I trust completely. Thank you for the amazing work.",
                  name: "Emily Rodriguez",
                  role: "Bride",
                },
              ].map((testimonial, index) => (
                <Card key={index} role="listitem">
                  <CardContent className="pt-6">
                    <div
                      className="flex mb-4"
                      role="img"
                      aria-label="5 star rating"
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="text-brand-700 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div
                        className="w-10 h-10 bg-gray-300 rounded-full mr-3"
                        aria-hidden="true"
                      ></div>
                      <div>
                        <cite className="font-semibold not-italic">
                          {testimonial.name}
                        </cite>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About & Contact Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-brand-800 mb-6">
                  About CleanCare Express
                </h2>
                <p className="text-lg text-brand-700 mb-6">
                  Family owned and operated since 1985, Polo Cleaners has been
                  serving the community with exceptional dry cleaning services
                  for over three decades. Our commitment to quality,
                  convenience, and customer satisfaction has made us the trusted
                  choice for professional garment care.
                </p>
                <p className="text-lg text-brand-700 mb-6">
                  We use only the finest eco-friendly cleaning products and
                  state-of-the-art equipment to ensure your garments receive the
                  care they deserve. Our experienced team treats every item with
                  the utmost attention to detail.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-cream-100 rounded-lg">
                    <div className="text-2xl font-bold text-brand-700">39</div>
                    <div className="text-sm text-gray-600">
                      Years of Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-cream-100 rounded-lg">
                    <div className="text-2xl font-bold text-brand-700">
                      50K+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
              <div id="contact">
                <h3 className="text-2xl font-bold text-brand-800 mb-6">
                  Contact Information
                </h3>
                <address className="space-y-4 mb-8 not-italic">
                  <div className="flex items-center">
                    <Phone
                      className="w-5 h-5 text-brand-700 mr-3 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <a
                      href="tel:+15551234567"
                      className="hover:text-brand-700 transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail
                      className="w-5 h-5 text-brand-700 mr-3 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <a
                      href="mailto:info@polocleaners.com"
                      className="hover:text-brand-700 transition-colors"
                    >
                      info@polocleaners.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin
                      className="w-5 h-5 text-brand-700 mr-3 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>123 Main Street, Downtown, NY 10001</span>
                  </div>
                  <div className="flex items-start">
                    <Clock
                      className="w-5 h-5 text-brand-700 mr-3 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p>Mon-Fri: 7:00 AM - 7:00 PM</p>
                      <p>Sat: 8:00 AM - 6:00 PM</p>
                      <p>Sun: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </address>

                {/* Google Maps Embed Placeholder */}
                <div
                  className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6"
                  role="img"
                  aria-label="Map location placeholder"
                >
                  <div className="text-center">
                    <MapPin
                      className="w-12 h-12 text-gray-400 mx-auto mb-2"
                      aria-hidden="true"
                    />
                    <p className="text-gray-600">Google Maps Embed</p>
                    <p className="text-sm text-gray-500">
                      123 Main Street, Downtown, NY
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Visit our Instagram page"
                  >
                    <Instagram className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Visit our Twitter page"
                  >
                    <Twitter className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Polo Cleaners</h3>
              <p className="text-gray-400">
                Premium dry cleaning services with convenient pickup and
                delivery since 1985.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dry Cleaning</li>
                <li>Alterations</li>
                <li>Leather Care</li>
                <li>Wedding Dress Preservation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <div className="text-gray-400 space-y-1">
                <p>Mon-Fri: 7:00 AM - 7:00 PM</p>
                <p>Sat: 8:00 AM - 6:00 PM</p>
                <p>Sun: 10:00 AM - 4:00 PM</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-white">
                  <a
                    href="tel:+15551234567"
                    className="hover:text-cream-200 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex md:justify-between flex-col md:flex-row items-center">
            <p className="text-gray-400">
              &copy; 2024 Polo Cleaners. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
