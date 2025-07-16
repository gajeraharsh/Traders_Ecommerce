'use client';

import { useState } from 'react';
import { Filter, Grid, List, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';

export default function ClientCategoryPage({ params }: { params: { category: string } }) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);

  const products = [
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
    {
      id: 4,
      name: 'Fitness Tracker Watch',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      category: 'Electronics',
      rating: 4.6,
      reviews: 234,
      badge: 'Sale',
      isNew: false,
    },
    {
      id: 5,
      name: 'Organic Skincare Set',
      price: 79.99,
      originalPrice: null,
      image: 'https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg',
      category: 'Beauty',
      rating: 4.7,
      reviews: 167,
      badge: null,
      isNew: false,
    },
    {
      id: 6,
      name: 'Professional Camera',
      price: 899.99,
      originalPrice: null,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      category: 'Electronics',
      rating: 4.9,
      reviews: 78,
      badge: 'Premium',
      isNew: true,
    },
  ];

  const brands = ['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas', 'IKEA'];
  const colors = ['Black', 'White', 'Gray', 'Blue', 'Red', 'Green'];

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter(c => c !== color));
    }
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={1000}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Brands</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                />
                <label htmlFor={brand} className="text-sm cursor-pointer">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {colors.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={color}
                  checked={selectedColors.includes(color)}
                  onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
                />
                <label htmlFor={color} className="text-sm cursor-pointer">
                  {color}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating}`} />
                <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer">
                  {rating} stars & up
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-8">
              <span>Home</span> / <span className="text-foreground">{categoryName}</span>
            </nav>

            {/* Category Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
              <p className="text-muted-foreground">
                Discover our premium {categoryName.toLowerCase()} collection
              </p>
            </div>

            <div className="flex gap-8">
              {/* Desktop Sidebar */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <FilterSidebar />
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Filters Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    {/* Mobile Filter Button */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="lg:hidden">
                          <SlidersHorizontal className="h-4 w-4 mr-2" />
                          Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-80">
                        <FilterSidebar />
                      </SheetContent>
                    </Sheet>

                    <span className="text-sm text-muted-foreground">
                      Showing {products.length} products
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Active Filters */}
                {(selectedBrands.length > 0 || selectedColors.length > 0) && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {selectedBrands.map((brand) => (
                        <Badge key={brand} variant="secondary" className="cursor-pointer">
                          {brand}
                          <span
                            className="ml-2 text-xs"
                            onClick={() => handleBrandChange(brand, false)}
                          >
                            ×
                          </span>
                        </Badge>
                      ))}
                      {selectedColors.map((color) => (
                        <Badge key={color} variant="secondary" className="cursor-pointer">
                          {color}
                          <span
                            className="ml-2 text-xs"
                            onClick={() => handleColorChange(color, false)}
                          >
                            ×
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Grid */}
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <Button variant="outline" disabled>
                      Previous
                    </Button>
                    <Button variant="default">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Next</Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
