import Link from "next/link"
import { Building2, FileText } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { TopNav } from "@/components/top-nav"
import { PageHeader } from "@/components/page-header"
import { DecoratedTitle } from "@/components/decorated-title"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Terms of Service | Phabe Investment Ltd",
  description: "The terms and conditions governing your use of Phabe Investment Ltd's services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Terms of Service"
          description="The terms and conditions governing your use of our services"
          icon={<FileText className="mr-2 h-4 w-4 text-green" />}
          backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    Welcome to Phabe Investment Ltd. These Terms of Service ("Terms") govern your use of our website and
                    services. By accessing or using our services, you agree to be bound by these Terms. If you disagree
                    with any part of the Terms, you may not access our services.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Use of Our Services
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    Our services are intended for users who are at least 18 years of age. By using our services, you
                    represent and warrant that you are at least 18 years old and that you have the legal capacity to
                    enter into these Terms.
                  </p>
                  <p className="text-muted-foreground">
                    You agree to use our services only for lawful purposes and in accordance with these Terms. You agree
                    not to use our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>In any way that violates any applicable national or international law or regulation</li>
                    <li>
                      To transmit, or procure the sending of, any advertising or promotional material, including any
                      "junk mail," "chain letter," "spam," or any other similar solicitation
                    </li>
                    <li>
                      To impersonate or attempt to impersonate Phabe Investment Ltd, a Phabe Investment Ltd employee,
                      another user, or any other person or entity
                    </li>
                    <li>
                      To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our
                      services, or which may harm Phabe Investment Ltd or users of our services
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Accounts
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    When you create an account with us, you must provide accurate, complete, and up-to-date information.
                    Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
                    your account.
                  </p>
                  <p className="text-muted-foreground">
                    You are responsible for safeguarding the password that you use to access our services and for any
                    activities or actions under your password. You agree not to disclose your password to any third
                    party. You must notify us immediately upon becoming aware of any breach of security or unauthorized
                    use of your account.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Intellectual Property
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    Our services and their entire contents, features, and functionality (including but not limited to
                    all information, software, text, displays, images, video, and audio, and the design, selection, and
                    arrangement thereof) are owned by Phabe Investment Ltd, its licensors, or other providers of such
                    material and are protected by Ugandan and international copyright, trademark, patent, trade secret,
                    and other intellectual property or proprietary rights laws.
                  </p>
                  <p className="text-muted-foreground">
                    These Terms permit you to use our services for your personal, non-commercial use only. You must not
                    reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                    republish, download, store, or transmit any of the material on our services.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Limitation of Liability
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    In no event shall Phabe Investment Ltd, its directors, employees, partners, agents, suppliers, or
                    affiliates be liable for any indirect, incidental, special, consequential, or punitive damages,
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                    resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Your access to or use of or inability to access or use our services</li>
                    <li>Any conduct or content of any third party on our services</li>
                    <li>Any content obtained from our services</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Disclaimer
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    Your use of our services is at your sole risk. Our services are provided on an "AS IS" and "AS
                    AVAILABLE" basis. Phabe Investment Ltd expressly disclaims all warranties of any kind, whether
                    express or implied, including but not limited to the implied warranties of merchantability, fitness
                    for a particular purpose, and non-infringement.
                  </p>
                  <p className="text-muted-foreground">
                    Phabe Investment Ltd makes no warranty that our services will meet your requirements, be available
                    on an uninterrupted, timely, secure, or error-free basis, or be accurate, reliable, free of viruses
                    or other harmful code, complete, legal, or safe.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Governing Law
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    These Terms shall be governed and construed in accordance with the laws of Uganda, without regard to
                    its conflict of law provisions. Our failure to enforce any right or provision of these Terms will
                    not be considered a waiver of those rights.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Changes to These Terms
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                    revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                    effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p className="text-muted-foreground">
                    By continuing to access or use our services after those revisions become effective, you agree to be
                    bound by the revised terms. If you do not agree to the new terms, please stop using our services.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Contact Us
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <p className="font-medium">Phabe Investment Ltd</p>
                    <p>Plot 123, Main Street</p>
                    <p>Seeta, Mukono, Uganda</p>
                    <p>Email: legal@phabeinvestment.com</p>
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
