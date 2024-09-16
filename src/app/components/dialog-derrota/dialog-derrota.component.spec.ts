import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDerrotaComponent } from './dialog-derrota.component';

describe('DialogDerrotaComponent', () => {
  let component: DialogDerrotaComponent;
  let fixture: ComponentFixture<DialogDerrotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDerrotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDerrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
