import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsListComponent } from './tvs-list.component';

describe('TvsListComponent', () => {
  let component: TvsListComponent;
  let fixture: ComponentFixture<TvsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
