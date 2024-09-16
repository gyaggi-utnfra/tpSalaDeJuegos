import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVictoriaComponent } from './dialog-victoria.component';

describe('DialogVictoriaComponent', () => {
  let component: DialogVictoriaComponent;
  let fixture: ComponentFixture<DialogVictoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogVictoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVictoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
