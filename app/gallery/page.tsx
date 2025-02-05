"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "./images/bedroom.jpg",
    alt: "Luxury Living Room",
  },
  {
    src: "./images/bathroom.jpg",
    alt: "Modern Bathroom",
  },
  {
    src: "./images/bedroom-3.jpg",
    alt: "Master Bedroom",
  },
  {
    src: "./images/pool-area.jpg",
    alt: "Swimming Pool",
  },
  {
    src: "./images/entrance.jpg",
    alt: "Entrance",
  },
  {
    src: "./images/bathroom-2.jpg",
    alt: "Bathroom",
  },
  {
    src: "./images/bedroom-2.jpg",
    alt: "Bedroom",
  },
  {
    src: "./images/cinema.jpg",
    alt: "Cinema Room",
  },
  {
    src: "./images/guest-bedroom.jpg",
    alt: "Guest Bedroom Room",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <main className="flex-1">
      <section className="py-24 px-6">
        <div className="sm:container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Take a visual journey through our stunning properties and experience
              luxury living at its finest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <p className="text-white text-lg font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <Dialog
            open={selectedImage !== null}
            onOpenChange={() => setSelectedImage(null)}
          >
            <DialogContent className="max-w-4xl">
              {selectedImage !== null && (
                <div className="relative">
                  <div className="relative aspect-video">
                    <img
                      src={galleryImages[selectedImage].src}
                      alt={galleryImages[selectedImage].alt}
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
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </main>
  );
}