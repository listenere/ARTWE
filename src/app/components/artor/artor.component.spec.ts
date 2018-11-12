import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtorComponent } from './artor.component';

describe('ArtorComponent', () => {
  let component: ArtorComponent;
  let fixture: ComponentFixture<ArtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
