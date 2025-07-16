import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: 'Fashion',
      description: 'Latest trends and styles',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
      link: '/categories/fashion',
    },
    {
      id: 2,
      name: 'Electronics',
      description: 'Cutting-edge technology',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      link: '/categories/electronics',
    },
    {
      id: 3,
      name: 'Home & Living',
      description: 'Transform your space',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      link: '/categories/home',
    },
    {
      id: 4,
      name: 'Sports',
      description: 'Active lifestyle gear',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
      link: '/categories/sports',
    },
    {
      id: 5,
      name: 'Beauty',
      description: 'Premium skincare & cosmetics',
      image: 'https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg',
      link: '/categories/beauty',
    },
    {
      id: 6,
      name: 'Books',
      description: 'Knowledge and entertainment',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      link: '/categories/books',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our wide range of premium products across multiple categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.link} className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-sm">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}