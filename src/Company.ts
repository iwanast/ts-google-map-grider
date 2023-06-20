import { faker } from "@faker-js/faker";

export class Company {
  name: string;
  slogan: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.slogan = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.name}</h1>
        <h3>Slogan: ${this.slogan}</h3>
      </div>
    `;
  }
}
