export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area?: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  currencies: { code: string; name: string; symbol: string }[];
  languages: { iso639_1: string; name: string; nativeName: string }[];
  translations: Record<string, string>;
  flag: string;
  regionalBlocs?: any[];
  cioc?: string;
  flags: { svg: string; png: string };
}
