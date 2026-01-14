import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularios2 } from './formularios2';

describe('Formularios2', () => {
  let component: Formularios2;
  let fixture: ComponentFixture<Formularios2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formularios2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formularios2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
