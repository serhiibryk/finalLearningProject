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
  title: any;
}

declare interface ISpiner {
  classes: string;
}

declare interface IMapFields {
  list: any[];
  title: string;
  lable: string;
}
