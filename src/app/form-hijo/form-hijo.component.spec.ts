import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHijoComponent } from './form-hijo.component';

describe('FormHijoComponent', () => {
  let component: FormHijoComponent;
  let fixture: ComponentFixture<FormHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
