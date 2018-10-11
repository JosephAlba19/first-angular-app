import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstcomponentComponent } from './my-firstcomponent.component';

describe('MyFirstcomponentComponent', () => {
  let component: MyFirstcomponentComponent;
  let fixture: ComponentFixture<MyFirstcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
