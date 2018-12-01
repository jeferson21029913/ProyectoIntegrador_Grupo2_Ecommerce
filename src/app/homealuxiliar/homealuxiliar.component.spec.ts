import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomealuxiliarComponent } from './homealuxiliar.component';

describe('HomealuxiliarComponent', () => {
  let component: HomealuxiliarComponent;
  let fixture: ComponentFixture<HomealuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomealuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomealuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
