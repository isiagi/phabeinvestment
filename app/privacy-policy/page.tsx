import Link from "next/link"
import { Building2, Shield } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { TopNav } from "@/components/top-nav"
import { PageHeader } from "@/components/page-header"
import { DecoratedTitle } from "@/components/decorated-title"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Privacy Policy | Phabe Investment Ltd",
  description: "Learn about how Phabe Investment Ltd collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Privacy Policy"
          description="How we collect, use, and protect your personal information"
          icon={<Shield className="mr-2 h-4 w-4 text-green" />}
          backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          showBackLink={false}
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <AnimatedSection className="space-y-8">
                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Introduction
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    At Phabe Investment Ltd, we are committed to protecting your privacy and ensuring the security of
                    your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                    your information when you visit our website or use our services.
                  </p>
                  <p className="text-muted-foreground">
                    Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that
                    you have read, understood, and agree to be bound by all the terms outlined in this policy.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Information We Collect
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Register for an account</li>
                    <li>Express interest in obtaining information about our services</li>
                    <li>Participate in activities on our website</li>
                    <li>Contact us with inquiries or for customer support</li>
                  </ul>
                  <p className="text-muted-foreground">The personal information we collect may include:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Financial information necessary for transactions</li>
                    <li>Business information if you represent a company</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    How We Use Your Information
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    We may use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Providing, maintaining, and improving our services</li>
                    <li>Processing transactions and sending related information</li>
                    <li>Responding to your comments, questions, and requests</li>
                    <li>Sending you technical notices, updates, security alerts, and administrative messages</li>
                    <li>Communicating with you about products, services, offers, and events</li>
                    <li>Monitoring and analyzing trends, usage, and activities in connection with our services</li>
                    <li>
                      Detecting, investigating, and preventing fraudulent transactions and other illegal activities
                    </li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Information Sharing and Disclosure
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    We may share your personal information in the following situations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong>With Service Providers:</strong> We may share your information with third-party vendors,
                      service providers, contractors, or agents who perform services for us.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> We may share or transfer your information in connection with,
                      or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or
                      a portion of our business.
                    </li>
                    <li>
                      <strong>With Your Consent:</strong> We may disclose your personal information for any other
                      purpose with your consent.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your information where required to do so by
                      law or in response to valid requests by public authorities.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Data Security
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    We have implemented appropriate technical and organizational security measures designed to protect
                    the security of any personal information we process. However, please also remember that we cannot
                    guarantee that the internet itself is 100% secure. Although we will do our best to protect your
                    personal information, transmission of personal information to and from our services is at your own
                    risk.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Your Privacy Rights
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    Depending on your location, you may have certain rights regarding your personal information, such
                    as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>The right to access personal information we hold about you</li>
                    <li>The right to request correction of inaccurate personal information</li>
                    <li>The right to request deletion of your personal information</li>
                    <li>The right to object to processing of your personal information</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p className="text-muted-foreground">
                    To exercise these rights, please contact us using the information provided in the "Contact Us"
                    section below.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Changes to This Privacy Policy
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                    new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this
                    Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Contact Us
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <p className="font-medium">Phabe Investment Ltd</p>
                    <p>Plot 123, Main Street</p>
                    <p>Seeta, Mukono, Uganda</p>
                    <p>Email: privacy@phabeinvestment.com</p>
                    <p>Phone: +256 700 123 456</p>
                  </div>
                </div>

                <div className="border-t pt-6 text-sm text-muted-foreground">
                  <p>Last Updated: April 23, 2025</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-[#252B35] text-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            <p className="text-sm font-medium">© 2025 Phabe Investment Ltd. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm font-medium hover:underline underline-offset-4 text-white/90 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm font-medium hover:underline underline-offset-4 text-white/90 hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm font-medium hover:underline underline-offset-4 text-white/90 hover:text-white"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
