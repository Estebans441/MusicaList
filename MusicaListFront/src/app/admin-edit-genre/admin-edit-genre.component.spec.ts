import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditGenreComponent } from './admin-edit-genre.component';

describe('AdminEditGenreComponent', () => {
  let component: AdminEditGenreComponent;
  let fixture: ComponentFixture<AdminEditGenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditGenreComponent]
    });
    fixture = TestBed.createComponent(AdminEditGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
