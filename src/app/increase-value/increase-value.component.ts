import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-increase-value',
  templateUrl: './increase-value.component.html',
  styleUrls: ['./increase-value.component.scss']
})
export class IncreaseValueComponent implements OnChanges {

  @Input('value') value: number = 0;

  @Output('valueIncreasedEmit') valueIncreasedEmit: EventEmitter<number> = new EventEmitter<number>();
  @Output('limitReachedEmit') limitReachedEmit: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(): void {
    if(this.value >= 5) {
      this.limitReachedEmit.emit();
    }
  }

  increase() {
    this.valueIncreasedEmit.emit(this.value + 1);
  }
}
