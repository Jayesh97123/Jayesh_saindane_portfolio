import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualPortfolioComponent } from './actual-portfolio.component';

describe('ActualPortfolioComponent', () => {
  let component: ActualPortfolioComponent;
  let fixture: ComponentFixture<ActualPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualPortfolioComponent]
    });
    fixture = TestBed.createComponent(ActualPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
