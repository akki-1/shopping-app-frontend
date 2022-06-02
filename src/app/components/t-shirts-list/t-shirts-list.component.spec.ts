import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtsListComponent } from './t-shirts-list.component';

describe('TShirtsListComponent', () => {
  let component: TShirtsListComponent;
  let fixture: ComponentFixture<TShirtsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TShirtsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
