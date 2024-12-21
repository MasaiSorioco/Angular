import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablavistaComponent } from './tablavista.component';

describe('TablavistaComponent', () => {
  let component: TablavistaComponent;
  let fixture: ComponentFixture<TablavistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablavistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablavistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
