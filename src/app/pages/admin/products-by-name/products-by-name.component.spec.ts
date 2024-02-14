import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByNameComponent } from './products-by-name.component';

describe('ProductsByNameComponent', () => {
  let component: ProductsByNameComponent;
  let fixture: ComponentFixture<ProductsByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsByNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
