import { CountryInterface } from "./country.interface";
import { Region } from "./region.type";

export default interface CacheStore {
    byCapital : CountryTerm;
    byCountry : CountryTerm;
    byRegion  : RegionTerm;
};

interface CountryTerm {
    term : string;
    countries : CountryInterface[]
};

interface RegionTerm {
    region ?: Region;
    countries : CountryInterface[];
};