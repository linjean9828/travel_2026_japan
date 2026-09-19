import { japanHero, japanItinerary } from "./trips/japan";
import { germanySwitzerlandHero, germanySwitzerlandItinerary } from "./trips/germany-switzerland";
import { thailandHero, thailandItinerary } from "./trips/thailand";

export * from "./types";

export const trips = {
  japan: {
    hero: japanHero,
    itinerary: japanItinerary,
  },
  germanySwitzerland: {
    hero: germanySwitzerlandHero,
    itinerary: germanySwitzerlandItinerary,
  },
  thailand: {
    hero: thailandHero,
    itinerary: thailandItinerary,
  },
};

export type TripId = keyof typeof trips;

export function getTrip(id: TripId) {
  return trips[id];
}
