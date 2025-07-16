import Image from 'next/image';
import { Users, Award, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '1M+' },
    { icon: Award, label: 'Years of Excellence', value: '10+' },
    { icon: Globe, label: 'Countries Served', value: '50+' },
    { icon: Heart, label: 'Products Sold', value: '5M+' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Passionate about creating exceptional shopping experiences.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      bio: 'Leading our technology innovation and platform development.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      bio: 'Crafting beautiful and intuitive user experiences.',
    },
  ];

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">About ShopVerse</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're on a mission to revolutionize online shopping by providing premium products, 
                  exceptional service, and an unmatched customer experience.
                </p>
              </div>
            </section>

            {/* Story Section */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Founded in 2015, ShopVerse began as a small startup with a big dream: 
                        to create the world's most customer-centric online marketplace. What started 
                        in a garage has grown into a global platform serving millions of customers worldwide.
                      </p>
                      <p>
                        We believe that shopping should be more than just a transaction—it should be 
                        an experience that delights, inspires, and connects people with products they love. 
                        Every decision we make is guided by our commitment to quality, innovation, and 
                        customer satisfaction.
                      </p>
                      <p>
                        Today, we're proud to offer millions of products across multiple categories, 
                        from the latest fashion trends to cutting-edge electronics, all backed by our 
                        promise of quality and exceptional service.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                      alt="Our story"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-secondary/10">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Customer First</h3>
                      <p className="text-muted-foreground">
                        Every decision we make starts with our customers. We listen, learn, 
                        and continuously improve to exceed expectations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Quality & Trust</h3>
                      <p className="text-muted-foreground">
                        We partner with trusted brands and maintain rigorous quality standards 
                        to ensure every product meets our high expectations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                      <p className="text-muted-foreground">
                        We embrace new technologies and ideas to create better shopping 
                        experiences and stay ahead of evolving customer needs.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-secondary/10">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {team.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                        <p className="text-primary font-medium mb-3">{member.role}</p>
                        <p className="text-muted-foreground text-sm">{member.bio}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Mission Section */}
            <section className="py-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  To democratize access to quality products and create a world where everyone 
                  can discover, explore, and purchase what they love with confidence and ease.
                </p>
                <div className="bg-primary/10 rounded-lg p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-4">Looking Forward</h3>
                  <p className="text-muted-foreground">
                    As we continue to grow, we remain committed to our founding principles while 
                    embracing new opportunities to serve our customers better. The future of 
                    commerce is bright, and we're excited to shape it together with you.
                  </p>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}