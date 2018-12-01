import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeauxiliarComponent } from './homeauxiliar.component';

describe('HomeauxiliarComponent', () => {
  let component: HomeauxiliarComponent;
  let fixture: ComponentFixture<HomeauxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeauxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeauxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
