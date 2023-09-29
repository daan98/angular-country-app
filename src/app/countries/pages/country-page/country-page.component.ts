import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { CountryInterface, LanguageInterface } from '../../interfaces';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
    `img: {
        width: 25px;
      }`
  ]
})
export class CountryPageComponent implements OnInit {
  
  public country ?: CountryInterface
  public languages : Array<LanguageInterface> = [];

  constructor(
    private activatedRoute   : ActivatedRoute,
    private countriesService : CountriesService,
    private router           : Router
  ) {
    this.languages = this.countriesService.getLanguages();
  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id)),
    )
    .subscribe(
      (country : CountryInterface | null) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }

        return this.country = country;
      }
    );
  }
}
