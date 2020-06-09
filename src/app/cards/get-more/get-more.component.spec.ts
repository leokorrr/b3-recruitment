import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMoreComponent } from './get-more.component';

describe('GetMoreComponent', () => {
  let component: GetMoreComponent;
  let fixture: ComponentFixture<GetMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
