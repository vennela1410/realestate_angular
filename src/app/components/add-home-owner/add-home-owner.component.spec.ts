import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeOwnerComponent } from './add-home-owner.component';

describe('AddHomeOwnerComponent', () => {
  let component: AddHomeOwnerComponent;
  let fixture: ComponentFixture<AddHomeOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHomeOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHomeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
