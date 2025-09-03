export interface CountryType {
    name: {
        common: string;
        official: string;
    };
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    continents: string[];
    capital?: string[];
    population: number;
    area: number;
    currencies: {
        name: string;
        symbol: string;
    };
    languages: {
        [key: string]: string;
    };
    timezones: string[];
    region: string;
    subregion: string;
}