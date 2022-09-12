import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReineComponent } from './reine.component';

describe('ReineComponent', () => {
  let component: ReineComponent;
  let fixture: ComponentFixture<ReineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
