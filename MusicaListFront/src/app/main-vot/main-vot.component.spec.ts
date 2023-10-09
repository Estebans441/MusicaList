import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVotComponent } from './main-vot.component';

describe('GenresVotComponent', () => {
  let component: MainVotComponent;
  let fixture: ComponentFixture<MainVotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainVotComponent]
    });
    fixture = TestBed.createComponent(MainVotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
