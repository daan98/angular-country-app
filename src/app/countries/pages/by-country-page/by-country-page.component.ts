import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryInterface } from '../../interfaces';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries : CountryInterface[] = [];

  constructor(
    private countriesService: CountriesService
  ) {}

  public searchByCountry(term : string) {
    this.countriesService.searchCountry(term).subscribe(
      (data : CountryInterface[]) => {
        this.countries = data;
      }
    )
  }
}
