import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryInterface } from '../../interfaces';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{
  
  public countries  : CountryInterface[]     = [];
  public searchTerm : string                 = "";
  public isLoading  : boolean                = false;

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countries  = this.countriesService.cacheStore.byCountry.countries;
    this.searchTerm = this.countriesService.cacheStore.byCountry.term;
  }

  public searchByCountry(term : string) {
    this.isLoading = true;

    this.countriesService.searchCountry(term).subscribe(
      (data : CountryInterface[]) => {
        this.countries = data;
        this.isLoading = false;
      }
    )
  }
}
