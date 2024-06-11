import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesPackPage } from './detalles-pack.page';

describe('DetallesPackPage', () => {
  let component: DetallesPackPage;
  let fixture: ComponentFixture<DetallesPackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
