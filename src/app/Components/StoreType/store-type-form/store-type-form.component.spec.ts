import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTypeFormComponent } from './store-type-form.component';

describe('StoreTypeFormComponent', () => {
  let component: StoreTypeFormComponent;
  let fixture: ComponentFixture<StoreTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreTypeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
