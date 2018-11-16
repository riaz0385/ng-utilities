import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinjoinComponent } from './vinjoin.component';

describe('VinjoinComponent', () => {
  let component: VinjoinComponent;
  let fixture: ComponentFixture<VinjoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinjoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
