import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';

export default function TermsOfServicePage() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  Last updated: January 15, 2025
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    By accessing and using ShopVerse, you accept and agree to be bound by the terms 
                    and provision of this agreement.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                  <p className="mb-4">
                    Permission is granted to temporarily download one copy of the materials on ShopVerse 
                    for personal, non-commercial transitory viewing only.
                  </p>
                  <p className="mb-4">This license shall automatically terminate if you violate any of these restrictions.</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
                  <p className="mb-4">
                    We strive to provide accurate product information, but we do not warrant that product 
                    descriptions or other content is accurate, complete, reliable, current, or error-free.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Pricing and Payment</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All prices are subject to change without notice</li>
                    <li>Payment is due at the time of purchase</li>
                    <li>We accept major credit cards and PayPal</li>
                    <li>All transactions are processed securely</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Shipping and Delivery</h2>
                  <p className="mb-4">
                    Shipping times are estimates and may vary. We are not responsible for delays 
                    caused by shipping carriers or customs.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Returns and Refunds</h2>
                  <p className="mb-4">
                    We offer a 30-day return policy for most items. Items must be in original 
                    condition with tags attached.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. User Accounts</h2>
                  <p className="mb-4">
                    You are responsible for maintaining the confidentiality of your account 
                    information and password.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                  <p className="mb-4">
                    ShopVerse shall not be liable for any indirect, incidental, special, 
                    consequential, or punitive damages.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                  <p className="mb-4">
                    Questions about the Terms of Service should be sent to us at:
                  </p>
                  <p>
                    Email: legal@shopverse.com<br />
                    Phone: +1 (555) 123-4567<br />
                    Address: 123 Commerce Street, New York, NY 10001
                  </p>
                </section>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}