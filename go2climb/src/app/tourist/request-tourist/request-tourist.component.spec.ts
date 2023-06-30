import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTouristComponent } from './request-tourist.component';

describe('RequestTouristComponent', () => {
  let component: RequestTouristComponent;
  let fixture: ComponentFixture<RequestTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTouristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
