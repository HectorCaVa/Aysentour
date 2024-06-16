import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorySearchPage } from './category-search.page';

describe('CategorySearchPage', () => {
  let component: CategorySearchPage;
  let fixture: ComponentFixture<CategorySearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
