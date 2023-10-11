import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotSearchComponent } from './vot-search.component';

describe('VotSearchComponent', () => {
  let component: VotSearchComponent;
  let fixture: ComponentFixture<VotSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotSearchComponent]
    });
    fixture = TestBed.createComponent(VotSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
