import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminEditSongComponent} from './admin-edit-song.component';

describe('AdminEditSongComponent', () => {
  let component: AdminEditSongComponent;
  let fixture: ComponentFixture<AdminEditSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditSongComponent]
    });
    fixture = TestBed.createComponent(AdminEditSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
