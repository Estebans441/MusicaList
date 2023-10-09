import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresVotComponent } from './genres-vot.component';

describe('GenresVotComponent', () => {
  let component: GenresVotComponent;
  let fixture: ComponentFixture<GenresVotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenresVotComponent]
    });
    fixture = TestBed.createComponent(GenresVotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
