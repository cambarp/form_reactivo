import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPadreComponent } from './form-padre.component';

describe('FormPadreComponent', () => {
  let component: FormPadreComponent;
  let fixture: ComponentFixture<FormPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
