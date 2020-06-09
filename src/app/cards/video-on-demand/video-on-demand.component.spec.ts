import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoOnDemandComponent } from './video-on-demand.component';

describe('VideoOnDemandComponent', () => {
  let component: VideoOnDemandComponent;
  let fixture: ComponentFixture<VideoOnDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoOnDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoOnDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
