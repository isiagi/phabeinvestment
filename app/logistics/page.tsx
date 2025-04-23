import Image from "next/image";
import {
  ChevronRight,
  Truck,
  Award,
  Globe,
  HeartHandshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { TopNav } from "@/components/top-nav";
import { PageHeader } from "@/components/page-header";
import { CornerDecoration } from "@/components/corner-decoration";
import { DecoratedTitle } from "@/components/decorated-title";
import { ScrollToTop } from "@/components/scroll-to-top";
import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Logistics Management | Phabe Investment Ltd",
  description:
    "Efficient transportation, warehousing, and distribution solutions for your business in Uganda.",
};

export default function LogisticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Efficient Logistics Solutions"
          description="Streamline your supply chain with our comprehensive logistics management services tailored for businesses in Uganda and East Africa."
          icon={<Truck className="mr-2 h-4 w-4 text-green" />}
          backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          showBackLink={false}
        />

        <section className="relative w-full py-12 md:py-24 lg:py-32">
          {/* Corner Decoration */}
          <CornerDecoration variant="green" />
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <DecoratedTitle variant="purple" className="text-purple">
                  Our Logistics Services
                </DecoratedTitle>
                <p className="text-muted-foreground">
                  At Phabe Investment Ltd, we provide end-to-end logistics
                  solutions that help businesses optimize their supply chain
                  operations, reduce costs, and improve efficiency.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-1">
                      <ChevronRight className="h-5 w-5 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle as="h3" className="font-bold">
                        Transportation Management
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Reliable and efficient transportation services across
                        Uganda and East Africa.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-1">
                      <ChevronRight className="h-5 w-5 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle as="h3" className="font-bold">
                        Warehousing Solutions
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Secure storage facilities with inventory management
                        systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-1">
                      <ChevronRight className="h-5 w-5 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle as="h3" className="font-bold">
                        Distribution Network
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Strategic distribution services to reach your customers
                        efficiently.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-1">
                      <ChevronRight className="h-5 w-5 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle as="h3" className="font-bold">
                        Supply Chain Consulting
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Expert advice to optimize your entire supply chain
                        operations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={300}
                  alt="Logistics Services"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Why Choose Our Logistics Services?
                  </DecoratedTitle>
                  <ul className="mt-4 grid gap-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>Experienced team with local market knowledge</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>Modern fleet and warehousing facilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>Real-time tracking and reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>
                        Cost-effective solutions tailored to your needs
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>
                        Commitment to timely delivery and quality service
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitors and Market Share Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <AnimatedSection className="space-y-4" direction="left">
                <DecoratedTitle variant="purple" className="text-purple">
                  Competitors and Market Share
                </DecoratedTitle>
                <p className="text-muted-foreground">
                  In the investment industry in Uganda, we face competition from
                  other investment companies in the same industry and financial
                  institutions. However, Phabe Investment Limited has built a
                  strong reputation for delivering exceptional returns and
                  maintaining a high level of professionalism and integrity. Our
                  market share continues to grow as we expand our portfolio and
                  explore new investment opportunities.
                </p>
                <div className="mt-6 rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-purple mb-4">
                    Our Competitive Edge in Logistics
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-green mt-0.5" />
                      <span>
                        Extensive local knowledge of East African transportation
                        routes and regulations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-green mt-0.5" />
                      <span>
                        Strategic partnerships with international shipping and
                        freight companies
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-green mt-0.5" />
                      <span>
                        Advanced tracking technology for real-time shipment
                        monitoring
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-green mt-0.5" />
                      <span>
                        Competitive pricing structure with transparent fee
                        schedules
                      </span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection
                className="flex items-center justify-center"
                direction="right"
                delay={200}
              >
                <Image
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={400}
                  alt="Market Competition"
                  className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Achievements & Milestones Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <DecoratedTitle variant="purple" className="text-purple">
                  Achievements & Milestones
                </DecoratedTitle>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our journey in logistics has been marked by significant
                  achievements that demonstrate our commitment to excellence.
                </p>
              </div>
            </AnimatedSection>

            <div className="mx-auto max-w-5xl">
              <div className="relative">
                <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-green/20 rounded-full"></div>
                <div className="space-y-12">
                  <AnimatedSection
                    className="relative grid gap-6 lg:grid-cols-2"
                    delay={100}
                  >
                    <div className="flex justify-end lg:order-1">
                      <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-purple mb-2">
                          International Cargo Success
                        </h3>
                        <p className="text-muted-foreground">
                          Successfully handled multiple international cargo
                          shipments, establishing our reputation for reliability
                          in cross-border logistics.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green text-white shadow-md">
                        1
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    className="relative grid gap-6 lg:grid-cols-2"
                    delay={200}
                  >
                    <div className="flex justify-start">
                      <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-purple mb-2">
                          Strategic Partnerships
                        </h3>
                        <p className="text-muted-foreground">
                          Established strong relationships with key sectors and
                          business partners, creating a robust network for
                          efficient logistics operations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center lg:order-1">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green text-white shadow-md">
                        2
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    className="relative grid gap-6 lg:grid-cols-2"
                    delay={300}
                  >
                    <div className="flex justify-end lg:order-1">
                      <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-purple mb-2">
                          Technology Integration
                        </h3>
                        <p className="text-muted-foreground">
                          Implemented advanced tracking and management systems
                          to enhance the efficiency and transparency of our
                          logistics operations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green text-white shadow-md">
                        3
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Projection Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <AnimatedSection
                className="flex items-center justify-center"
                direction="left"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={400}
                  alt="Financial Growth"
                  className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                />
              </AnimatedSection>
              <AnimatedSection
                className="space-y-4"
                direction="right"
                delay={200}
              >
                <DecoratedTitle variant="purple" className="text-purple">
                  Financial Projection
                </DecoratedTitle>
                <p className="text-muted-foreground">
                  As a leading investment company, Phabe Investment Limited has
                  a positive financial projection. We have a proven track record
                  of success and aim to continue delivering exceptional returns
                  to our clients.
                </p>
                <div className="mt-6 rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-purple mb-4">
                    Our Logistics Growth Strategy
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-green mt-0.5" />
                      <span>
                        Expanding our fleet and warehouse capacity to meet
                        growing demand
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-green mt-0.5" />
                      <span>
                        Investing in technology to improve operational
                        efficiency
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-green mt-0.5" />
                      <span>
                        Developing new service offerings to diversify revenue
                        streams
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-green mt-0.5" />
                      <span>
                        Forming strategic partnerships to expand our
                        geographical reach
                      </span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Competitive Advantage Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div>
                <DecoratedTitle className="text-purple">
                  Our Competitive Advantage
                </DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  What sets our logistics services apart from others in the
                  market and why clients choose Phabe Investment Ltd.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-3 mt-1">
                      <Globe className="h-6 w-6 text-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple">
                        Global Partnerships
                      </h3>
                      <p className="text-muted-foreground">
                        We've established strong networks in China, UAE, USA,
                        and Europe, enabling efficient international shipping
                        and logistics solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-3 mt-1">
                      <Award className="h-6 w-6 text-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple">
                        Affordable & Reliable Services
                      </h3>
                      <p className="text-muted-foreground">
                        We offer competitive pricing without compromising on
                        quality, ensuring reliable and efficient logistics
                        services for all our clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-3 mt-1">
                      <HeartHandshake className="h-6 w-6 text-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple">
                        Customer-Centric Approach
                      </h3>
                      <p className="text-muted-foreground">
                        We develop tailored logistics solutions based on each
                        client's specific needs, ensuring optimal results and
                        satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={400}
                  alt="Our Competitive Advantage"
                  className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <DecoratedTitle variant="purple" className="text-purple">
                  Future Plans for Our Logistics Services
                </DecoratedTitle>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  We're constantly evolving our logistics capabilities to better
                  serve our clients and expand our reach.
                </p>
              </div>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-green/20 rounded-full"></div>
              <div className="space-y-12">
                <AnimatedSection
                  className="relative grid gap-6 lg:grid-cols-2"
                  delay={100}
                >
                  <div className="flex justify-end lg:order-1">
                    <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-bold text-purple mb-2">
                        Expanding Global Partnerships
                      </h3>
                      <p className="text-muted-foreground">
                        We're establishing direct partnerships with logistics
                        providers in China and the UAE to create more efficient
                        supply chains for our clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green text-white shadow-md">
                      1
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  className="relative grid gap-6 lg:grid-cols-2"
                  delay={200}
                >
                  <div className="flex justify-start">
                    <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-bold text-purple mb-2">
                        Digital Logistics Solutions
                      </h3>
                      <p className="text-muted-foreground">
                        We're developing a digital platform that will allow
                        clients to track shipments in real-time, manage
                        inventory, and optimize their supply chains.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:order-1">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green text-white shadow-md">
                      2
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  className="relative grid gap-6 lg:grid-cols-2"
                  delay={300}
                >
                  <div className="flex justify-end lg:order-1">
                    <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-bold text-purple mb-2">
                        Sustainable Logistics
                      </h3>
                      <p className="text-muted-foreground">
                        We're investing in eco-friendly transportation options
                        and sustainable warehousing practices to reduce our
                        environmental impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green text-white shadow-md">
                      3
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          {/* Corner Decoration */}
          <CornerDecoration variant="green" />
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <DecoratedTitle variant="purple" className="text-purple">
                Ready to Optimize Your Logistics?
              </DecoratedTitle>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Contact us today to discuss how our logistics management
                services can help your business grow and succeed.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button className="bg-green hover:bg-green-dark">
                  Get a Free Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-green text-green hover:bg-green/10"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
