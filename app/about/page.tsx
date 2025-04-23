import Image from "next/image";
import {
  Building2,
  Users,
  Award,
  Target,
  Info,
  Shield,
  Star,
  Lightbulb,
  Heart,
  Globe,
  TrendingUp,
  Briefcase,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { TopNav } from "@/components/top-nav";
import { AnimatedSection } from "@/components/animated-section";
import { PageHeader } from "@/components/page-header";
import { DecoratedTitle } from "@/components/decorated-title";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Footer } from "@/components/footer";
import { CoreValuesSlider } from "@/components/core-values-slider";

export const metadata = {
  title: "About Us | Phabe Investment Ltd",
  description:
    "Learn about Phabe Investment Ltd, our mission, vision, values, and the team behind our success in Uganda.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="About Phabe Investment Ltd"
          description="Founded with a vision to transform the investment landscape in Uganda, Phabe Investment Ltd has grown to become a trusted partner for businesses and individuals seeking growth opportunities."
          backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          icon={<Info className="mr-2 h-4 w-4 text-green" />}
          showBackLink={false}
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <AnimatedSection className="space-y-4" direction="up">
                <DecoratedTitle variant="purple" className="text-purple">
                  Our Story
                </DecoratedTitle>
                <p className="text-muted-foreground">
                  Phabe Investments Limited is a dynamic and diversified company
                  based in Uganda established and registered in 2024, offering a
                  range of services in logistics, real estate, consultancy,
                  financial services, and agribusiness. We specialize in sea and
                  air cargo solutions, real estate development, financial
                  advisory, and agricultural value addition to support
                  businesses and individuals in Uganda and beyond. With
                  strategic global partnerships in China, Europe, UAE, and the
                  USA, we facilitate seamless import and export operations,
                  ensuring efficiency and affordability for our clients.
                </p>
                <p className="text-muted-foreground">
                  With strategic global partnerships in China, Europe, UAE, and
                  the USA, we facilitate seamless import and export operations,
                  ensuring efficiency and affordability for our clients.
                </p>
                <div className="relative h-60 w-full overflow-hidden rounded-xl my-6">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Business meeting"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-muted-foreground">
                  What began as a small consultancy firm has grown into a
                  diversified investment company with operations in logistics
                  management, consultancy services, real estate development,
                  agribusiness, and financial services. Our journey has been
                  marked by a commitment to excellence, integrity, and
                  sustainable growth.
                </p>
              </AnimatedSection>
              <AnimatedSection className="space-y-6" direction="up" delay={200}>
                <div className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green/10 p-3">
                      <Target className="h-6 w-6 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle
                        as="h3"
                        variant="purple"
                        size="sm"
                        className="text-purple"
                      >
                        Our Mission
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Our mission is to identify and invest in high potential
                        sectors, providing exceptional returns to our clients
                        while contributing to the overall well being of society
                        through responsible investing and sustainable practices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green/10 p-3">
                      <Award className="h-6 w-6 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle
                        as="h3"
                        variant="purple"
                        size="sm"
                        className="text-purple"
                      >
                        Our Vision
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Our vision is to be the preferred investment partner,
                        driving economic growth and creating sustainable
                        development opportunities in Uganda and beyond.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-60 w-full overflow-hidden rounded-xl my-6">
                  <Image
                    src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Business growth"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="mx-auto max-w-5xl text-center">
              <DecoratedTitle variant="purple" className="text-purple mb-12">
                Our Core Values
              </DecoratedTitle>

              <CoreValuesSlider
                values={[
                  {
                    icon: <Shield className="h-10 w-10 text-green" />,
                    title: "Integrity",
                    description:
                      "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction with our clients, partners, and stakeholders.",
                  },
                  {
                    icon: <Star className="h-10 w-10 text-green" />,
                    title: "Excellence",
                    description:
                      "We strive for excellence in everything we do, delivering exceptional results to our clients through meticulous attention to detail and a commitment to quality in all our services.",
                  },
                  {
                    icon: <Lightbulb className="h-10 w-10 text-green" />,
                    title: "Innovation",
                    description:
                      "We embrace innovation and continuously seek new opportunities and solutions, staying ahead of market trends to provide cutting-edge services that address evolving client needs.",
                  },
                  {
                    icon: <Users className="h-10 w-10 text-green" />,
                    title: "Collaboration",
                    description:
                      "We foster a collaborative and inclusive environment, working together with our clients and partners to achieve shared goals and create mutual value through effective teamwork.",
                  },
                  {
                    icon: <Heart className="h-10 w-10 text-green" />,
                    title: "Social Responsibility",
                    description:
                      "We are committed to making a positive impact on society and the environment, integrating sustainable practices into our operations and contributing to the communities we serve.",
                  },
                ]}
              />
            </AnimatedSection>
            <div className="mt-16 relative h-80 w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaboration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Collaborative Excellence
                </h3>
                <p className="max-w-lg">
                  Our team works together to deliver exceptional results for our
                  clients and partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="mx-auto max-w-5xl">
              <DecoratedTitle
                variant="purple"
                className="text-purple text-center mb-8"
              >
                Our Goals
              </DecoratedTitle>
              <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6 text-green" />,
                    title: "Sustainable Growth",
                    description:
                      "To achieve sustainable growth and profitability for our clients and stakeholders.",
                  },
                  {
                    icon: <Award className="h-6 w-6 text-green" />,
                    title: "Exceptional Opportunities",
                    description:
                      "To provide exceptional investment opportunities in Agribusiness, Real Estate Development, Consultancy services, and Logistics Management.",
                  },
                  {
                    icon: <Globe className="h-6 w-6 text-green" />,
                    title: "Economic Development",
                    description:
                      "To contribute to the economic development and well-being of Uganda and the communities we operate in.",
                  },
                ].map((goal, index) => (
                  <AnimatedSection
                    key={goal.title}
                    className="flex flex-col space-y-4 rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                    delay={150 * index}
                    type="fade-slide"
                  >
                    <div className="rounded-full bg-green/10 p-3 w-fit">
                      {goal.icon}
                    </div>
                    <DecoratedTitle
                      as="h3"
                      variant="purple"
                      size="sm"
                      className="text-purple"
                    >
                      {goal.title}
                    </DecoratedTitle>
                    <p className="text-muted-foreground">{goal.description}</p>
                  </AnimatedSection>
                ))}
              </div>
              <div className="mt-16 relative h-60 w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Business goals"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="mx-auto max-w-5xl">
              <DecoratedTitle
                variant="purple"
                className="text-purple text-center mb-8"
              >
                Our Team
              </DecoratedTitle>
              <div className="grid gap-8 grid-cols-1">
                <AnimatedSection
                  className="rounded-xl border bg-background p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  type="fade"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="relative h-60 w-full md:w-1/3 overflow-hidden rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Our team"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-muted-foreground mb-4">
                        At Phabe Investments Limited, our team is composed of
                        experienced professionals with expertise across various
                        sectors, including logistics, real estate, consultancy,
                        financial services, and agribusiness. We are dedicated
                        to delivering innovative and sustainable solutions that
                        drive business growth and community development.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Our diverse team brings a wealth of knowledge and a
                        strong commitment to excellence, ensuring that we meet
                        the unique needs of our clients. With a focus on
                        efficiency, integrity, and customer satisfaction, we
                        work collaboratively to provide high-quality services
                        that support both local and international businesses.
                      </p>
                      <p className="text-muted-foreground">
                        Together, we are shaping a future of economic
                        empowerment and sustainable development through
                        strategic investments and reliable service delivery.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="mx-auto max-w-5xl">
              <DecoratedTitle
                variant="purple"
                className="text-purple text-center mb-8"
              >
                Our Leadership Team
              </DecoratedTitle>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "John Doe",
                    title: "Chief Executive Officer",
                    description:
                      "With over 20 years of experience in investment and business development across East Africa.",
                    image:
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
                  },
                  {
                    name: "Jane Smith",
                    title: "Chief Operations Officer",
                    description:
                      "A strategic leader with expertise in operational excellence and business transformation.",
                    image:
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
                  },
                  {
                    name: "Michael Johnson",
                    title: "Chief Financial Officer",
                    description:
                      "A financial expert with a track record of driving growth and managing complex investments.",
                    image:
                      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
                  },
                ].map((leader, index) => (
                  <AnimatedSection
                    key={leader.name}
                    className="flex flex-col items-center space-y-4 hover:scale-105 transition-all duration-300"
                    delay={150 * index}
                    type="fade"
                  >
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-purple/10">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        width={160}
                        height={160}
                        alt={leader.name}
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="text-center">
                      <DecoratedTitle as="h3" variant="purple" size="sm">
                        {leader.name}
                      </DecoratedTitle>
                      <p className="text-green font-medium">{leader.title}</p>
                      <p className="mt-2 text-muted-foreground">
                        {leader.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <AnimatedSection className="space-y-4" direction="up">
                <DecoratedTitle variant="purple" className="text-purple">
                  Target Audience
                </DecoratedTitle>
                <p className="text-muted-foreground">
                  Our target audience includes both local and international
                  clients who are looking for investment opportunities in
                  Uganda. We cater to individuals, businesses, and institutions
                  seeking to invest in sectors such as financial services,
                  Agribusiness, Real Estate Development, Consultancy services,
                  and Logistics Management.
                </p>
                <div className="relative h-60 w-full overflow-hidden rounded-xl my-6">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Business meeting"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <DecoratedTitle
                  as="h3"
                  variant="purple"
                  size="sm"
                  className="text-purple"
                >
                  Activities And Products
                </DecoratedTitle>
                <p className="text-muted-foreground">
                  In our Financial Services we offer such as loans to SMEs,
                  financial advisory services to low income individuals with the
                  aim of empowering individuals and business with access to
                  capital, which in turn will help to promote economic growth
                  and development.
                </p>
              </AnimatedSection>
              <AnimatedSection className="space-y-6" direction="up" delay={200}>
                <DecoratedTitle variant="purple" className="text-purple">
                  Competitive Advantage
                </DecoratedTitle>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Globe className="h-6 w-6 text-green" />,
                      title: "Global Partnerships",
                      description:
                        "Strong networks in China, UAE, USA, and Europe.",
                    },
                    {
                      icon: <Target className="h-6 w-6 text-green" />,
                      title: "Affordable & Reliable Services",
                      description: "Competitive pricing with efficiency.",
                    },
                    {
                      icon: <Briefcase className="h-6 w-6 text-green" />,
                      title: "Expertise & Innovation",
                      description: "A skilled team with industry experience.",
                    },
                    {
                      icon: <Users2 className="h-6 w-6 text-green" />,
                      title: "Customer-Centric Approach",
                      description: "Tailored solutions for client needs.",
                    },
                  ].map((advantage, index) => (
                    <div
                      key={advantage.title}
                      className="flex items-start gap-4"
                    >
                      <div className="rounded-full bg-green/10 p-3 mt-1">
                        {advantage.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple">
                          {advantage.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="mx-auto max-w-5xl">
              <DecoratedTitle
                variant="purple"
                className="text-purple text-center mb-8"
              >
                Future Plans & Growth Strategies
              </DecoratedTitle>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Future growth"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Globe className="h-6 w-6 text-green" />,
                      title: "Expanding Logistics Operations",
                      description: "Direct partnerships in China and the UAE.",
                    },
                    {
                      icon: <Lightbulb className="h-6 w-6 text-green" />,
                      title: "Digital Fintech Solutions",
                      description: "Supporting SMEs in Uganda.",
                    },
                    {
                      icon: <Target className="h-6 w-6 text-green" />,
                      title: "Strengthening Agribusiness",
                      description:
                        "Increased value addition in agricultural products.",
                    },
                    {
                      icon: <Building2 className="h-6 w-6 text-green" />,
                      title: "Real Estate Investment",
                      description:
                        "Exploring opportunities across Uganda and East Africa.",
                    },
                  ].map((plan, index) => (
                    <AnimatedSection
                      key={plan.title}
                      className="flex items-start gap-4 rounded-xl border bg-background p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                      delay={100 * index}
                      type="fade-slide"
                    >
                      <div className="rounded-full bg-green/10 p-3">
                        {plan.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple">
                          {plan.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {plan.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <DecoratedTitle variant="purple" className="text-purple">
                Join Our Journey
              </DecoratedTitle>
              <p className="mt-4 text-muted-foreground md:text-xl">
                We're always looking for talented individuals to join our team
                and contribute to our mission of transforming the investment
                landscape in Uganda.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button className="bg-green hover:bg-green-dark">
                  View Career Opportunities
                </Button>
                <Button
                  variant="outline"
                  className="border-green text-green hover:bg-green/10"
                >
                  Learn More About Our Culture
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
