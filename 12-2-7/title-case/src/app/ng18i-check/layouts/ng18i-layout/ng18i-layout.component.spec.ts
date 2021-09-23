import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng18iLayoutComponent } from './ng18i-layout.component';

describe('Ng18iLayoutComponent', () => {
  let component: Ng18iLayoutComponent;
  let fixture: ComponentFixture<Ng18iLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng18iLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng18iLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
