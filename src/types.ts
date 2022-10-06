export type PokemonsApiType = {
  pokemons: SinglePokemonType[];
  pagination: PaginationType;
};

export type PaginationType = {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: PaginationResultsType[];
};

export type PaginationResultsType = {
  name: string;
  url: string;
};

export type SinglePokemonType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: AbilitiesType[];
  sprites: SpritesType;
  base_experience: number;
};

export type AbilitiesType = {
  is_hidden: boolean;
  slot: number;
  ability: SingleAbilityType[];
};

export type SingleAbilityType = {
  name: string;
  url: string;
};

export type SpritesType = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export type PaginationOptionsType = {
  offset: number;
  limit: number;
};
