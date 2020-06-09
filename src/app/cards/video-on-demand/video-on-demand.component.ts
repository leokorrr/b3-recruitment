import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';
import { NgxSiemaService } from 'ngx-siema';

@Component({
  selector: 'app-video-on-demand',
  templateUrl: './video-on-demand.component.html'
})
export class VideoOnDemandComponent implements OnInit {
  options: NgxSiemaOptions = {
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
