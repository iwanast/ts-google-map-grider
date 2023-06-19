import { faker } from "@faker-js/faker";

export class User {
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
}
