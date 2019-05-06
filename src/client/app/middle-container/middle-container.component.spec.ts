import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleContainerComponent } from './middle-container.component';

describe('MiddleContainerComponent', () => {
  let component: MiddleContainerComponent;
  let fixture: ComponentFixture<MiddleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
