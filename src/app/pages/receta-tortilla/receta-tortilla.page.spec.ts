import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaTortillaPage } from './receta-tortilla.page';

describe('RecetaTortillaPage', () => {
  let component: RecetaTortillaPage;
  let fixture: ComponentFixture<RecetaTortillaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetaTortillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
