'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Trash2, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';
import { useToast } from '@/hooks/use-toast';

export default function WishlistPage() {
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      category: 'Electronics',
      rating: 4.5,
      reviews: 128,
      badge: 'Sale',
      inStock: true,
    },
    {
      id: 2,
      name: 'Designer Leather Jacket',
      price: 189.99,
      originalPrice: null,
      image: 'https://images.pexels.com/photos/1456736/pexels-photo-1456736.jpeg',
      category: 'Fashion',
      rating: 4.8,
      reviews: 89,
      badge: 'New',
      inStock: true,
    },
    {
      id: 3,
      name: 'Modern Coffee Table',
      price: 449.99,
      originalPrice: null,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      category: 'Home & Living',
      rating: 4.3,
      reviews: 56,
      badge: null,
      inStock: false,
    },
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const addToCart = (item: any) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <ThemeProvider>
        <ToastProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="container mx-auto px-4 py-16">
              <div className="text-center">
                <Heart className="h-24 w-24 mx-auto text-muted-foreground mb-8" />
                <h1 className="text-3xl font-bold mb-4">Your wishlist is empty</h1>
                <p className="text-muted-foreground mb-8">
                  Save items you love to your wishlist
                </p>
                <Link href="/">
                  <Button size="lg">
                    Start Shopping
                  </Button>
                </Link>
              </div>
            </main>
            <Footer />
          </div>
        </ToastProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
              <p className="text-muted-foreground">
                {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} saved
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Link href={`/products/${item.id}`}>
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {item.badge && (
                            <Badge 
                              className={`absolute top-2 left-2 z-10 ${
                                item.badge === 'Sale' ? 'bg-red-500' : 
                                item.badge === 'New' ? 'bg-green-500' : 'bg-blue-500'
                              }`}
                            >
                              {item.badge}
                            </Badge>
                          )}
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                              <Badge variant="destructive">Out of Stock</Badge>
                            </div>
                          )}
                        </div>
                      </Link>
                      
                      <div className="absolute top-2 right-2 flex flex-col space-y-2">
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => removeFromWishlist(item.id)}
                          className="h-8 w-8"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="text-sm text-muted-foreground mb-1">{item.category}</div>
                      <Link href={`/products/${item.id}`}>
                        <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
                          {item.name}
                        </h3>
                      </Link>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-primary">${item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => addToCart(item)}
                        disabled={!item.inStock}
                        className="w-full"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}