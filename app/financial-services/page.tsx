import Image from "next/image"
import { ChevronRight, LineChart, PiggyBank, BarChart3, Building2, Target, Users, Lightbulb, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { TopNav } from "@/components/top-nav"
import { PageHeader } from "@/components/page-header"
import { DecoratedTitle } from "@/components/decorated-title"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AnimatedSection } from "@/components/animated-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Financial Services | Phabe Investment Ltd",
  description: "Comprehensive financial solutions including investment advisory and capital management in Uganda.",
}

export default function FinancialServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Strategic Financial Solutions"
          description="Comprehensive financial services to help individuals and businesses achieve their financial goals in Uganda."
          icon={<LineChart className="mr-2 h-4 w-4 text-green" />}
          backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D"
          showBackLink={false}
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
              <div className="col-span-1 lg:col-span-3 mb-8">
                <DecoratedTitle className="text-purple">Our Financial Services</DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  Phabe Investment Ltd offers a range of financial services designed to help our clients build wealth,
                  manage risks, and achieve their financial objectives.
                </p>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <LineChart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-purple">Investment Advisory</h3>
                <p className="mt-2 text-muted-foreground">
                  Expert guidance on investment opportunities in Uganda and East Africa to maximize returns.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Portfolio management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Investment strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Market analysis</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <PiggyBank className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-purple">Capital Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Effective management of capital resources to optimize growth and minimize risks.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Cash flow management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Capital allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Risk assessment</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-purple">Financial Planning</h3>
                <p className="mt-2 text-muted-foreground">
                  Comprehensive financial planning services for individuals and businesses.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Retirement planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Business financial planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Estate planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Activities and Products Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div>
                <DecoratedTitle className="text-purple">Our Financial Activities & Products</DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  We offer a range of financial products and services designed to empower individuals and businesses
                  with access to capital, promoting economic growth and development.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <PiggyBank className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple">Loans for SMEs</h3>
                      <p className="text-muted-foreground">
                        We provide accessible financing options for small and medium enterprises to fuel their growth
                        and expansion.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <LineChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple">Financial Advisory Services</h3>
                      <p className="text-muted-foreground">
                        Our expert advisors provide guidance to low-income individuals on budgeting, saving, and
                        investing to improve their financial wellbeing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple">Investment Opportunities</h3>
                      <p className="text-muted-foreground">
                        We connect investors with promising opportunities across various sectors in Uganda and East
                        Africa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={400}
                  alt="Financial Activities"
                  className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <DecoratedTitle variant="purple" className="text-purple">
                  Who We Serve
                </DecoratedTitle>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our financial services are designed to meet the needs of a diverse range of clients.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection
                className="flex flex-col items-center text-center rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                delay={100}
              >
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-purple mb-2">Individual Investors</h3>
                <p className="text-muted-foreground">
                  We serve individuals looking for investment opportunities in Uganda, from first-time investors to
                  experienced high-net-worth individuals seeking portfolio diversification.
                </p>
              </AnimatedSection>

              <AnimatedSection
                className="flex flex-col items-center text-center rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                delay={200}
              >
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-purple mb-2">Small & Medium Enterprises</h3>
                <p className="text-muted-foreground">
                  We provide financial solutions for SMEs looking to grow their operations, improve cash flow, or expand
                  into new markets across East Africa.
                </p>
              </AnimatedSection>

              <AnimatedSection
                className="flex flex-col items-center text-center rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                delay={300}
              >
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-purple mb-2">International Investors</h3>
                <p className="text-muted-foreground">
                  We assist foreign investors and institutions looking to enter the Ugandan market with local expertise,
                  market insights, and investment management services.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div>
                <DecoratedTitle className="text-purple">Our Financial Approach</DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  We take a client-centered approach to financial services, focusing on understanding your unique needs
                  and goals.
                </p>
                <ol className="mt-6 space-y-4">
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">Assessment</h3>
                      <p className="text-muted-foreground">
                        We begin by understanding your current financial situation, goals, and risk tolerance.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">Strategy Development</h3>
                      <p className="text-muted-foreground">
                        Our team develops a tailored financial strategy aligned with your objectives.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">Implementation</h3>
                      <p className="text-muted-foreground">
                        We execute the strategy with precision and attention to detail.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">Monitoring & Adjustment</h3>
                      <p className="text-muted-foreground">
                        We continuously monitor performance and make adjustments as needed to ensure optimal results.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={300}
                  alt="Financial Approach"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-purple">Client Success Story</h3>
                  <p className="mt-2 text-muted-foreground italic">
                    "Phabe Investment's financial advisory services helped us optimize our capital allocation and
                    significantly improve our returns. Their expertise in the Ugandan market is unmatched."
                  </p>
                  <p className="mt-4 font-medium">— CFO, Leading Manufacturing Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <DecoratedTitle variant="purple" className="text-purple">
                  Future Plans for Our Financial Services
                </DecoratedTitle>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  We're expanding our financial services to better serve our clients and contribute to Uganda's economic
                  development.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection
                className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                delay={100}
              >
                <div className="mb-4">
                  <Lightbulb className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-purple mb-2">Digital Fintech Solutions</h3>
                <p className="text-muted-foreground">
                  We're developing innovative digital financial solutions to support SMEs in Uganda, making financial
                  services more accessible and efficient.
                </p>
              </AnimatedSection>

              <AnimatedSection
                className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                delay={200}
              >
                <div className="mb-4">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-purple mb-2">Expanded Investment Opportunities</h3>
                <p className="text-muted-foreground">
                  We're creating new investment vehicles focused on high-growth sectors in Uganda and East Africa,
                  providing more options for our clients.
                </p>
              </AnimatedSection>

              <AnimatedSection
                className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                delay={300}
              >
                <div className="mb-4">
                  <Globe className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-purple mb-2">International Partnerships</h3>
                <p className="text-muted-foreground">
                  We're forming strategic partnerships with international financial institutions to bring global
                  expertise and resources to our local clients.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <DecoratedTitle className="text-purple">Take Control of Your Financial Future</DecoratedTitle>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Schedule a consultation with our financial experts to discuss how we can help you achieve your financial
                goals.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button size="lg">Schedule a Consultation</Button>
                <Button variant="outline" size="lg">
                  Download Our Financial Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
