"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Blessing Olarewaju",
    role: "Homeowner",
    content: "Newton Homes turned our dream into reality. The attention to detail and quality of work exceeded our expectations.",
    avatar: "",
    initials: "BO",
    rating: 4.5,
  },
  {
    name: "Shedrack Salami",
    role: "Property Developer",
    content: "Professional team, excellent communication, and outstanding results. Would highly recommend for any home building project.",
    avatar: "",
    initials: "SS",
    rating: 5,
  },
  {
    name: "Emmanuel Fredrick",
    role: "First-time Buyer",
    content: "The entire process was smooth and transparent. Newton Homes guided us every step of the way.",
    avatar: "",
    initials: "EF",
    rating: 3.5,
  },
];

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-current text-[#1C4484]" />
      ))}
      {halfStar && (
        <Star
          key="half"
          className="h-4 w-4 fill-current text-[#1C4484]"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-400" />
      ))}
    </>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 bg-[#1C4484] text-white">
      <div className="sm:container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say
            about their experience with Newton Homes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-none">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};