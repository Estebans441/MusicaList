import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VotMenuComponent} from './vot-menu.component';

describe('VotMenuComponent', () => {
  let component: VotMenuComponent;
  let fixture: ComponentFixture<VotMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotMenuComponent]
    });
    fixture = TestBed.createComponent(VotMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
