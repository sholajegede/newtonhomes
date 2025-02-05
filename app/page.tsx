"use client";

import { ArrowRight, Home, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FeaturedProperties } from "@/components/featured-properties";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <section className="py-24 px-6 bg-white">
        <div className="sm:container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Newton Homes?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Home className="w-12 h-12 mb-4 text-[#1C4484]" />
              <h3 className="text-xl font-semibold mb-2">Curated Properties</h3>
              <p className="text-muted-foreground">
                Discover our handpicked selection of premium properties designed
                for modern living.
              </p>
            </Card>
            <Card className="p-6">
              <MapPin className="w-12 h-12 mb-4 text-[#1C4484]" />
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-muted-foreground">
                All our properties are situated in the most sought-after
                neighborhoods.
              </p>
            </Card>
            <Card className="p-6">
              <Phone className="w-12 h-12 mb-4 text-[#1C4484]" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our dedicated team is always available to assist you with any
                needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <FeaturedProperties />

      <Testimonials />

      <section className="py-24 px-6">
        <div className="sm:container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let us help you discover your dream property today.
          </p>
          <Link href="/properties">
            <Button size="lg" className="gap-2">
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Contact />
    </main>
  );
};