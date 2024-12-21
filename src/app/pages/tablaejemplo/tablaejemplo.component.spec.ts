import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaejemploComponent } from './tablaejemplo.component';

describe('TablaejemploComponent', () => {
  let component: TablaejemploComponent;
  let fixture: ComponentFixture<TablaejemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaejemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaejemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
