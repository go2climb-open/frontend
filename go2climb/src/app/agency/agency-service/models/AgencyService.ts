export interface AgencyService {
  name: string;
  description: string;
  price: number;
  location: string;
  date: string;
  img_url: string | null;
  id: number;
  isOffer: boolean;
  priceOffer: number;
  agency_id: number;
  status: string;
  score: number;
}

export interface AgencyServiceRequest {
  name: string;
  description: string;
  location: string;
  score: number;
  price: number;
  newPrice: number;
  creationDate: string;
  photos: string;
  isOffer: number;
  isPopular: number;
}

export interface AgencyServiceResponse extends AgencyServiceRequest {
  id: number;
  agency: {
    id: number;
  };
}
