export default interface GoogleMapsResponse {
    routes: {
      legs: {
        distance: {
          text: string;
          value: number;
        };
        duration: {
          text: string;
          value: number;
        };
        steps: {
          distance: {
            text: string;
            value: number;
          };
          duration: {
            text: string;
            value: number;
          };
          html_instructions: string;
          polyline: {
            points: string;
          };
        }[];
      }[];
    }[];
  }