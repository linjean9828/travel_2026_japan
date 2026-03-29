export interface Restaurant {
  name: string;
  cuisine: string;
  tabelogScore?: number;
  phone?: string;
  address?: string;
  priceRange?: string;
  hours?: string;
  recommendation: string;
}

export interface GuideNote {
  story?: string;
  movie?: string;
  celebrity?: string;
  novel?: string;
}

export interface Attraction {
  time: string;
  title: string;
  description: string;
  story?: string;
  guideNote?: GuideNote;
  foundedYear?: string;
  keyPerson?: string;
  keyPersonDeeds?: string;
  souvenir?: string;
  mustEat?: string;
  mustEatLink?: string;
  image?: string;
  phone?: string;
  mapCode?: string;
  address?: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  dayOfWeek: string;
  title: string;
  highlight: string;
  accommodation: string;
  accommodationDetails?: {
    address: string;
    phone: string;
    mapCode: string;
  };
  image: string;
  attractions: Attraction[];
  lunchRecommendations?: Restaurant[];
  tips?: string[];
}

export interface HeroItinerary {
  title: string;
  image: string;
  price: string;
  days: string;
  date: string;
  description?: string;
}
