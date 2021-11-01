export type IconProps = {
  color?: string;
  height?: string;
  width?: string;
};

export type Activity = {
  uuid: string;
  city: string;
  country: string;
  street: string;
  zip: string;
  name: string;
  venueName: string;
  venuePictureUrl: string;
  pictureUrl: string;
  startTime: string;
  endTime: string;
  slotsOpen: number;
  slotsTotal: number;
  rating: number;
  ratings: number;
  fromPrice: number;
  currencySymbol: string;
  isOnline: boolean;
  isFullyBooked: boolean;
  sport: string;
};
