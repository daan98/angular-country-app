import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  
  public debouncer             : Subject<string> = new Subject<string>();
  public debouncerSubcribtion ?: Subscription;

  @Input()  public placeholder     : string                   = "";
  @Input()  public searchBoxValue  : string                   = "";
  @Output() public onValue         : EventEmitter<string>     = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubcribtion = this.debouncer
      .pipe(
        debounceTime(400),
      )
      .subscribe(
        (value : string) => {
          this.onValue.emit(value);
        }
      );
  }

  ngOnDestroy(): void {
    this.debouncerSubcribtion?.unsubscribe();
  }

  onKeyPress(keyTerm : string) : void {
    this.debouncer.next(keyTerm);
  }
}
