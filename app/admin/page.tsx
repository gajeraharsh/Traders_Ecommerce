'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,563',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'text-blue-600',
    },
    {
      title: 'Products',
      value: '856',
      change: '+3.1%',
      icon: Package,
      color: 'text-purple-600',
    },
    {
      title: 'Customers',
      value: '2,847',
      change: '+15.3%',
      icon: Users,
      color: 'text-orange-600',
    },
  ];

  const recentOrders = [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      date: '2025-01-15',
      status: 'Completed',
      total: '$299.99',
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      date: '2025-01-15',
      status: 'Processing',
      total: '$189.99',
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      date: '2025-01-14',
      status: 'Shipped',
      total: '$449.99',
    },
    {
      id: '#ORD-004',
      customer: 'Sarah Wilson',
      date: '2025-01-14',
      status: 'Pending',
      total: '$79.99',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      category: 'Electronics',
      price: '$299.99',
      stock: 45,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Designer Leather Jacket',
      category: 'Fashion',
      price: '$189.99',
      stock: 23,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Modern Coffee Table',
      category: 'Home & Living',
      price: '$449.99',
      stock: 8,
      status: 'Low Stock',
    },
    {
      id: 4,
      name: 'Fitness Tracker Watch',
      category: 'Electronics',
      price: '$199.99',
      stock: 0,
      status: 'Out of Stock',
    },
  ];

  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      orders: 12,
      spent: '$2,456.78',
      joined: '2024-03-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      orders: 8,
      spent: '$1,234.56',
      joined: '2024-05-22',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      orders: 15,
      spent: '$3,789.12',
      joined: '2024-01-10',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'Processing': return 'bg-yellow-500';
      case 'Shipped': return 'bg-blue-500';
      case 'Pending': return 'bg-gray-500';
      case 'Active': return 'bg-green-500';
      case 'Low Stock': return 'bg-yellow-500';
      case 'Out of Stock': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const handleAction = (action: string, item?: any) => {
    toast({
      title: `${action} action`,
      description: `${action} has been performed successfully.`,
    });
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your store and monitor performance</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.title}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                          </div>
                          <stat.icon className={`h-8 w-8 ${stat.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Charts and Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-muted-foreground">
                        <BarChart3 className="h-16 w-16 mb-4" />
                        <p>Chart visualization would go here</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentOrders.slice(0, 4).map((order) => (
                          <div key={order.id} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{order.id}</p>
                              <p className="text-sm text-muted-foreground">{order.customer}</p>
                            </div>
                            <div className="text-right">
                              <Badge className={getStatusColor(order.status)}>
                                {order.status}
                              </Badge>
                              <p className="text-sm font-medium mt-1">{order.total}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="orders" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Orders Management</h2>
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Orders</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Search orders..." className="w-64" />
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b">
                          <tr>
                            <th className="text-left p-4">Order ID</th>
                            <th className="text-left p-4">Customer</th>
                            <th className="text-left p-4">Date</th>
                            <th className="text-left p-4">Status</th>
                            <th className="text-left p-4">Total</th>
                            <th className="text-left p-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.map((order) => (
                            <tr key={order.id} className="border-b">
                              <td className="p-4 font-medium">{order.id}</td>
                              <td className="p-4">{order.customer}</td>
                              <td className="p-4">{order.date}</td>
                              <td className="p-4">
                                <Badge className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                              </td>
                              <td className="p-4 font-medium">{order.total}</td>
                              <td className="p-4">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm" onClick={() => handleAction('View', order)}>
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" onClick={() => handleAction('Edit', order)}>
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="products" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Products Management</h2>
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="home">Home & Living</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Search products..." className="w-64" />
                    <Button onClick={() => handleAction('Add Product')}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Product
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b">
                          <tr>
                            <th className="text-left p-4">Product</th>
                            <th className="text-left p-4">Category</th>
                            <th className="text-left p-4">Price</th>
                            <th className="text-left p-4">Stock</th>
                            <th className="text-left p-4">Status</th>
                            <th className="text-left p-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product) => (
                            <tr key={product.id} className="border-b">
                              <td className="p-4 font-medium">{product.name}</td>
                              <td className="p-4">{product.category}</td>
                              <td className="p-4 font-medium">{product.price}</td>
                              <td className="p-4">{product.stock}</td>
                              <td className="p-4">
                                <Badge className={getStatusColor(product.status)}>
                                  {product.status}
                                </Badge>
                              </td>
                              <td className="p-4">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm" onClick={() => handleAction('View', product)}>
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" onClick={() => handleAction('Edit', product)}>
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" onClick={() => handleAction('Delete', product)}>
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="customers" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Customers Management</h2>
                  <div className="flex space-x-2">
                    <Input placeholder="Search customers..." className="w-64" />
                    <Button onClick={() => handleAction('Export Customers')}>
                      Export
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b">
                          <tr>
                            <th className="text-left p-4">Customer</th>
                            <th className="text-left p-4">Email</th>
                            <th className="text-left p-4">Orders</th>
                            <th className="text-left p-4">Total Spent</th>
                            <th className="text-left p-4">Joined</th>
                            <th className="text-left p-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {customers.map((customer) => (
                            <tr key={customer.id} className="border-b">
                              <td className="p-4 font-medium">{customer.name}</td>
                              <td className="p-4">{customer.email}</td>
                              <td className="p-4">{customer.orders}</td>
                              <td className="p-4 font-medium">{customer.spent}</td>
                              <td className="p-4">{customer.joined}</td>
                              <td className="p-4">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm" onClick={() => handleAction('View', customer)}>
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" onClick={() => handleAction('Edit', customer)}>
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}