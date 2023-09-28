import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input()  public placeholder : string               = "";
  @Output() public onValue     : EventEmitter<string> = new EventEmitter<string>();

  public handleOnSeach(term : string) : void {
    this.onValue.emit(term);
  }
}
