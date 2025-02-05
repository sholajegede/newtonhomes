import { Card } from "@/components/ui/card";
import {
  Home,
  Key,
  Briefcase,
  Shield,
  Clock,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    title: "Property Management",
    description:
      "Comprehensive property management services to maintain and enhance your investment.",
    icon: Home,
  },
  {
    title: "Rental Services",
    description:
      "Find your perfect rental property with our extensive portfolio and expert guidance.",
    icon: Key,
  },
  {
    title: "Investment Advisory",
    description:
      "Expert advice on real estate investments to help you make informed decisions.",
    icon: Briefcase,
  },
  {
    title: "Security Services",
    description:
      "24/7 security services to ensure the safety and protection of our properties.",
    icon: Shield,
  },
  {
    title: "Concierge Services",
    description:
      "Round-the-clock concierge services to cater to all your needs and requests.",
    icon: Clock,
  },
  {
    title: "Tenant Support",
    description:
      "Dedicated support team to assist tenants with any queries or maintenance needs.",
    icon: HeartHandshake,
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="py-24 px-6">
        <div className="sm:container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Discover our comprehensive range of real estate services designed to
              meet your needs and exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-12 w-12 text-[#1C4484] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}