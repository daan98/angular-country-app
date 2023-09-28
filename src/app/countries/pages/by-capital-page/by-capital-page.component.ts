import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryInterface } from '../../interfaces';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  public countries : CountryInterface[] = [];

  constructor(
    private countriesService : CountriesService
  ) {}

  public searchByCapital(term : string) {
    this.countriesService.searchCapital(term).subscribe((data) => {
      this.countries = data;
    })
  }
}
