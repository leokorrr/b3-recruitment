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
    duration: 500,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: false,
    threshold: 20,
    loop: true
  };

  constructor(private ngxSiemaService: NgxSiemaService) { }

  ngOnInit(): void {
    let carouselBullets = document.getElementsByClassName('get-more__carousel-controller')
    let counter = 1;
    carouselBullets[0].classList.add("get-more__carousel-controller--active");

    setInterval(() => {
   
        if (counter === 0) {
          carouselBullets[carouselBullets.length - 1].classList.remove("get-more__carousel-controller--active");
          carouselBullets[counter].classList.add("get-more__carousel-controller--active");
          
        }
  
        if (counter < carouselBullets.length - 1 && counter !== 0) {
          carouselBullets[counter - 1].classList.remove("get-more__carousel-controller--active");
          carouselBullets[counter].classList.add("get-more__carousel-controller--active");
          
        }
  
        if (counter === carouselBullets.length - 1) {
          carouselBullets[counter - 1].classList.remove("get-more__carousel-controller--active");
          carouselBullets[carouselBullets.length - 1].classList.add("get-more__carousel-controller--active");
          counter = -1; 
        }

        this.ngxSiemaService.next(1, '.get-more-carousel');

        ++counter;
    }, 10000);

    for (let i = 0; i  < carouselBullets.length; i++) {
      carouselBullets[i].addEventListener("click", () => {
        for (let j = 0; j < carouselBullets.length; j++) {
          carouselBullets[j].classList.remove('get-more__carousel-controller--active')
        }

        carouselBullets[i].classList.add("get-more__carousel-controller--active")
        counter = i;
      })
    }
  }

  goTo(i) {
    this.ngxSiemaService.goTo(i, '.get-more-carousel')
  }

}
