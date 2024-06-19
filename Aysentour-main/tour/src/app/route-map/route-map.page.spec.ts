import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteMapPage } from './route-map.page';

describe('RouteMapPage', () => {
  let component: RouteMapPage;
  let fixture: ComponentFixture<RouteMapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
