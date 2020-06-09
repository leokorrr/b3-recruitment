import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';
import { NgxSiemaService } from 'ngx-siema';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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

  options2: NgxSiemaOptions = {
    selector: '.siema2',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: false
  };

  constructor(private ngxSiemaService: NgxSiemaService) {
  }

  ngOnInit(): void {
  }

  prev() {
    this.ngxSiemaService.prev(1, '.siema')
      .subscribe((data: any) => console.log(data));
  }
 
  next() {
    this.ngxSiemaService.next(1, '.siema')
      .subscribe((data: any) => console.log(data));
  }

  prev2() {
    this.ngxSiemaService.prev(1, '.siema2')
      .subscribe((data: any) => console.log(data));
  }
 
  next2() {
    this.ngxSiemaService.next(1, '.siema2')
      .subscribe((data: any) => console.log(data));
  }

}
