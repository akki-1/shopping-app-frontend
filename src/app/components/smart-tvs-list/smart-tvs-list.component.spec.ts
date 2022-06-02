import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTvsListComponent } from './smart-tvs-list.component';

describe('SmartTvsListComponent', () => {
  let component: SmartTvsListComponent;
  let fixture: ComponentFixture<SmartTvsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTvsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTvsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
