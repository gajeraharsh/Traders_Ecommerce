'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const [searchQuery, setSearchQuery] = useState(searchParams.q || '');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const popularSearches = ['iPhone 15', 'Nike shoes', 'Coffee maker', 'Wireless headphones', 'Laptop', 'Skincare'];

  const searchResults = [
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
      isNew: false,
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
      isNew: true,
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
      isNew: false,
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    // Simulate search
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {/* Search Header */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  className="pl-10 pr-4 h-12 text-lg"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setSearchQuery('')}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {!searchQuery && (
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-4">What are you looking for?</h1>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {popularSearches.map((search) => (
                      <Badge
                        key={search}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        onClick={() => handleSearch(search)}
                      >
                        {search}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {searchQuery && (
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold mb-2">
                    Search results for "{searchQuery}"
                  </h1>
                  <p className="text-muted-foreground">
                    {searchResults.length} products found
                  </p>
                </div>
              )}
            </div>

            {/* Search Results */}
            {searchQuery && (
              <div>
                {isLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                      <Card key={i} className="animate-pulse">
                        <CardContent className="p-0">
                          <div className="h-64 bg-muted rounded-t-lg" />
                          <div className="p-4 space-y-2">
                            <div className="h-4 bg-muted rounded" />
                            <div className="h-4 bg-muted rounded w-2/3" />
                            <div className="h-6 bg-muted rounded w-1/3" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {searchResults.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* No Results */}
            {searchQuery && !isLoading && searchResults.length === 0 && (
              <div className="text-center py-16">
                <Search className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
                <h2 className="text-2xl font-bold mb-4">No results found</h2>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or browse our categories
                </p>
                <Button onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            )}
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}