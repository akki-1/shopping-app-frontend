import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalTvsListComponent } from './normal-tvs-list.component';

describe('NormalTvsListComponent', () => {
  let component: NormalTvsListComponent;
  let fixture: ComponentFixture<NormalTvsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalTvsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalTvsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
