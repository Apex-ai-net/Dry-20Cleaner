import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  // Update document title for SEO
  useEffect(() => {
    document.title = "Page Not Found - Polo Cleaners";
    return () => {
      document.title =
        "Polo Cleaners - Premium Dry Cleaning with Free Pickup & Delivery";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-brand-700 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" aria-hidden="true" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              Go Back
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-cream-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <nav
            className="space-y-2"
            role="navigation"
            aria-label="Popular pages"
          >
            <a
              href="/#services"
              className="block text-brand-700 hover:text-brand-800 transition-colors"
            >
              Our Services
            </a>
            <a
              href="/#pricing"
              className="block text-brand-700 hover:text-brand-800 transition-colors"
            >
              Pricing
            </a>
            <Link
              to="/dashboard"
              className="block text-brand-700 hover:text-brand-800 transition-colors"
            >
              Customer Dashboard
            </Link>
            <a
              href="/#contact"
              className="block text-brand-700 hover:text-brand-800 transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            Need help?{" "}
            <a
              href="tel:+15551234567"
              className="text-brand-700 hover:text-brand-800 transition-colors"
            >
              Call us at (555) 123-4567
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
