export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  country: string;
  avatar: string;
}

export const features: Feature[] = [
  {
    icon: '🤝',
    title: 'Unity & Collaboration',
    description: 'Bringing together the diverse cultures and peoples of East Africa for stronger regional cooperation and shared prosperity.',
  },
  {
    icon: '🚀',
    title: 'Innovation Hub',
    description: 'Fostering technological advancement and innovation across the region to compete globally and solve local challenges.',
  },
  {
    icon: '🌍',
    title: 'Cultural Exchange',
    description: 'Celebrating and sharing the rich cultural heritage, languages, and traditions that make East Africa unique.',
  },
  {
    icon: '💼',
    title: 'Economic Growth',
    description: 'Promoting trade, investment, and economic integration to create opportunities for all East Africans.',
  },
  {
    icon: '🎓',
    title: 'Education & Skills',
    description: 'Advancing education and skills development to prepare the next generation of East African leaders.',
  },
  {
    icon: '🌱',
    title: 'Sustainable Future',
    description: 'Working together for environmental conservation and sustainable development across the region.',
  },
];

export const statistics: Statistic[] = [
  {
    value: '8',
    label: 'Member Countries',
    icon: '🏛️',
  },
  {
    value: '300M+',
    label: 'People United',
    icon: '👥',
  },
  {
    value: '6.2M',
    label: 'Square Kilometers',
    icon: '🗺️',
  },
  {
    value: '1000+',
    label: 'Languages Spoken',
    icon: '🗣️',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "EastVerse has connected me with like-minded individuals across the region. Together, we're building the future of East Africa.",
    author: "Amara Ochieng",
    title: "Tech Entrepreneur",
    country: "Kenya",
    avatar: "👩🏿‍💼"
  },
  {
    quote: "The cultural exchange opportunities through EastVerse have enriched my understanding of our shared heritage and diversity.",
    author: "Dr. Samuel Mutumba",
    title: "Cultural Researcher",
    country: "Uganda",
    avatar: "👨🏿‍🎓"
  },
  {
    quote: "As a young leader, EastVerse gives me hope for a united and prosperous East Africa where we all thrive together.",
    author: "Grace Uwimana",
    title: "Youth Ambassador",
    country: "Rwanda",
    avatar: "👩🏿‍🎤"
  }
];
