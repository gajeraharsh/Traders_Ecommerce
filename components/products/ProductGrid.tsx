'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

export default function ProductGrid() {
  const [visibleProducts, setVisibleProducts] = useState(8);

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
    {
      id: 7,
      name: 'Minimalist Desk Lamp',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.pexels.com/photos/1000437/pexels-photo-1000437.jpeg',
      category: 'Home & Living',
      rating: 4.4,
      reviews: 93,
      badge: 'Sale',
      isNew: false,
    },
    {
      id: 8,
      name: 'Running Shoes',
      price: 159.99,
      originalPrice: null,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      category: 'Sports',
      rating: 4.5,
      reviews: 156,
      badge: null,
      isNew: false,
    },
  ];

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, products.length));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {visibleProducts < products.length && (
        <div className="text-center mt-8">
          <Button onClick={loadMore} variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      )}
    </div>
  );
}