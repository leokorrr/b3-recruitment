import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NgxSiemaModule } from 'ngx-siema';
import { GetMoreComponent } from './cards/get-more/get-more.component';
import { VideoOnDemandComponent } from './cards/video-on-demand/video-on-demand.component';
import { CreateOwnPackageComponent } from './cards/create-own-package/create-own-package.component';
import { NowInTvComponent } from './cards/now-in-tv/now-in-tv.component';
import { PackageComponent } from './cards/package/package.component';
import { SupportComponent } from './cards/support/support.component';
import { ApplicationComponent } from './cards/application/application.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    GetMoreComponent,
    VideoOnDemandComponent,
    CreateOwnPackageComponent,
    NowInTvComponent,
    PackageComponent,
    SupportComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    NgxSiemaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
