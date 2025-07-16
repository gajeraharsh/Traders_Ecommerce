'use client';

import Link from 'next/link';
import { CheckCircle, Package, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';

export default function CheckoutSuccessPage() {
  const orderDetails = {
    orderNumber: '#ORD-2025-001',
    date: new Date().toLocaleDateString(),
    total: 679.97,
    items: [
      {
        name: 'Premium Wireless Headphones',
        price: 299.99,
        quantity: 1,
      },
      {
        name: 'Designer Leather Jacket',
        price: 189.99,
        quantity: 2,
      },
    ],
    shipping: {
      method: 'Standard Shipping',
      cost: 9.99,
      estimatedDelivery: '5-7 business days',
    },
    billing: {
      subtotal: 679.97,
      shipping: 9.99,
      tax: 54.40,
      total: 744.36,
    },
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              {/* Success Icon */}
              <div className="mb-8">
                <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
                <p className="text-muted-foreground">
                  Thank you for your purchase. Your order has been successfully placed.
                </p>
              </div>

              {/* Order Summary Card */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Order Details</span>
                    <span className="text-lg font-normal text-muted-foreground">
                      {orderDetails.orderNumber}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Order Items */}
                  <div className="space-y-4">
                    {orderDetails.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="text-left">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Order Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${orderDetails.billing.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${orderDetails.billing.shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${orderDetails.billing.tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${orderDetails.billing.total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Confirmation Email</h3>
                    <p className="text-sm text-muted-foreground">
                      Check your email for order confirmation and tracking details
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order is being prepared for shipment
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Track Order</h3>
                    <p className="text-sm text-muted-foreground">
                      You'll receive tracking information once shipped
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/account">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Order Status
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-secondary/20 rounded-lg">
                <h3 className="font-semibold mb-4">What happens next?</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• You'll receive an email confirmation shortly</p>
                  <p>• Your order will be processed within 1-2 business days</p>
                  <p>• Tracking information will be sent once your order ships</p>
                  <p>• Estimated delivery: {orderDetails.shipping.estimatedDelivery}</p>
                </div>
              </div>

              {/* Support */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Need help with your order?
                </p>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact our support team
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}