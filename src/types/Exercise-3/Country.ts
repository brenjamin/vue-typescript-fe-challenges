// Country type based on API docs

export type Country = {
  name: Name,
  tld: string[],
  cca2: string,
  ccn3: string,
  cca3: string,
  cioc: string,
  independent: boolean,
  status: string,
  unMember: boolean,
  currencies: object,
  idd: object,
  capital: string[],
  altSpellings: string[],
  region: string,
  subregion: string,
  languages: object,
  translations: object,
  latlng: number[],
  landlocked: boolean,
  area: number,
  flag: string,
  flags: Flags,
  demonyms: object,
  population: number,
}

export type Name = {
  common: string,
  official: string,
  nativeName: NativeName,
}

export type NativeName = {
  official: string,
  common: string,
}
export type Flags = {
  svg: string,
  png: string,
}