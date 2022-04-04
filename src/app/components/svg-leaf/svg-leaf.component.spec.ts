import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLeafComponent } from './svg-leaf.component';

describe('SvgLeafComponent', () => {
  let component: SvgLeafComponent;
  let fixture: ComponentFixture<SvgLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgLeafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
