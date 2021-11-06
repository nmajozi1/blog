import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaCardComponent } from './lambda-card.component';

describe('LambdaCardComponent', () => {
  let component: LambdaCardComponent;
  let fixture: ComponentFixture<LambdaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LambdaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LambdaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
