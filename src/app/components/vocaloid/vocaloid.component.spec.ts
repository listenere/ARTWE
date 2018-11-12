import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocaloidComponent } from './vocaloid.component';

describe('VocaloidComponent', () => {
  let component: VocaloidComponent;
  let fixture: ComponentFixture<VocaloidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocaloidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocaloidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
