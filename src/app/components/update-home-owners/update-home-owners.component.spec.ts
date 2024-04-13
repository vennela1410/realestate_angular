import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHomeOwnersComponent } from './update-home-owners.component';

describe('UpdateHomeOwnersComponent', () => {
  let component: UpdateHomeOwnersComponent;
  let fixture: ComponentFixture<UpdateHomeOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHomeOwnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHomeOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
