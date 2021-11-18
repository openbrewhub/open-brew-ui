import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WortComponent } from './wort.component';

describe('WortComponent', () => {
  let component: WortComponent;
  let fixture: ComponentFixture<WortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
