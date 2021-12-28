import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseValueComponent } from './increase-value.component';

describe('IncreaseValueComponent', () => {
  let component: IncreaseValueComponent;
  let fixture: ComponentFixture<IncreaseValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the "limitReachedEmit.emit"', () => {
    spyOn(component.limitReachedEmit, 'emit');

    component.value = 4;

    component.ngOnChanges();

    expect(component.limitReachedEmit.emit).not.toHaveBeenCalled();

    component.value = 5;

    component.ngOnChanges();

    expect(component.limitReachedEmit.emit).toHaveBeenCalled();
  });
});
