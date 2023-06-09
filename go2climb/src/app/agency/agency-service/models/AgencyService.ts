export interface AgencyService {
  name: string;
  description: string;
  price: number;
  location: string;
  date: string;
  img_url: string;
  id: number;
  isOffer: boolean;
  priceOffer: number;
  agency_id: number;
  score: number;
}
