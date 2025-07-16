import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';

export default function PrivacyPolicyPage() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  Last updated: January 15, 2025
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                  <p className="mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    make a purchase, or contact us for support.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal information (name, email, phone number)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Shipping information (delivery address)</li>
                    <li>Account preferences and settings</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and fulfill your orders</li>
                    <li>Send you order confirmations and shipping updates</li>
                    <li>Provide customer support</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    except as described in this policy:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who assist in our operations</li>
                    <li>Payment processors for transaction processing</li>
                    <li>Shipping companies for order delivery</li>
                    <li>Legal requirements or to protect our rights</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                  <p className="mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and personal information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p>
                    Email: privacy@shopverse.com<br />
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