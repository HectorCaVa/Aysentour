import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralSearchPage } from './general-search.page';

describe('GeneralSearchPage', () => {
  let component: GeneralSearchPage;
  let fixture: ComponentFixture<GeneralSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
