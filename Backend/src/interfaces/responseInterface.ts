export default interface GoogleMapsResponse {
  routes: {
    legs: {
      startLocation: {
        latLng: {
          latitude: number;
          longitude: number;
        };
      };
      endLocation: {
        latLng: {
          latitude: number;
          longitude: number;
        };
      };
    }[];
    distanceMeters: number;
    duration: string;
    polyline: {
      encodedPolyline: string;
    };
  }[];
}