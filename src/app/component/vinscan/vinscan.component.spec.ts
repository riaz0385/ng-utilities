import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinscanComponent } from './vinscan.component';

describe('VinscanComponent', () => {
  let component: VinscanComponent;
  let fixture: ComponentFixture<VinscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
