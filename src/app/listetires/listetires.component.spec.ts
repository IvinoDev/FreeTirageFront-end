import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetiresComponent } from './listetires.component';

describe('ListetiresComponent', () => {
  let component: ListetiresComponent;
  let fixture: ComponentFixture<ListetiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListetiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListetiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
