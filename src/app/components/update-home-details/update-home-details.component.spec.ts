import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHomeDetailsComponent } from './update-home-details.component';

describe('UpdateHomeDetailsComponent', () => {
  let component: UpdateHomeDetailsComponent;
  let fixture: ComponentFixture<UpdateHomeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHomeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
