import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PielistComponent } from './pielist.component';

describe('PielistComponent', () => {
  let component: PielistComponent;
  let fixture: ComponentFixture<PielistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PielistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
