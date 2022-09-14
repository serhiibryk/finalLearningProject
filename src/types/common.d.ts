declare interface Common {
  films: string;
  people: string;
  planets: string;
  species: string;
  starships: string;
  vehicles: string;
}

declare interface PageData {
  nextId: number;
}

declare module 'react-hexagon';

declare interface Films {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

declare interface Planets {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

declare interface People {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

declare interface Species {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  films: string[];
  hair_colors: string;
  homeworld: string | null;
  language: string;
  name: string;
  people: string[];
  skin_colors: string;
  url: string;
}
declare interface Starships {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  starship_class: string;
  url: string;
}

declare interface Vehicles {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  url: string;
  vehicle_class: string;
}

declare interface IPagination {
  defaultCurrent: number;
  total: number;
  current?: number;
  onChange: (id: number) => void;
}

declare interface ICardRow {
  lable: string;
  title: string | number;
}

declare interface IMapFields {
  list: Object[];
  title: string;
  lable: string;
}

declare interface DecodedData {
  iss: string;
  iat: number;
  exp: number;
  aud: string;
  sub: string;
  nickname: string;
  email: string;
  address: string;
  phone: string;
  firstName: string;
  lastName: string;
}

declare interface DataFromAPI<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

declare interface GetPeopleAction {
  people: People[];
  count: number;
}

declare interface GetSpecyAction {
  specy: Species[];
  count: number;
}

declare interface GetStarshipsAction {
  starships: Starships[];
  count: number;
}

declare interface GetVehiclesAction {
  vehicles: Vehicles[];
  count: number;
}

declare interface GetPlanetsAction {
  planets: Planets[];
  count: number;
}

declare interface User {
  confirm: string;
  email: string;
  nickname: string;
  password: string;
}

declare interface IStateDarkMode {
  films: Films[];
  isLoading: boolean;
  error: string;
}

declare interface IStateForScroll {
  stateForScroll: Planets[];
}

declare interface IStatePage {
  page: number;
}

declare interface IStatePeople {
  isLoading: boolean;
  error: string;
  people: People[];
  count: number;
}

declare interface IStatePlanets {
  planets: Planets[];
  error: string;
  isLoading: boolean;
  count: number;
}

declare interface IStateSpecy {
  specy: Species[];
  error: string;
  isLoading: boolean;
  count: number;
}

declare interface IStateStarships {
  starships: Starships[];
  error: string;
  isLoading: boolean;
  count: number;
}

declare interface IStateUser {
  token: string | null;
}

declare interface IStateUserData {
  data: User[];
}

declare interface IStateVehicles {
  vehicles: Vehicles[];
  error: string;
  isLoading: boolean;
  count: number;
}
declare interface IMainState {
  IStateUserData: User[];
  IStateFilms: Films[];
  IStateForScroll: Planets[];
  IStatePage: number;
  IStatePeople: People[];
  IStatePlanets: Planets[];
  IStateSpecy: Species[];
  IStateStarships: Starships[];
  IStateVehicles: Vehicles[];
  IStateUser: string;
  userData: IStateUserData;
}

declare interface IValueRegister {
  confirm: string;
  email: string;
  nickname: string;
  password: string;
}
declare interface IValueLogin {
  email: string;
  password: string;
}

declare interface HexCell {
  title: string;
  isOpen: boolean;
  clickable: boolean;
  level: number;
  parent: string;
  backgroundColor: string;
  interactiveCases: string[];
  icon: ReactNode;
  color: string;
}

declare interface HexProps {
  content: ReactNode;
  cell: HexCell;
  size: number;
  level: number;
  className: string;
  activeCase: string;
  isActive: boolean;
  onClick: () => void;
}
