import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Property {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  powerInfo: string;
  images: string[];
  features: string[];
  additionalServices: string[];
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleWhatsAppClick = () => {
    const message = `
      *Property Details:*\n
      *Title*: ${property.title}\n
      *Type*: ${property.type}\n
      *Location*: ${property.location}\n
      *I'd like to tour this property*\n
      `;
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "2348149559714";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden group">
        <div className="relative aspect-video">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={`${property.images[currentImageIndex]}?w=800&q=80`}
                alt={property.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="secondary"
              size="icon"
              onClick={previousImage}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={nextImage}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>
        </div>
        <CardHeader>
          <CardTitle>{property.title}</CardTitle>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {property.location}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {property.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="font-semibold mb-2">Additional Services</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {property.additionalServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>
            <Button className="w-full" onClick={handleWhatsAppClick}>
              Contact for Viewing
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};