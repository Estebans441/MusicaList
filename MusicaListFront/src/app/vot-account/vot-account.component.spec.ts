import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VotAccountComponent} from './vot-account.component';

describe('VotAccountComponent', () => {
  let component: VotAccountComponent;
  let fixture: ComponentFixture<VotAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotAccountComponent]
    });
    fixture = TestBed.createComponent(VotAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
