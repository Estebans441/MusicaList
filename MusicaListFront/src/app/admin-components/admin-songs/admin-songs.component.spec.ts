import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSongsComponent} from './admin-songs.component';

describe('AdminSongsComponent', () => {
  let component: AdminSongsComponent;
  let fixture: ComponentFixture<AdminSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSongsComponent]
    });
    fixture = TestBed.createComponent(AdminSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
