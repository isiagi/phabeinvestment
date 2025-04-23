import Link from "next/link"
import { Building2, Cookie } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { TopNav } from "@/components/top-nav"
import { PageHeader } from "@/components/page-header"
import { DecoratedTitle } from "@/components/decorated-title"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Cookie Policy | Phabe Investment Ltd",
  description: "Learn about how Phabe Investment Ltd uses cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Cookie Policy"
          description="How we use cookies and similar technologies on our website"
          icon={<Cookie className="mr-2 h-4 w-4 text-green" />}
          backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    This Cookie Policy explains how Phabe Investment Ltd ("we", "us", or "our") uses cookies and similar
                    technologies on our website. This policy is designed to help you understand what cookies are, how we
                    use them, and the choices you have regarding their use.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    What Are Cookies?
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are placed on your device when you visit a website. They are
                    widely used to make websites work more efficiently and provide information to the website owners.
                    Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you
                    go offline, while session cookies are deleted as soon as you close your web browser.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    How We Use Cookies
                  </DecoratedTitle>
                  <p className="text-muted-foreground">We use cookies for various purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong>Essential Cookies:</strong> These cookies are necessary for the website to function
                      properly. They enable basic functions like page navigation and access to secure areas of the
                      website. The website cannot function properly without these cookies.
                    </li>
                    <li>
                      <strong>Analytical/Performance Cookies:</strong> These cookies allow us to recognize and count the
                      number of visitors and see how visitors move around our website when they are using it. This helps
                      us improve the way our website works, for example, by ensuring that users are finding what they
                      are looking for easily.
                    </li>
                    <li>
                      <strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to
                      our website. This enables us to personalize our content for you, greet you by name, and remember
                      your preferences (for example, your choice of language or region).
                    </li>
                    <li>
                      <strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you
                      have visited, and the links you have followed. We will use this information to make our website
                      and the advertising displayed on it more relevant to your interests.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Third-Party Cookies
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    In addition to our own cookies, we may also use various third-party cookies to report usage
                    statistics of the website, deliver advertisements on and through the website, and so on. These
                    cookies may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong>Google Analytics:</strong> We use Google Analytics to help us understand how visitors
                      engage with our website. These cookies collect information about your use of our website,
                      including the pages you visit and the links you click.
                    </li>
                    <li>
                      <strong>Social Media Cookies:</strong> These cookies allow you to share our content on social
                      media platforms like Facebook, Twitter, and LinkedIn. These cookies are set by the respective
                      social media platforms.
                    </li>
                    <li>
                      <strong>Advertising Cookies:</strong> These cookies are used to deliver advertisements that are
                      relevant to you and your interests. They are also used to limit the number of times you see an
                      advertisement and help measure the effectiveness of advertising campaigns.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Your Cookie Choices
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    Most web browsers allow you to control cookies through their settings preferences. However, if you
                    limit the ability of websites to set cookies, you may worsen your overall user experience, since it
                    will no longer be personalized to you. It may also stop you from saving customized settings like
                    login information.
                  </p>
                  <p className="text-muted-foreground">To manage your cookie preferences, you can:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong>Browser Settings:</strong> You can manage cookies through your browser settings. Most
                      browsers allow you to block or delete cookies.
                    </li>
                    <li>
                      <strong>Cookie Consent Tool:</strong> We provide a cookie consent tool when you first visit our
                      website, allowing you to select which types of cookies you accept.
                    </li>
                    <li>
                      <strong>Opt-Out Links:</strong> Some third-party services provide opt-out links, allowing you to
                      opt out of their data collection.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Updates to This Cookie Policy
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or
                    our business practices. Any changes will be posted on this page, and if the changes are significant,
                    we will provide a more prominent notice.
                  </p>
                </div>

                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Contact Us
                  </DecoratedTitle>
                  <p className="text-muted-foreground">
                    If you have any questions about our use of cookies, please contact us at:
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
