import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IncreaseValueComponent } from './increase-value/increase-value.component';

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IncreaseValueComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  fit('should set the "showLimit" to true', () => {
    component.value = 4;

    fixture.detectChanges();

    expect(component.showLimit).toBe(false);

    const componentIncreaseValue = fixture.debugElement.query(By.directive(IncreaseValueComponent)).componentInstance;
    componentIncreaseValue.increase();

    fixture.detectChanges();

    expect(component.showLimit).toBe(true);
  });
});
