import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { TopNav } from "@/components/top-nav"
import { AnimatedSection } from "@/components/animated-section"
import { PageHeader } from "@/components/page-header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { DecoratedTitle } from "@/components/decorated-title"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us | Phabe Investment Ltd",
  description:
    "Get in touch with Phabe Investment Ltd. Contact us for inquiries about our services in logistics, consultancy, real estate, agribusiness, and financial services.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Contact Us"
          description="We'd love to hear from you. Reach out to us with any questions, inquiries, or partnership opportunities."
          backgroundImage="/placeholder.svg?height=600&width=1200&text=Contact+Us"
          showBackLink={false}
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              <AnimatedSection className="space-y-6" direction="left">
                <div>
                  <DecoratedTitle variant="purple" className="text-purple mb-6">
                    Get in Touch
                  </DecoratedTitle>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below, and our team will get back to you as soon as possible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="Enter the subject of your message" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full bg-green hover:bg-green-dark">
                    Send Message
                  </Button>
                </form>
              </AnimatedSection>
              <AnimatedSection className="space-y-6" direction="right" delay={200}>
                <div>
                  <DecoratedTitle variant="purple" className="text-purple mb-6">
                    Contact Information
                  </DecoratedTitle>
                  <p className="text-muted-foreground mb-8">
                    You can also reach us using the following contact information or visit our office in Seeta, Mukono.
                  </p>
                </div>
                <div className="grid gap-6">
                  {[
                    {
                      icon: <MapPin className="h-6 w-6 text-green" />,
                      title: "Our Location",
                      content: (
                        <>
                          Phabe Investment Ltd
                          <br />
                          Plot 123, Main Street
                          <br />
                          Seeta, Mukono
                          <br />
                          Uganda
                        </>
                      ),
                    },
                    {
                      icon: <Mail className="h-6 w-6 text-green" />,
                      title: "Email Us",
                      content: (
                        <>
                          General Inquiries: info@phabeinvestment.com
                          <br />
                          Customer Support: support@phabeinvestment.com
                          <br />
                          Careers: careers@phabeinvestment.com
                        </>
                      ),
                    },
                    {
                      icon: <Phone className="h-6 w-6 text-green" />,
                      title: "Call Us",
                      content: (
                        <>
                          Main Office: +256 700 123 456
                          <br />
                          Customer Service: +256 700 789 012
                          <br />
                          WhatsApp: +256 700 345 678
                        </>
                      ),
                    },
                    {
                      icon: <Clock className="h-6 w-6 text-green" />,
                      title: "Business Hours",
                      content: (
                        <>
                          Monday - Friday: 8:00 AM - 5:00 PM
                          <br />
                          Saturday: 9:00 AM - 1:00 PM
                          <br />
                          Sunday: Closed
                        </>
                      ),
                    },
                  ].map((item, index) => (
                    <AnimatedSection
                      key={item.title}
                      className="flex items-start gap-4"
                      delay={100 * index}
                      type="fade-slide"
                      direction="up"
                    >
                      <div className="rounded-full bg-green/10 p-3">{item.icon}</div>
                      <div>
                        <DecoratedTitle as="h3" variant="purple" size="sm">
                          {item.title}
                        </DecoratedTitle>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                <AnimatedSection className="rounded-xl border bg-background p-6 shadow-sm mt-8" delay={400}>
                  <DecoratedTitle as="h3" variant="purple" size="sm" className="text-purple mb-4">
                    Connect With Us
                  </DecoratedTitle>
                  <p className="text-muted-foreground mb-4">
                    Follow us on social media to stay updated with our latest news, projects, and events.
                  </p>
                  <div className="flex space-x-4">
                    <Link href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </AnimatedSection>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <DecoratedTitle variant="purple" className="text-purple">
                Frequently Asked Questions
              </DecoratedTitle>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Find answers to some of our most commonly asked questions below. If you don't see what you're looking
                for, please contact us directly.
              </p>
            </AnimatedSection>
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {[
                {
                  question: "What areas in Uganda do you serve?",
                  answer:
                    "Phabe Investment Ltd operates throughout Uganda, with our main office in Seeta, Mukono. Our services extend to all major cities and regions across the country.",
                },
                {
                  question: "How can I invest with Phabe Investment Ltd?",
                  answer:
                    "We offer various investment opportunities across our different business sectors. Please contact our financial services team to discuss the options that best suit your investment goals.",
                },
                {
                  question: "Do you offer internship or job opportunities?",
                  answer:
                    "Yes, we regularly offer internships and employment opportunities across our various departments. Please visit our careers page or send your resume to careers@phabeinvestment.com.",
                },
              ].map((faq, index) => (
                <AnimatedSection
                  key={faq.question}
                  className="rounded-xl border bg-background p-6 shadow-sm"
                  delay={150 * index}
                  type="fade-slide"
                  direction="up"
                >
                  <DecoratedTitle as="h3" variant="purple" size="sm">
                    {faq.question}
                  </DecoratedTitle>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
