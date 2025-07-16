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
} from "lucide-react";

export default function Dashboard() {
  // Mock data for demonstration
  const currentOrders = [
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
  ];

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "Ready for Delivery":
        return <Truck className="w-4 h-4 text-blue-500" />;
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Package className="w-4 h-4 text-gray-500" />;
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navigation */}
      <nav className="bg-cream-50 shadow-sm border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-brand-700">
                Polo Cleaners
              </h1>
              <span className="ml-4 text-gray-500">Customer Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <Card className="bg-cream-50">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Package className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Pickup
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Clock className="w-4 h-4 mr-2" />
                    Order History
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Billing
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Profile Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, Sarah!
              </h2>
              <p className="text-gray-600">
                Manage your dry cleaning orders and preferences
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Schedule Pickup</h3>
                  <Button size="sm" className="w-full">
                    New Order
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-6 h-6 text-brand-700" />
                  </div>
                  <h3 className="font-semibold mb-2">Active Orders</h3>
                  <p className="text-2xl font-bold text-brand-700">2</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-6 h-6 text-brand-700" />
                  </div>
                  <h3 className="font-semibold mb-2">Current Balance</h3>
                  <p className="text-2xl font-bold text-brand-700">$0.00</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-brand-700" />
                  </div>
                  <h3 className="font-semibold mb-2">Total Orders</h3>
                  <p className="text-2xl font-bold text-brand-700">28</p>
                </CardContent>
              </Card>
            </div>

            {/* Current Orders */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Current Orders</CardTitle>
                <CardDescription>
                  Track the status of your active orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg p-4 flex items-center justify-between"
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

            {/* Recent Order History */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>
                      Your recent dry cleaning history
                    </CardDescription>
                  </div>
                  <Button variant="outline">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg p-4 flex items-center justify-between"
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
        </div>
      </div>
    </div>
  );
}
