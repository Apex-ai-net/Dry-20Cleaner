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
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-cream-50 shadow-sm border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-brand-700">
                  PremiumClean
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#services"
                  className="text-brand-700 hover:text-brand-800 px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#how-it-works"
                  className="text-brand-700 hover:text-brand-800 px-3 py-2 text-sm font-medium"
                >
                  How It Works
                </a>
                <a
                  href="#pricing"
                  className="text-brand-700 hover:text-brand-800 px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-brand-700 hover:text-brand-800 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-brand-700 hover:text-brand-800 px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <Link to="/dashboard">
                <Button variant="outline" className="mr-2">
                  Customer Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream-50 to-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cream-200 text-brand-800">
                  <Star className="w-4 h-4 mr-2" />
                  Family Owned Since 1985
                </span>
              </div>
              <h1 className="text-5xl font-bold text-brand-900 mb-6">
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
                <Button size="lg" className="text-lg px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Pickup
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Free Pickup & Delivery
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  24-48 Hour Turnaround
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="/placeholder.svg"
                  alt="Professional dry cleaning service"
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Same Day Service Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From everyday garments to specialty items, we provide expert care
              for all your clothing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shirt className="w-8 h-8 text-brand-700" />
                </div>
                <CardTitle>Dry Cleaning</CardTitle>
                <CardDescription>
                  Professional cleaning for delicate fabrics and business attire
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-brand-700" />
                </div>
                <CardTitle>Alterations</CardTitle>
                <CardDescription>
                  Expert tailoring and alterations to ensure the perfect fit
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-700" />
                </div>
                <CardTitle>Leather Care</CardTitle>
                <CardDescription>
                  Specialized cleaning and conditioning for leather goods
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-brand-700" />
                </div>
                <CardTitle>Wedding Dress Preservation</CardTitle>
                <CardDescription>
                  Protect your precious memories with professional preservation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, convenient, and professional
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-white" />
                <span className="absolute -mt-8 -mr-8 bg-white text-brand-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Schedule</h3>
              <p className="text-gray-600">
                Book your pickup online or by phone. Choose your preferred time
                slot.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-white" />
                <span className="absolute -mt-8 -mr-8 bg-white text-brand-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pickup</h3>
              <p className="text-gray-600">
                Our driver arrives at your location and collects your items
                safely.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
                <span className="absolute -mt-8 -mr-8 bg-white text-brand-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean</h3>
              <p className="text-gray-600">
                Expert cleaning using premium, eco-friendly products and
                techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
                <span className="absolute -mt-8 -mr-8 bg-white text-brand-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deliver</h3>
              <p className="text-gray-600">
                Your clean garments are delivered back to you within 24-48
                hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
            <p className="text-xl text-gray-600">
              Transparent, competitive pricing for all services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Shirts & Blouses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Dress Shirt</span>
                    <span className="font-semibold">$3.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blouse</span>
                    <span className="font-semibold">$4.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Polo Shirt</span>
                    <span className="font-semibold">$4.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Suits & Formal Wear</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Two-Piece Suit</span>
                    <span className="font-semibold">$15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sport Coat</span>
                    <span className="font-semibold">$8.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dress</span>
                    <span className="font-semibold">$12.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Specialty Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Wedding Dress</span>
                    <span className="font-semibold">$125.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Leather Jacket</span>
                    <span className="font-semibold">$35.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comforter</span>
                    <span className="font-semibold">$25.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Free pickup and delivery on orders over $35
            </p>
            <Button size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Pickup
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Exceptional service! They picked up my suits on Monday and
                  delivered them back perfectly cleaned on Wednesday. The
                  convenience is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Marketing Executive</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "I've been using PremiumClean for over 2 years. Their
                  attention to detail and customer service is outstanding.
                  Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-gray-600">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "They saved my wedding dress! Professional preservation
                  service that I trust completely. Thank you for the amazing
                  work."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-gray-600">Bride</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About PremiumClean
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Family owned and operated since 1985, PremiumClean has been
                serving the community with exceptional dry cleaning services for
                over three decades. Our commitment to quality, convenience, and
                customer satisfaction has made us the trusted choice for
                professional garment care.
              </p>
              <p className="text-lg text-gray-700 mb-6">
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
                  <div className="text-2xl font-bold text-brand-700">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div id="contact">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-brand-700 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-brand-700 mr-3" />
                  <span>info@premiumclean.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-brand-700 mr-3" />
                  <span>123 Main Street, Downtown, NY 10001</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-brand-700 mr-3" />
                  <div>
                    <p>Mon-Fri: 7:00 AM - 7:00 PM</p>
                    <p>Sat: 8:00 AM - 6:00 PM</p>
                    <p>Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Google Maps Embed</p>
                  <p className="text-sm text-gray-500">
                    123 Main Street, Downtown, NY
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PremiumClean</h3>
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
                  <a href="#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
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
                <p className="font-semibold text-white">(555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex md:justify-between flex-col md:flex-row items-center">
            <p className="text-gray-400">
              &copy; 2024 PremiumClean. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
