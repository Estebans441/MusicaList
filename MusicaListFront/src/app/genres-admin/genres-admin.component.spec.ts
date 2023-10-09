import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresAdminComponent } from './genres-admin.component';

describe('GenresAdminComponent', () => {
  let component: GenresAdminComponent;
  let fixture: ComponentFixture<GenresAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenresAdminComponent]
    });
    fixture = TestBed.createComponent(GenresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
