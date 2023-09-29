import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryInterface, Region } from '../../interfaces';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent implements  OnInit {
  
  public countries       : CountryInterface[]     = [];
  public isLoading       : boolean                = false;
  public regions         : Region[]               = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion ?: Region;

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countries      = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  public searchByRegion(term : Region) {
    this.isLoading = true;
    this.selectedRegion = term;

    this.countriesService.searchRegion(term).subscribe(
      (data : CountryInterface[]) => {
        this.countries = data;
        this.isLoading = false;
      }
    );
  }
}
