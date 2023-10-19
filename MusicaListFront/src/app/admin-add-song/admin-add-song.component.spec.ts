import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSongComponent } from './admin-add-song.component';

describe('AdminAddSongComponent', () => {
  let component: AdminAddSongComponent;
  let fixture: ComponentFixture<AdminAddSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddSongComponent]
    });
    fixture = TestBed.createComponent(AdminAddSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
