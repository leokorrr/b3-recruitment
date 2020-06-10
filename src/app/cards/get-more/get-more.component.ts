import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';
import { NgxSiemaService } from 'ngx-siema';

@Component({
  selector: 'app-get-more',
  templateUrl: './get-more.component.html'
})
export class GetMoreComponent implements OnInit {
  getMoreSliderOptions: NgxSiemaOptions = {
    selector: '.get-more-carousel',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: false,
    threshold: 20,
    loop: true
  };

  constructor(private ngxSiemaService: NgxSiemaService) { }

  ngOnInit(): void {
    setInterval(() => this.ngxSiemaService.next(1, '.get-more-carousel'), 15000);
    
    let carouselBullets = document.getElementsByClassName('get-more__carousel-controller')

    for (let i = 0; i  < carouselBullets.length; i++) {
      carouselBullets[i].addEventListener("click", () => {
        for (let j = 0; j < carouselBullets.length; j++) {
          carouselBullets[j].classList.remove('get-more__carousel-controller--active')
        }

        carouselBullets[i].classList.add("get-more__carousel-controller--active")
      })
    }
  }

  goTo(i) {
    this.ngxSiemaService.goTo(i, '.get-more-carousel')
  }

}
