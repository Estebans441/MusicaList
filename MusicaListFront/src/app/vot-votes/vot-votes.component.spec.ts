import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VotVotesComponent} from './vot-votes.component';

describe('VotVotesComponent', () => {
  let component: VotVotesComponent;
  let fixture: ComponentFixture<VotVotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotVotesComponent]
    });
    fixture = TestBed.createComponent(VotVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
