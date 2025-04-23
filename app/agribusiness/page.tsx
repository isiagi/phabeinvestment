import Image from "next/image";
import { Leaf, ChevronRight, Sprout, Tractor, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { TopNav } from "@/components/top-nav";
import { PageHeader } from "@/components/page-header";
import { DecoratedTitle } from "@/components/decorated-title";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Agribusiness | Phabe Investment Ltd",
  description:
    "Sustainable farming, processing, and distribution of agricultural products in Uganda.",
};

export default function AgribusinessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Sustainable Agricultural Solutions"
          description="Innovative farming, processing, and distribution of agricultural products to support Uganda's food security and economic growth."
          icon={<Leaf className="mr-2 h-4 w-4 text-green" />}
          backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D"
          showBackLink={false}
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
              <div className="col-span-1 lg:col-span-3 mb-8">
                <DecoratedTitle className="text-purple">
                  Our Agribusiness Services
                </DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  Phabe Investment Ltd is committed to developing sustainable
                  agricultural practices and businesses that benefit local
                  communities and the environment.
                </p>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <Sprout className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold">Crop Production</h3>
                <p className="mt-2 text-muted-foreground">
                  Sustainable farming of various crops using modern agricultural
                  techniques and technologies.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Cash crops (coffee, tea, cotton)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Food crops (maize, beans, cassava)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Horticultural products</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <Tractor className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold">Agricultural Services</h3>
                <p className="mt-2 text-muted-foreground">
                  Comprehensive support services for farmers and agricultural
                  businesses across Uganda.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Farm equipment leasing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Agricultural consulting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Training and capacity building</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <Store className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold">Processing & Distribution</h3>
                <p className="mt-2 text-muted-foreground">
                  Value addition through processing and efficient distribution
                  of agricultural products.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Food processing facilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Storage solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Market linkages</span>
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
                  Our Approach to Sustainable Agriculture
                </DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  We believe in agricultural practices that are economically
                  viable, environmentally sound, and socially responsible.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">
                        Environmental Stewardship
                      </h3>
                      <p className="text-muted-foreground">
                        We implement farming practices that conserve natural
                        resources, protect biodiversity, and minimize
                        environmental impact.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">
                        Community Development
                      </h3>
                      <p className="text-muted-foreground">
                        We work with local communities to create employment
                        opportunities and improve livelihoods through
                        agriculture.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">
                        Innovation & Technology
                      </h3>
                      <p className="text-muted-foreground">
                        We leverage modern agricultural technologies and
                        innovations to improve productivity and sustainability.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Image
                  src="/phabe/img7.jpeg"
                  width={500}
                  height={300}
                  alt="Sustainable Agriculture"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-purple">
                    Featured Project: Mukono Farms
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    A 200-acre integrated farming project in Mukono district
                    producing a variety of crops and employing over 100 local
                    residents.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Sustainable farming practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>On-site processing facility</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Training center for local farmers</span>
                    </li>
                  </ul>
                  <Button className="mt-4 w-full">View Project Details</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <DecoratedTitle className="text-purple">
                Partner With Us
              </DecoratedTitle>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Join us in our mission to transform agriculture in Uganda
                through sustainable practices and innovative solutions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button size="lg">Explore Partnership Opportunities</Button>
                <Button variant="outline" size="lg">
                  Contact Our Agribusiness Team
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
