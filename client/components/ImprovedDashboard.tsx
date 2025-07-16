import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  Calendar,
  CreditCard,
  Settings,
  Bell,
  Download,
  Plus,
  LogOut,
  User,
  Clock,
  CheckCircle,
  Truck,
  AlertCircle,
  Loader2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ImprovedDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("dashboard");

  // Mock data for demonstration
  const [currentOrders, setCurrentOrders] = useState([
    {
      id: "#DC-2024-001",
      status: "In Progress",
      items: 3,
      service: "Dry Cleaning",
      pickupDate: "Dec 15, 2024",
      estimatedDelivery: "Dec 17, 2024",
    },
    {
      id: "#DC-2024-002",
      status: "Ready for Delivery",
      items: 2,
      service: "Alterations",
      pickupDate: "Dec 12, 2024",
      estimatedDelivery: "Dec 16, 2024",
    },
  ]);

  const recentOrders = [
    {
      id: "#DC-2023-098",
      date: "Dec 10, 2024",
      items: 5,
      total: "$42.50",
      status: "Completed",
    },
    {
      id: "#DC-2023-097",
      date: "Dec 3, 2024",
      items: 2,
      total: "$18.00",
      status: "Completed",
    },
    {
      id: "#DC-2023-096",
      date: "Nov 28, 2024",
      items: 3,
      total: "$27.50",
      status: "Completed",
    },
  ];

  // Simulate loading and potential errors
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        // Simulate potential error (uncomment to test error state)
        // if (Math.random() > 0.8) throw new Error("Failed to load dashboard data");
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Clock className="w-4 h-4 text-yellow-500" aria-hidden="true" />;
      case "Ready for Delivery":
        return <Truck className="w-4 h-4 text-blue-500" aria-hidden="true" />;
      case "Completed":
        return (
          <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
        );
      default:
        return <Package className="w-4 h-4 text-gray-500" aria-hidden="true" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Ready for Delivery":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const sidebarItems = [
    { id: "dashboard", icon: Package, label: "Dashboard" },
    { id: "schedule", icon: Calendar, label: "Schedule Pickup" },
    { id: "history", icon: Clock, label: "Order History" },
    { id: "billing", icon: CreditCard, label: "Billing" },
    { id: "profile", icon: Settings, label: "Profile Settings" },
    { id: "notifications", icon: Bell, label: "Notifications" },
  ];

  // Render content based on active section
  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboardContent();
      case "schedule":
        return renderScheduleContent();
      case "history":
        return renderHistoryContent();
      case "billing":
        return renderBillingContent();
      case "profile":
        return renderProfileContent();
      case "notifications":
        return renderNotificationsContent();
      default:
        return renderDashboardContent();
    }
  };

  const renderDashboardContent = () => (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-800 mb-2">
          Welcome back, Sarah!
        </h2>
        <p className="text-gray-600">
          Manage your dry cleaning orders and preferences
        </p>
      </div>

      {/* Quick Actions */}
      <section aria-labelledby="quick-actions-heading">
        <h3 id="quick-actions-heading" className="sr-only">
          Quick Actions
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h4 className="font-semibold mb-2">Schedule Pickup</h4>
              <Button
                size="sm"
                className="w-full"
                onClick={() => setActiveSection("schedule")}
              >
                New Order
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package
                  className="w-6 h-6 text-brand-700"
                  aria-hidden="true"
                />
              </div>
              <h4 className="font-semibold mb-2">Active Orders</h4>
              <p
                className="text-2xl font-bold text-brand-700"
                aria-label="2 active orders"
              >
                2
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard
                  className="w-6 h-6 text-brand-700"
                  aria-hidden="true"
                />
              </div>
              <h4 className="font-semibold mb-2">Current Balance</h4>
              <p
                className="text-2xl font-bold text-brand-700"
                aria-label="Current balance is zero dollars"
              >
                $0.00
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-brand-700" aria-hidden="true" />
              </div>
              <h4 className="font-semibold mb-2">Total Orders</h4>
              <p
                className="text-2xl font-bold text-brand-700"
                aria-label="Total of 28 orders"
              >
                28
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Orders */}
      <section aria-labelledby="current-orders-heading" className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle id="current-orders-heading">Current Orders</CardTitle>
            <CardDescription>
              Track the status of your active orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4" role="list">
              {currentOrders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-4 flex items-center justify-between"
                  role="listitem"
                >
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(order.status)}
                    <div>
                      <p className="font-semibold">{order.id}</p>
                      <p className="text-sm text-gray-600">
                        {order.service} • {order.items} items
                      </p>
                      <p className="text-sm text-gray-600">
                        Picked up: {order.pickupDate}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status,
                      )}`}
                      aria-label={`Order status: ${order.status}`}
                    >
                      {order.status}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Est. delivery: {order.estimatedDelivery}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recent Order History */}
      <section aria-labelledby="recent-orders-heading">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle id="recent-orders-heading">Recent Orders</CardTitle>
                <CardDescription>
                  Your recent dry cleaning history
                </CardDescription>
              </div>
              <Button
                variant="outline"
                onClick={() => setActiveSection("history")}
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4" role="list">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-4 flex items-center justify-between"
                  role="listitem"
                >
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(order.status)}
                    <div>
                      <p className="font-semibold">{order.id}</p>
                      <p className="text-sm text-gray-600">
                        {order.date} • {order.items} items
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold">{order.total}</p>
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          order.status,
                        )}`}
                        aria-label={`Order status: ${order.status}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      aria-label={`Download receipt for order ${order.id}`}
                    >
                      <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                      Receipt
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );

  const renderScheduleContent = () => (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-800 mb-2">
          Schedule Pickup
        </h2>
        <p className="text-gray-600">Schedule a new dry cleaning pickup</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>New Pickup Request</CardTitle>
          <CardDescription>
            Fill out the form below to schedule your pickup
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600">
                <option>9:00 AM - 12:00 PM</option>
                <option>12:00 PM - 3:00 PM</option>
                <option>3:00 PM - 6:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Services Needed
            </label>
            <div className="space-y-2">
              {[
                "Dry Cleaning",
                "Alterations",
                "Leather Care",
                "Wedding Dress Preservation",
              ].map((service) => (
                <label key={service} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Instructions
            </label>
            <textarea
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600"
              placeholder="Any special instructions for your order..."
            />
          </div>

          <Button className="w-full">Schedule Pickup</Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderHistoryContent = () => (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-800 mb-2">
          Order History
        </h2>
        <p className="text-gray-600">View all your past orders</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
          <CardDescription>
            Complete history of your dry cleaning orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...recentOrders, ...currentOrders].map((order) => (
              <div
                key={order.id}
                className="border rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(order.status)}
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-gray-600">
                      {"date" in order ? order.date : order.pickupDate} •{" "}
                      {order.items} items
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold">
                      {"total" in order ? order.total : "In Progress"}
                    </p>
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status,
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Receipt
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBillingContent = () => (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-800 mb-2">Billing</h2>
        <p className="text-gray-600">
          Manage your payment methods and view invoices
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-brand-700 mb-2">$0.00</p>
            <p className="text-sm text-gray-600">Your account is up to date</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-3" />
                  <span>•••• •••• •••• 4242</span>
                </div>
                <span className="text-sm text-gray-500">Default</span>
              </div>
              <Button variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-3 border rounded"
              >
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{order.total}</span>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfileContent = () => (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-800 mb-2">
          Profile Settings
        </h2>
        <p className="text-gray-600">
          Manage your account information and preferences
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Sarah Johnson"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue="sarah@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                defaultValue="(555) 123-4567"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
            </div>
            <Button className="w-full">Update Information</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delivery Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address
              </label>
              <input
                type="text"
                defaultValue="123 Main Street"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  defaultValue="Downtown"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  defaultValue="10001"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>
            </div>
            <Button className="w-full">Update Address</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderNotificationsContent = () => (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h2>
        <p className="text-gray-600">Manage your notification preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>
            Choose how you want to be notified about your orders
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Email Notifications</h4>
            <div className="space-y-3">
              {[
                "Order confirmation",
                "Pickup reminders",
                "Order ready for delivery",
                "Delivery confirmations",
                "Special offers and promotions",
              ].map((item) => (
                <label key={item} className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">SMS Notifications</h4>
            <div className="space-y-3">
              {[
                "Order status updates",
                "Pickup reminders",
                "Delivery notifications",
              ].map((item) => (
                <label key={item} className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <Button className="w-full">Save Preferences</Button>
        </CardContent>
      </Card>
    </div>
  );

  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        role="status"
        aria-label="Loading dashboard"
      >
        <div className="text-center">
          <Loader2 className="animate-spin h-12 w-12 text-brand-700 mx-auto mb-4" />
          <p className="text-brand-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        role="alert"
        aria-live="polite"
      >
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Unable to Load Dashboard
          </h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to main content for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-700 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Dashboard Navigation */}
      <header>
        <nav
          className="bg-cream-50 shadow-sm border-b border-cream-200"
          role="navigation"
          aria-label="Dashboard navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-brand-700">
                  <Link
                    to="/"
                    className="focus:outline-none focus:ring-2 focus:ring-brand-600 rounded"
                  >
                    Polo Cleaners
                  </Link>
                </h1>
                <span className="ml-4 text-gray-500">Customer Dashboard</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="View notifications"
                  onClick={() => setActiveSection("notifications")}
                >
                  <Bell className="w-5 h-5" aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="User profile"
                  onClick={() => setActiveSection("profile")}
                >
                  <User className="w-5 h-5" aria-hidden="true" />
                </Button>
                <Link to="/">
                  <Button variant="outline" size="sm">
                    <LogOut className="w-4 h-4 mr-2" aria-hidden="true" />
                    Sign Out
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside
              className="lg:w-64"
              role="navigation"
              aria-label="Dashboard menu"
            >
              <Card className="bg-cream-50">
                <CardContent className="p-6">
                  <nav className="space-y-2" role="menu">
                    {sidebarItems.map((item) => (
                      <Button
                        key={item.id}
                        variant={
                          activeSection === item.id ? "default" : "ghost"
                        }
                        className="w-full justify-start"
                        onClick={() => setActiveSection(item.id)}
                        role="menuitem"
                        aria-current={
                          activeSection === item.id ? "page" : undefined
                        }
                      >
                        <item.icon
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        {item.label}
                      </Button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="flex-1">{renderActiveSection()}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
