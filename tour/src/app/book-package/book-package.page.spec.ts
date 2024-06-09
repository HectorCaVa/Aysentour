import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookPackagePage } from './book-package.page';

describe('BookPackagePage', () => {
  let component: BookPackagePage;
  let fixture: ComponentFixture<BookPackagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
