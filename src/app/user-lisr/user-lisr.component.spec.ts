import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLisrComponent } from './user-lisr.component';

describe('UserLisrComponent', () => {
  let component: UserLisrComponent;
  let fixture: ComponentFixture<UserLisrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLisrComponent]
    });
    fixture = TestBed.createComponent(UserLisrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
