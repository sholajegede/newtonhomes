"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import Link from "next/link";
import { propertyData } from "@/lib/property-data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    if (selectedProperty !== null) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? propertyData[selectedProperty].images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProperty !== null) {
      setCurrentImageIndex((prev) =>
        prev === propertyData[selectedProperty].images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <main className="flex-1">
      <section className="py-24 px-6 sm:container">
        <div className="">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-start mb-4">
              Featured Properties
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-start mb-12">
              Discover our handpicked selection of luxury properties designed for
              modern living
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {propertyData.map((property, index) => (
              <FadeIn key={property.id} delay={0.2 * (index + 1)} fullWidth>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card
                    key={property.id}
                    className="overflow-hidden group cursor-pointer"
                  >
                    <div
                      className="relative aspect-video cursor-pointer"
                      onClick={() => {
                        setSelectedProperty(index);
                        setCurrentImageIndex(0);
                      }}
                    >
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="object-cover w-full h-full"
                      />
                      <Badge className="absolute top-4 right-4">
                        {property.type}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold mb-4">
                        {property.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {property.description}
                      </p>

                      <Link href="/properties">
                        <Button className="flex ml-auto">View all properties</Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <Dialog
            open={selectedProperty !== null}
            onOpenChange={() => setSelectedProperty(null)}
          >
            <DialogContent className="max-w-4xl">
              {selectedProperty !== null && (
                <div className="relative">
                  <div className="relative aspect-video">
                    <img
                      src={
                        propertyData[selectedProperty].images[currentImageIndex]
                      }
                      alt={propertyData[selectedProperty].title}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Badge variant="secondary">
                      {currentImageIndex + 1} /{" "}
                      {propertyData[selectedProperty].images.length}
                    </Badge>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </main>
  );
};