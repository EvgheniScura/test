import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextbottomComponent } from './contextbottom.component';

describe('ContextbottomComponent', () => {
  let component: ContextbottomComponent;
  let fixture: ComponentFixture<ContextbottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextbottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
