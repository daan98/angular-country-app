import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError, map } from 'rxjs';

import { CountryInterface, LanguageInterface } from '../interfaces';

@Injectable({providedIn: 'root'})
export class CountriesService {
    private apiBaseUrl : string = 'https://restcountries.com/v3.1';
    
    constructor(private http: HttpClient) { }

    private getCountryRequest(url : string) : Observable<CountryInterface[]> {
        return this.http.get<CountryInterface[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }
    
    public searchCapital(term : string) : Observable<CountryInterface[]> {
        const url : string = `${this.apiBaseUrl}/capital/${term}`;
        
        return this.getCountryRequest(url);
    }

    public searchCountry(term : string) : Observable<CountryInterface[]> {
        const url : string = `${this.apiBaseUrl}/name/${term}`;

        return this.getCountryRequest(url);
    }

    public searchRegion(term : string) : Observable<CountryInterface[]> {
        const url : string = `${this.apiBaseUrl}/region/${term}`;

        return this.getCountryRequest(url);
    }

    public searchCountryByAlphaCode(term : string) : Observable<CountryInterface | null> {
        const url : string = `${this.apiBaseUrl}/alpha/${term}`;

        return this.http.get<CountryInterface[]>(url)
        .pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError(() => of(null))
        );
    }

    public getLanguages() : Array<LanguageInterface> {
        return [
            {
              lang: 'arabic',
              code: 'ara'
            },
            {
              lang: 'breton',
              code: 'bre'
            },
            {
              lang: 'czech',
              code: 'ces'
            },
            {
              lang: 'welsh',
              code: 'cym'
            },
            {
              lang: 'german',
              code: 'deu'
            },
            {
              lang: 'estonian',
              code: 'est'
            },
            {
              lang: 'finnish',
              code: 'fin'
            },
            {
              lang: 'french',
              code: 'fra'
            },
            {
              lang: 'croatian',
              code: 'hrv'
            },
            {
              lang: 'hungarian',
              code: 'hun'
            },
            {
              lang: 'italian',
              code: 'ita'
            },
            {
              lang: 'japanese',
              code: 'jpn'
            },
            {
              lang: 'korean',
              code: 'kor'
            },
            {
              lang: 'dutch',
              code: 'nld'
            },
            {
              lang: 'persian',
              code: 'per'
            },
            {
              lang: 'polish',
              code: 'pol'
            },
            {
              lang: 'portuguese',
              code: 'por'
            },
            {
              lang: 'russian',
              code: 'rus'
            },
            {
              lang: 'slovak',
              code: 'slk'
            },
            {
              lang: 'spanish',
              code: 'spa'
            },
            {
              lang: 'serbian',
              code: 'srp'
            },
            {
              lang: 'swedish',
              code: 'swe'
            },
            {
              lang: 'turkish',
              code: 'tur'
            },
            {
              lang: 'urdu',
              code: 'urd'
            },
            {
              lang: 'chinese',
              code: 'zho'
            }
        ];
    }
}