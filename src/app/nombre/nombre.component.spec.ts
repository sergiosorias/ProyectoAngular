import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NOMBREComponent } from './nombre.component';

describe('NOMBREComponent', () => {
  let component: NOMBREComponent;
  let fixture: ComponentFixture<NOMBREComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NOMBREComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NOMBREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
