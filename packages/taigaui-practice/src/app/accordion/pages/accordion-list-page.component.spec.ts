import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionListPageComponent } from './accordion-list-page.component';

describe('AccordionListPageComponent', () => {
  let component: AccordionListPageComponent;
  let fixture: ComponentFixture<AccordionListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
