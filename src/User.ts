import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  // randomized name and latitude and longitude, so we do it inside the class
  // we use faker
  constructor() {
    this.name = faker.person.firstName();
    this.location = { lat: faker.location.latitude(),
    lng: faker.location.longitude() };
  }

  markerContent():string {
    return `This is ${this.name}`
  }
}
