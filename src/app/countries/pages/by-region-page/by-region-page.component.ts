import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryInterface } from '../../interfaces';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries : CountryInterface[] = [];

  constructor(
    private countriesService: CountriesService
  ) {}

  public searchByRegion(term : string) {
    this.countriesService.searchRegion(term).subscribe(
      (data : CountryInterface[]) => {
        this.countries = data;
      }
    );
  }
}
