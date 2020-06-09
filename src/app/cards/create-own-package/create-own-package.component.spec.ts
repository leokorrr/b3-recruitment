import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnPackageComponent } from './create-own-package.component';

describe('CreateOwnPackageComponent', () => {
  let component: CreateOwnPackageComponent;
  let fixture: ComponentFixture<CreateOwnPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOwnPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOwnPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
