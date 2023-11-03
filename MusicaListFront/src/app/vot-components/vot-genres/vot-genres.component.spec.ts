import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VotGenresComponent} from './vot-genres.component';

describe('VotGenresComponent', () => {
  let component: VotGenresComponent;
  let fixture: ComponentFixture<VotGenresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotGenresComponent]
    });
    fixture = TestBed.createComponent(VotGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
