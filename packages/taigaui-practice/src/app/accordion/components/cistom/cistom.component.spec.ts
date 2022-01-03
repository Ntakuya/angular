import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CistomComponent } from './cistom.component';

describe('CistomComponent', () => {
  let component: CistomComponent;
  let fixture: ComponentFixture<CistomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CistomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CistomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
