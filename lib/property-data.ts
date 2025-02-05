export interface Property {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  powerInfo: string;
  images: string[];
  features: string[];
  additionalServices: string[];
};

export const propertyData: Property[] = [
  {
    id: "smart-home",
    title: "2bed Smart Home",
    type: "Smart Home",
    location: "Lekki Phase 1",
    description: "Experience modern living in our 2-bedroom smart home featuring free unlimited internet, 24/7 security, and electricity in a serene environment.",
    features: [
      "Free Unlimited Internet",
      "24hrs security",
      "All rooms En-suite",
      "House keeping",
      "Smart TVs in all rooms",
      "PS5 gaming",
    ],
    powerInfo: "",
    additionalServices: [
      "Chef services",
      "Massage and therapy"
    ],
    images: [
      "./2-bed-smart-home/IMG-20241206-WA0004.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0005.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0006.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0007.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0008.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0009.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0010.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0011.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0012.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0013.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0014.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0015.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0016.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0017.jpg",
      "./2-bed-smart-home/IMG-20241206-WA0018.jpg"
    ],
  },
  {
    id: "luxury-penthouse",
    title: "Luxury 3bedroom penthouse",
    type: "Penthouse",
    description: "Experience ultimate luxury in our 3-bedroom penthouse featuring a private rooftop pool, cinema, and stunning city views.",
    location: "Ikate Palm Spring",
    features: [
      "Smart home",
      "Free unlimited internet",
      "All rooms En-suite",
      "House keeping",
      "Smart TVs in all rooms",
      "Private roof top swimming pool",
      "Private cinema",
      "Private Gym",
      "Golf course",
      "Outdoor cinema",
      "Country home view",
      "Snooker",
      "Table Tennis"
    ],
    powerInfo: "20 hours light then 4 hours solar (2pm to 10am then solar works from 10am to 2pm)",
    additionalServices: [
      "Chef services",
      "Massage and Therapy",
      "Chauffeur service",
      "Airport transfers",
      "Boat cruise",
      "Jet ski"
    ],
    images: [
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0040.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0028.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0029.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0031.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0032.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0033.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0034.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0035.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0036.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0037.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0038.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0039.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0041.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0042.jpg",
      "./luxury-3-bedroom-penthouse/IMG-20241206-WA0043.jpg"
    ],
  },
];