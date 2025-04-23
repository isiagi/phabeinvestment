import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  ChevronRight,
  Leaf,
  Truck,
  Warehouse,
  LineChart,
  Banknote,
  MapPin,
  Phone,
  Mail,
  Award,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { TopNav } from "@/components/top-nav"
import { ServiceSlider } from "@/components/service-slider"
import { TeamSlider } from "@/components/team-slider"
import { HeaderPattern } from "@/components/header-pattern"
import { CornerDecoration } from "@/components/corner_decoration"

// Import the CustomButton instead of the regular Button
import { CustomButton } from "@/components/ui/custom-button"
import { AnimatedSection } from "@/components/animated-section"

// Add this import at the top of the file
import { FancyCorner } from "@/components/fancy_corner"
// Add this import at the top of the file
import { DecoratedTitle } from "@/components/decorated-title"
// Add this import at the top of the file
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-green" />,
      title: "Logistics Management",
      description: "Efficient transportation, warehousing, and distribution solutions for your business.",
      href: "/logistics",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue" />,
      title: "Consultancy Services",
      description: "Expert advisory services to help your business grow and succeed in the Ugandan market.",
      href: "/consultancy",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <Warehouse className="h-8 w-8 text-green" />,
      title: "Real Estate Development",
      description: "Quality housing, commercial properties, and land development across Uganda.",
      href: "/real-estate",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <Banknote className="h-8 w-8 text-blue" />,
      title: "Financial Services",
      description: "Comprehensive financial solutions including investment advisory and capital management.",
      href: "/financial-services",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <Leaf className="h-8 w-8 text-yellowgreen" />,
      title: "Agribusiness",
      description: "Sustainable farming, processing, and distribution of agricultural products.",
      href: "/agribusiness",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  const teamMembers = [
    {
      name: "John Doe",
      position: "Chief Executive Officer",
      bio: "With over 20 years of experience in investment and business development across East Africa, John leads our company with vision and integrity.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "john@phabeinvestment.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Jane Smith",
      position: "Chief Operations Officer",
      bio: "Jane brings 15 years of operational excellence to our team, ensuring all our services are delivered with the highest standards of quality.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "jane@phabeinvestment.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Michael Johnson",
      position: "Chief Financial Officer",
      bio: "Michael's financial expertise has helped our clients maximize returns while minimizing risks in the dynamic Ugandan market.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "michael@phabeinvestment.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Sarah Nakato",
      position: "Head of Logistics",
      bio: "Sarah's innovative approach to logistics has revolutionized our supply chain solutions, bringing efficiency to our clients' operations.",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "sarah@phabeinvestment.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "David Ochieng",
      position: "Head of Consultancy",
      bio: "David leads our consultancy team with strategic insight and deep knowledge of the East African business landscape.",
      image:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "david@phabeinvestment.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Grace Auma",
      position: "Real Estate Director",
      bio: "Grace's vision for sustainable real estate development has shaped our portfolio of premium properties across Uganda.",
      image:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "grace@phabeinvestment.com",
      linkedin: "https://linkedin.com",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          {/* Fancy Corner */}
          <FancyCorner color="#2e7d32" />

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <AnimatedSection className="flex flex-col justify-center space-y-4" direction="left">
                <div className="space-y-2">
                  <DecoratedTitle
                    as="h1"
                    size="xl"
                    variant="purple"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    Your Trusted Investment Partner in Uganda
                  </DecoratedTitle>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Phabe Investment Ltd offers comprehensive solutions in logistics management, consultancy services,
                    real estate development, and agribusiness in Seeta Mukono, Uganda.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <CustomButton className="bg-green hover:bg-green-dark">Our Services</CustomButton>
                  <CustomButton variant="outline" className="border-green text-green hover:text-green-dark">
                    Contact Us
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </CustomButton>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={200}>
                <Image
                  src="https://plus.unsplash.com/premium_photo-1682309819424-bbb85f555d7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI1fHxpbnZlc3RtZW50fGVufDB8fDB8fHww"
                  width={550}
                  height={550}
                  alt="Phabe Investment Ltd"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="services" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/50 overflow-hidden">
          {/* Corner Decoration */}
          <CornerDecoration variant="green" />

          <div className="container px-4 md:px-6 relative">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <DecoratedTitle variant="purple" className="text-purple">
                  Our Services
                </DecoratedTitle>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  We provide a range of professional services to help grow your business and investments.
                </p>
              </div>
            </AnimatedSection>

            <ServiceSlider services={services} />
          </div>
        </section>

        <section id="team" className="relative w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
          {/* Corner Decoration */}
          <CornerDecoration variant="dark" />
          {/* Header Pattern */}
          <HeaderPattern className="top-0 right-0 w-96 h-96 opacity-10" variant="dark" />
          <HeaderPattern className="bottom-0 left-0 w-96 h-96 opacity-10 rotate-180" variant="dark" />

          <div className="container px-4 md:px-6 relative">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <DecoratedTitle variant="purple" className="text-purple">
                  Our Team
                </DecoratedTitle>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Meet the dedicated professionals behind Phabe Investment's success.
                </p>
              </div>
            </AnimatedSection>

            <TeamSlider members={teamMembers} />
          </div>
        </section>

        <section id="about" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          {/* Corner Decoration */}
          <CornerDecoration variant="green" />
          {/* Header Pattern */}
          <HeaderPattern className="top-0 right-0 w-96 h-96 opacity-10" variant="green" />
          <HeaderPattern className="bottom-0 left-0 w-96 h-96 opacity-10 rotate-180" variant="green" />

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <AnimatedSection direction="left" className="flex items-center gap-6">
                <div className="rounded-xl overflow-hidden -mt-16">
                  <Image
                    src="https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={500}
                    alt="Business Analytics"
                    className="w-full object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={500}
                    alt="Business Meeting"
                    className="w-full object-cover rounded-xl shadow-lg"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection className="flex flex-col justify-center space-y-4" direction="right" delay={200}>
                <div className="space-y-2">
                  <DecoratedTitle variant="purple" className="text-purple">
                    About Phabe Investment Ltd
                  </DecoratedTitle>
                  <p className="text-muted-foreground md:text-xl">
                    Founded with a vision to transform the investment landscape in Uganda, Phabe Investment Ltd has
                    grown to become a trusted partner for businesses and individuals seeking growth opportunities.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start">
                    <div className="rounded-full bg-green/10 p-1">
                      <ChevronRight className="h-5 w-5 text-green" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <DecoratedTitle as="h3" variant="purple">
                        Our Mission
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        To provide innovative and sustainable investment solutions that create value for our clients and
                        contribute to the development of Uganda.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-yellowgreen/20 p-1">
                      <ChevronRight className="h-5 w-5 text-yellowgreen" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <DecoratedTitle as="h3" variant="purple">
                        Our Vision
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        To be the leading investment company in East Africa, known for excellence, integrity, and
                        innovation.
                      </p>
                    </div>
                  </li>
                </ul>
                <CustomButton className="w-fit bg-green hover:bg-green-dark">Learn More About Us</CustomButton>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Add this section after the "about" section and before the "testimonials" section */}
        <section id="why-choose-us" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
          {/* Corner Decoration */}
          <CornerDecoration variant="purple" />
          {/* Header Pattern */}
          <HeaderPattern className="top-0 right-0 w-96 h-96 opacity-10" variant="purple" />
          <HeaderPattern className="bottom-0 left-0 w-96 h-96 opacity-10 rotate-180" variant="purple" />

          <div className="container px-4 md:px-6 relative">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <DecoratedTitle variant="purple" className="text-purple">
                  Why Choose Us
                </DecoratedTitle>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  At Phabe Investment Ltd, we combine local expertise with international standards to deliver
                  exceptional value to our clients.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-12 lg:grid-cols-2">
              <AnimatedSection direction="left" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Local Expertise",
                      description: "Deep understanding of the Ugandan market and business environment",
                      icon: <MapPin className="h-10 w-10 text-purple" />,
                    },
                    {
                      title: "Proven Track Record",
                      description: "Consistent delivery of high-quality services and strong returns on investment",
                      icon: <LineChart className="h-10 w-10 text-green" />,
                    },
                    {
                      title: "Integrated Solutions",
                      description: "Comprehensive services across multiple sectors for all your business needs",
                      icon: <Building2 className="h-10 w-10 text-purple" />,
                    },
                    {
                      title: "Ethical Practices",
                      description: "Commitment to transparency, integrity, and sustainable business practices",
                      icon: <Award className="h-10 w-10 text-green" />,
                    },
                  ].map((item, index) => (
                    <AnimatedSection
                      key={item.title}
                      className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                      delay={100 * index}
                      type="fade-slide"
                    >
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold text-purple mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </AnimatedSection>
                  ))}
                </div>
                <div className="flex justify-center">
                  <CustomButton className="bg-green hover:bg-green-dark">Learn More About Our Approach</CustomButton>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={200} className="space-y-6">
                <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Phabe Investment Team Meeting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Expert Team</h3>
                    <p className="text-white/90">Our professionals bring decades of combined experience</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[200px] overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Phabe Investment Office"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-bold text-white">Modern Facilities</h3>
                    </div>
                  </div>
                  <div className="relative h-[200px] overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Client Meeting"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-bold text-white">Client-Centered</h3>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="testimonials" className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
          {/* Corner Decoration */}
          <CornerDecoration variant="dark" />
          {/* Header Pattern */}
          <HeaderPattern className="top-0 right-0 w-96 h-96 opacity-10" variant="dark" />
          <HeaderPattern className="bottom-0 left-0 w-96 h-96 opacity-10 rotate-180" variant="dark" />

          <div className="container px-4 md:px-6 relative">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <DecoratedTitle variant="purple" className="text-purple">
                  What Our Clients Say
                </DecoratedTitle>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Hear from businesses and individuals who have partnered with Phabe Investment Ltd.
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Phabe Investment's logistics services have transformed our supply chain. Their efficient solutions and local expertise have significantly reduced our operational costs and improved delivery times.",
                  name: "Sarah Nakato",
                  title: "Operations Director, UG Distributors",
                  image:
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  quote:
                    "The consultancy team at Phabe Investment provided invaluable insights that helped us navigate the Ugandan market. Their strategic guidance was key to our successful expansion in East Africa.",
                  name: "David Ochieng",
                  title: "CEO, Kampala Tech Solutions",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  quote:
                    "Our investment in Phabe's real estate projects has yielded exceptional returns. Their commitment to quality construction and strategic location selection sets them apart in Uganda's property market.",
                  name: "Grace Auma",
                  title: "Investment Manager, East African Holdings",
                  image:
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((testimonial, index) => (
                <AnimatedSection
                  key={testimonial.name}
                  className="flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                  delay={150 * index}
                  type="fade"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-yellowgreen"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        width={48}
                        height={48}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
          {/* Corner Decoration */}
          <CornerDecoration variant="green" />
          {/* Header Pattern */}
          <HeaderPattern className="top-0 right-0 w-96 h-96 opacity-10" variant="green" />
          <HeaderPattern className="bottom-0 left-0 w-96 h-96 opacity-10 rotate-180" variant="green" />

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-8 lg:grid-cols-2">
              <AnimatedSection className="space-y-6" direction="left">
                <div className="space-y-4">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Get in Touch
                  </DecoratedTitle>
                  <p className="text-muted-foreground md:text-xl">
                    Ready to work with Phabe Investment Ltd? Contact us today to discuss your needs and discover how our
                    services can help your business grow.
                  </p>
                  <div className="grid gap-6 mt-8">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green/10 p-3">
                        <Phone className="h-5 w-5 text-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple">Call Us</h3>
                        <p className="text-muted-foreground">+256 700 123 456</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green/10 p-3">
                        <Mail className="h-5 w-5 text-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple">Email Us</h3>
                        <p className="text-muted-foreground">info@phabeinvestment.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green/10 p-3">
                        <MapPin className="h-5 w-5 text-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple">Visit Us</h3>
                        <p className="text-muted-foreground">Plot 123, Main Street, Seeta, Mukono, Uganda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection className="rounded-xl border bg-background p-6 shadow-lg" direction="right" delay={200}>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-purple">Send Us a Message</h3>
                  <form className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Subject of your message"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                      ></textarea>
                    </div>
                    <CustomButton type="submit" className="w-full bg-green hover:bg-green-dark">
                      Send Message
                    </CustomButton>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-[#252B35] text-white py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection className="space-y-4" direction="up" delay={0}>
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6" />
                <span className="text-xl font-bold">Phabe Investment Ltd</span>
              </div>
              <p className="text-white/90">
                Your trusted investment partner in Uganda, offering comprehensive solutions in logistics, consultancy,
                real estate, agribusiness, and financial services.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white/80 hover:text-white">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white">
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
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white">
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="space-y-4" direction="up" delay={100}>
              <DecoratedTitle as="h3" variant="light">
                Our Services
              </DecoratedTitle>
              <ul className="space-y-2">
                <li>
                  <Link href="/logistics" className="text-white/80 hover:text-white">
                    Logistics Management
                  </Link>
                </li>
                <li>
                  <Link href="/consultancy" className="text-white/80 hover:text-white">
                    Consultancy Services
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="text-white/80 hover:text-white">
                    Real Estate Development
                  </Link>
                </li>
                <li>
                  <Link href="/agribusiness" className="text-white/80 hover:text-white">
                    Agribusiness
                  </Link>
                </li>
                <li>
                  <Link href="/financial-services" className="text-white/80 hover:text-white">
                    Financial Services
                  </Link>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="space-y-4" direction="up" delay={200}>
              <DecoratedTitle as="h3" variant="light">
                Quick Links
              </DecoratedTitle>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-white/80 hover:text-white">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-white/80 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="space-y-4" direction="up" delay={300}>
              <DecoratedTitle as="h3" variant="light">
                Contact Us
              </DecoratedTitle>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <span className="text-white/90">
                    Plot 123, Main Street
                    <br />
                    Seeta, Mukono, Uganda
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="text-white/90">+256 700 123 456</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span className="text-white/90">info@phabeinvestment.com</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-white hover:underline"
                >
                  Contact Us <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-10 border-t border-white/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-white/90">© 2025 Phabe Investment Ltd. All rights reserved.</p>
              <nav className="flex gap-4 sm:gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/80 hover:text-white hover:underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-white/80 hover:text-white hover:underline underline-offset-4"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-white/80 hover:text-white hover:underline underline-offset-4"
                >
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
