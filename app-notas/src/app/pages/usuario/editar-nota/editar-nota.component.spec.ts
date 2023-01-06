import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNotaComponent } from './editar-nota.component';

describe('EditarNotaComponent', () => {
  let component: EditarNotaComponent;
  let fixture: ComponentFixture<EditarNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
