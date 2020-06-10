import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';
import { NgxSiemaService } from 'ngx-siema';

@Component({
  selector: 'app-now-in-tv',
  templateUrl: './now-in-tv.component.html'
})
export class NowInTvComponent implements OnInit {
  filmSliderOptions: NgxSiemaOptions = {
    selector: '.film-slider',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: false,
    threshold: 20,
    loop: true
  };

  constructor(private ngxSiemaService: NgxSiemaService) { }

  ngOnInit(): void { }

  prev2() {
    this.ngxSiemaService.prev(1, '.film-slider')
      .subscribe((data: any) => console.log(data));
  }
 
  next2() {
    this.ngxSiemaService.next(1, '.film-slider')
      .subscribe((data: any) => console.log(data));
  }

}
