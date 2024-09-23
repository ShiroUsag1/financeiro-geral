import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaFinanceiroGeralComponent } from './aba-financeiro-geral.component';

describe('AbaFinanceiroGeralComponent', () => {
  let component: AbaFinanceiroGeralComponent;
  let fixture: ComponentFixture<AbaFinanceiroGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaFinanceiroGeralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbaFinanceiroGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
