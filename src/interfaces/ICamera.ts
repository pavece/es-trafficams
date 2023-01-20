export interface ICamera {
  identification: string;
  location: location;
  serialNumber: string;
  imageUrl: string;
}

type location = {
  lat: number;
  lon: number;
  city: string;
};
