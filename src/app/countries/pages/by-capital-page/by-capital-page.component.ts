import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryInterface } from '../../interfaces';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries  : CountryInterface[]     = [];
  public searchTerm : string                 = '';
  public isLoading  : boolean                = false;

  constructor(
    private countriesService : CountriesService
  ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.searchTerm = this.countriesService.cacheStore.byCapital.term;
  }

  public searchByCapital(term : string) {
    this.isLoading = true;

    this.countriesService.searchCapital(term).subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
    })
  }
}
