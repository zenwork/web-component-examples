import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsAngularComponent } from './rps-angular.component';

describe('RpsAngularComponent', () => {
  let component: RpsAngularComponent;
  let fixture: ComponentFixture<RpsAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpsAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
