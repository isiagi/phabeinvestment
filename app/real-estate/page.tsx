import Image from "next/image";
import { Warehouse, ChevronRight, Home, Building, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { TopNav } from "@/components/top-nav";
import { PageHeader } from "@/components/page-header";
import { ScrollToTop } from "@/components/scroll-to-top";
import { DecoratedTitle } from "@/components/decorated-title";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Real Estate Development | Phabe Investment Ltd",
  description:
    "Quality housing, commercial properties, and land development across Uganda.",
};

export default function RealEstatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Premium Real Estate Solutions"
          description="Developing quality residential and commercial properties across Uganda with a focus on sustainability and value."
          icon={<Warehouse className="mr-2 h-4 w-4 text-green" />}
          backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          showBackLink={false}
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
              <div className="col-span-1 lg:col-span-3 mb-8">
                <DecoratedTitle className="text-purple">
                  Our Real Estate Portfolio
                </DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  Phabe Investment Ltd develops and manages a diverse portfolio
                  of real estate properties that meet the highest standards of
                  quality and sustainability.
                </p>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <Home className="h-10 w-10 text-green mb-4" />
                <h3 className="text-xl font-bold text-purple">
                  Residential Properties
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Modern and comfortable homes designed for families and
                  individuals in prime locations across Uganda.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Luxury apartments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Family homes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Gated communities</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <Building className="h-10 w-10 text-blue mb-4" />
                <h3 className="text-xl font-bold text-purple">
                  Commercial Properties
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Strategic commercial spaces designed to maximize business
                  potential and customer experience.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Office buildings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Retail spaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Warehouses</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <MapPin className="h-10 w-10 text-yellowgreen mb-4" />
                <h3 className="text-xl font-bold text-purple">
                  Land Development
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Strategic land acquisition and development for various
                  purposes across Uganda.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Residential plots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Commercial plots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Agricultural land</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div>
                <DecoratedTitle className="text-purple">
                  Our Development Process
                </DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  We follow a comprehensive development process to ensure the
                  highest quality and value in all our real estate projects.
                </p>
                <ol className="mt-6 space-y-4">
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-green-foreground">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">
                        Site Selection & Acquisition
                      </h3>
                      <p className="text-muted-foreground">
                        Strategic selection of prime locations with growth
                        potential and proper legal documentation.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-green-foreground">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">
                        Design & Planning
                      </h3>
                      <p className="text-muted-foreground">
                        Collaborative design process with architects and
                        engineers to create functional and aesthetic spaces.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-green-foreground">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">Construction</h3>
                      <p className="text-muted-foreground">
                        Quality construction with strict adherence to standards,
                        timelines, and budgets.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-green-foreground">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">
                        Marketing & Sales
                      </h3>
                      <p className="text-muted-foreground">
                        Strategic marketing and transparent sales process to
                        connect properties with the right buyers.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Image
                  src="/phabe/img1.jpeg"
                  width={500}
                  height={300}
                  alt="Real Estate Development Process"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-purple">
                    Featured Project: Seeta Heights
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    A modern residential community in Seeta, Mukono featuring
                    spacious homes, green spaces, and community amenities.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>3 & 4 bedroom family homes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>Community center and playground</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>24/7 security and maintenance</span>
                    </li>
                  </ul>
                  <Button className="mt-4 w-full bg-green hover:bg-green-dark">
                    View Project Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <DecoratedTitle className="text-purple">
                Invest in Your Future
              </DecoratedTitle>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Explore our current real estate opportunities and secure your
                investment in Uganda's growing property market.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button className="bg-green hover:bg-green-dark">
                  View Current Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-green text-green hover:bg-green/10"
                >
                  Schedule Property Viewing
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
