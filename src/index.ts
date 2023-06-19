import { Map } from "./Map";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
const customMap = new Map("map");
customMap.addMarker(user); // implicit check if user can be an argument for addMarker
customMap.addMarker(company);