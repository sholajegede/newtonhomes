"use client";

import { useState } from "react";
import { Search } from "@/components/ui/search";
import { FadeInView } from "@/components/ui/animations";
import { PropertyCard } from "@/components/properties/property-card";
import { Property, propertyData } from "@/lib/property-data";

const properties = propertyData;

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      // Reset to all properties when the search bar is cleared
      setFilteredProperties(properties);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const filtered = properties.filter((property) =>
      property.title.toLowerCase().includes(lowercasedQuery) ||
      property.location.toLowerCase().includes(lowercasedQuery) ||
      property.features.some((feature) =>
        feature.toLowerCase().includes(lowercasedQuery)
      ) ||
      property.additionalServices.some((service) =>
        service.toLowerCase().includes(lowercasedQuery)
      )
    );
    setFilteredProperties(filtered);
  };

  return (
    <section className="pt-12 sm:pt-16 pb-16 px-6">
      <div className="sm:container py-12 mx-auto">
        <FadeInView>
          <h1 className="text-4xl font-bold mb-8 text-center">Our Properties</h1>
          <div className="max-w-3xl mx-auto mb-12 space-y-4">
            <Search onSearch={handleSearch} />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
};