import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';
import { NgxSiemaService } from 'ngx-siema';

@Component({
  selector: 'app-video-on-demand',
  templateUrl: './video-on-demand.component.html'
})
export class VideoOnDemandComponent implements OnInit {
  videoSliderOptions: NgxSiemaOptions = {
    selector: '.video-slider',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: true
  };


  constructor(private ngxSiemaService: NgxSiemaService) { }

  ngOnInit(): void {
  }

  prev() {
    this.ngxSiemaService.prev(1, '.video-slider')
      .subscribe((data: any) => console.log(data));
  }
 
  next() {
    this.ngxSiemaService.next(1, '.video-slider')
      .subscribe((data: any) => console.log(data));
  }


}
