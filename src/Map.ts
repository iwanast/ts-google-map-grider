/// <reference types="@types/google.maps" />

// Instructions to every other class on how to be an argument to "addMarker"
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
export class Map {
  // we want to hide the existence of the google-map to other engineers
  private googleMap: google.maps.Map; // we don't want anyone else to access that map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
  }
}
