"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import { Target, Users, Heart, Check, Shield, Sparkles, Clock } from "lucide-react";

const visionPoints = [
  { icon: Target, title: "Our Mission", description: "To empower individuals, families, and businesses by providing rental solutions that blend comfort, functionality, and style. We aim to be more than just a rental service; we strive to be your reliable partner in finding spaces that match your vision and lifestyle." },
  { icon: Users, title: "Our Approach", description: "We believe in creating lasting relationships with our clients through transparency, reliability, and exceptional service. Our team works tirelessly to ensure every rental experience exceeds expectations." },
  { icon: Heart, title: "Our Promise", description: "Quality, innovation, and customer satisfaction are at the heart of everything we do. We're committed to maintaining the highest standards in property management and client service." },
];

const values = [
  { icon: Check, title: "Quality", description: "Meticulously maintained properties designed for lasting satisfaction." },
  { icon: Sparkles, title: "Style", description: "Timeless aesthetics blending design with practicality." },
  { icon: Shield, title: "Trust", description: "Reliability and transparency in every interaction." },
  { icon: Clock, title: "Efficiency", description: "Streamlined processes for smooth rental experiences." },
];

const milestones = [
  { year: "2022", title: "Foundation", description: "Newton Homes was established with a vision to revolutionize the rental property market." },
  { year: "2023", title: "Expansion", description: "Expanded our portfolio with premium properties and introduced innovative rental solutions." },
  { year: "2024", title: "Innovation", description: "Launched smart home integration and premium concierge services across our properties." },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* About Section */}
      <section className="pt-32 pb-16 px-6 bg-muted/50">
        <div className="sm:container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">About Newton Homes</h1>
          <p className="text-xl text-muted-foreground mb-8">
            At Newton Homes, we don't just provide spaces; we craft experiences that redefine living. Our commitment to excellence and innovation drives us to create exceptional rental solutions.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-6">
        <div className="sm:container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership</h2>
            <p className="text-muted-foreground">
              Meet the visionary behind Newton Homes, driving innovation and excellence in real estate.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/4] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="./images/founder-two.jpg"
                alt="Mr. Inikoro Newyear - CEO"
                fill
                className="object-cover"
                unoptimized={true}
                quality={100}
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Mr. Inikoro Newyear</h3>
                <p className="text-primary font-medium">Founder & CEO</p>
              </div>
              <p className="text-muted-foreground">
                With over a decade of experience in real estate and property development, Mr. Inikoro Newyear founded Newton Homes in 2022 with a vision to revolutionize the rental property landscape. His innovative approach and commitment to excellence have established Newton Homes as a leading name in premium rental properties.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon"><LinkedinIcon className="h-5 w-5 stroke-[#1C4484]" /></Button>
                <Button variant="outline" size="icon"><TwitterIcon className="h-5 w-5 stroke-[#1C4484]" /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="sm:container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            At Newton Homes, we offer a diverse portfolio of properties, meticulously curated to meet varying preferences and budgets. Our unwavering dedication to a customer-first approach ensures that your rental journey is seamless, supported, and confident.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We’re committed to making property finding an exciting and fulfilling adventure. With Newton Homes, discover spaces that inspire you to live, work, and thrive effortlessly.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6">
        <div className="sm:container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">Building a future where finding your perfect space is effortless and enjoyable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {visionPoints.map((point) => (
              <Card key={point.title} className="bg-background">
                <CardContent className="p-6 text-center">
                  <point.icon className="h-12 w-12 mx-auto mb-4 text-[#1C4484]" />
                  <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="sm:container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide us in delivering exceptional service and value.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-[#1C4484]" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <div className="sm:container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">A timeline of growth, innovation, and commitment to excellence.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  <Card className={`w-1/2 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <CardContent className="p-6">
                      <span className="text-[#1C4484] font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};