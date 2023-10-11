import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotSongsComponent } from './vot-songs.component';

describe('VotSongsComponent', () => {
  let component: VotSongsComponent;
  let fixture: ComponentFixture<VotSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotSongsComponent]
    });
    fixture = TestBed.createComponent(VotSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
