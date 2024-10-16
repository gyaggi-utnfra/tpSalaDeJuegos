import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreJugadorDialogComponent } from './nombre-jugador-dialog.component';

describe('NombreJugadorDialogComponent', () => {
  let component: NombreJugadorDialogComponent;
  let fixture: ComponentFixture<NombreJugadorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombreJugadorDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreJugadorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
