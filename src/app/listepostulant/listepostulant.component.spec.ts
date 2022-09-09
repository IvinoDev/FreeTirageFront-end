import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepostulantComponent } from './listepostulant.component';

describe('ListepostulantComponent', () => {
  let component: ListepostulantComponent;
  let fixture: ComponentFixture<ListepostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepostulantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListepostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
