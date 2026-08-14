// src/data/clubs.ts
export interface Club {
  id: string;
  name: string;
  category: "Cultural" | "Technical" | "Literary" | "Sports" | "Social Service" | "Arts & Media";
  logo: string;
  tagline: string;
  description: string;
  website?: string;
  coordinator?: string;
}

export const clubs: Club[] = [
  {
    id: "cultural-society",
    name: "Cultural Society",
    category: "Cultural",
    logo: "/images/logo.png",
    tagline: "Celebrating the rich cultural heritage of Aloysius",
    description: "The Cultural Society organizes events that showcase the diverse cultural traditions of India. From folk dance performances to classical music concerts, we celebrate the artistic spirit of our university.",
    website: "https://example.com/cultural-society",
    coordinator: "Dr. Priya Sharma"
  },
  {
    id: "tech-forge",
    name: "Tech Forge",
    category: "Technical",
    logo: "/images/logo.png",
    tagline: "Building the future through code and innovation",
    description: "Tech Forge is the premier technical club at St Aloysius, bringing together students passionate about programming, robotics, and emerging technologies. We host hackathons, workshops, and industry talks.",
    website: "https://example.com/tech-forge",
    coordinator: "Prof. Rajesh Kumar"
  },
  {
    id: "literary-circle",
    name: "Literary Circle",
    category: "Literary",
    logo: "/images/logo.png",
    tagline: "Where words come alive",
    description: "The Literary Circle is a community of readers, writers, and thinkers. We organize poetry readings, book discussions, creative writing workshops, and debates that sharpen the mind and nurture the soul.",
    website: "https://example.com/literary-circle",
    coordinator: "Dr. Sarah Joseph"
  },
  {
    id: "sports-united",
    name: "Sports United",
    category: "Sports",
    logo: "/images/logo.png",
    tagline: "Play with spirit, win with grace",
    description: "Sports United promotes athletic excellence and team spirit across all sports disciplines. From football and basketball to athletics and chess, we provide opportunities for every student to stay active and compete.",
    website: "https://example.com/sports-united",
    coordinator: "Mr. Anthony D'Souza"
  },
  {
    id: "social-impact",
    name: "Social Impact",
    category: "Social Service",
    logo: "/images/logo.png",
    tagline: "Serve the community, transform lives",
    description: "Social Impact is dedicated to community service and social justice. We organize outreach programs, environmental initiatives, and awareness campaigns that embody the Jesuit commitment to service.",
    website: "https://example.com/social-impact",
    coordinator: "Mrs. Maria Fernandes"
  },
  {
    id: "media-crew",
    name: "Media Crew",
    category: "Arts & Media",
    logo: "/images/logo.png",
    tagline: "Tell stories that matter",
    description: "Media Crew is the creative media hub of St Aloysius. From photography and videography to journalism and graphic design, we produce content that captures the vibrant life of our campus.",
    website: "https://example.com/media-crew",
    coordinator: "Mr. Vikram Singh"
  }
];
