import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedetailsComponent } from './piedetails.component';

describe('PiedetailsComponent', () => {
  let component: PiedetailsComponent;
  let fixture: ComponentFixture<PiedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
