'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@shopverse.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Commerce Street',
      description: 'New York, NY 10001',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM',
      description: 'Weekend: 10AM-4PM',
    },
  ];

  const faqItems = [
    {
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "Orders" section, or by using the tracking link sent to your email.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be in original condition with tags attached.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.',
    },
    {
      question: 'How can I change or cancel my order?',
      answer: 'Orders can be modified or cancelled within 1 hour of placement. After that, please contact our support team.',
    },
  ];

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Have a question or need help? We're here to assist you. 
                  Reach out to us and we'll respond as soon as possible.
                </p>
              </div>
            </section>

            {/* Contact Info */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        <p className="font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="order">Order Support</SelectItem>
                              <SelectItem value="returns">Returns & Refunds</SelectItem>
                              <SelectItem value="technical">Technical Support</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            placeholder="Tell us how we can help you..."
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? (
                            <div className="flex items-center space-x-2">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                              <span>Sending...</span>
                            </div>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* FAQ Section */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      {faqItems.map((faq, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <h3 className="font-semibold mb-2">{faq.question}</h3>
                            <p className="text-muted-foreground text-sm">{faq.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Support Section */}
            <section className="py-16 bg-secondary/10">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  For urgent matters, you can reach our support team directly through these channels:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Support
                  </Button>
                  <Button variant="outline" size="lg">
                    <Mail className="h-5 w-5 mr-2" />
                    Live Chat
                  </Button>
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