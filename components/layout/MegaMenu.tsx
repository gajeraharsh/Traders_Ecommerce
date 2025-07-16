'use client';

import Link from 'next/link';
import Image from 'next/image';

interface MegaMenuProps {
  category: string;
}

export default function MegaMenu({ category }: MegaMenuProps) {
  const menuItems = {
    Fashion: {
      sections: [
        {
          title: 'Women',
          items: ['Dresses', 'Tops', 'Bottoms', 'Shoes', 'Accessories'],
        },
        {
          title: 'Men',
          items: ['Shirts', 'Pants', 'Shoes', 'Accessories', 'Suits'],
        },
        {
          title: 'Kids',
          items: ['Boys', 'Girls', 'Baby', 'Shoes', 'Accessories'],
        },
      ],
      featured: {
        title: 'New Arrivals',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
        link: '/categories/fashion/new-arrivals',
      },
    },
    Electronics: {
      sections: [
        {
          title: 'Smartphones',
          items: ['iPhone', 'Samsung', 'Google Pixel', 'OnePlus', 'Accessories'],
        },
        {
          title: 'Computers',
          items: ['Laptops', 'Desktops', 'Tablets', 'Accessories', 'Gaming'],
        },
        {
          title: 'Audio',
          items: ['Headphones', 'Speakers', 'Earbuds', 'Home Audio', 'Pro Audio'],
        },
      ],
      featured: {
        title: 'Latest Tech',
        image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
        link: '/categories/electronics/latest',
      },
    },
    'Home & Living': {
      sections: [
        {
          title: 'Furniture',
          items: ['Sofas', 'Chairs', 'Tables', 'Beds', 'Storage'],
        },
        {
          title: 'Decor',
          items: ['Wall Art', 'Lighting', 'Rugs', 'Pillows', 'Plants'],
        },
        {
          title: 'Kitchen',
          items: ['Appliances', 'Cookware', 'Dining', 'Storage', 'Gadgets'],
        },
      ],
      featured: {
        title: 'Home Essentials',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
        link: '/categories/home/essentials',
      },
    },
  };

  const currentMenu = menuItems[category as keyof typeof menuItems];

  if (!currentMenu) return null;

  return (
    <div className="absolute top-full left-0 w-screen max-w-4xl bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="p-6">
        <div className="grid grid-cols-4 gap-8">
          {currentMenu.sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={`/categories/${category.toLowerCase()}/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="relative">
            <Image
              src={currentMenu.featured.image}
              alt={currentMenu.featured.title}
              width={200}
              height={150}
              className="rounded-lg object-cover w-full h-32"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <Link
                href={currentMenu.featured.link}
                className="text-white font-medium hover:underline"
              >
                {currentMenu.featured.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}