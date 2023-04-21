import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticleComponent } from './pages/article/article.component';
import { LastArticleComponent } from './component/last-article/last-article.component';
import { ResumeComponent } from './component/resume/resume.component';
import { OpinionsComponent } from './component/opinions/opinions.component';
import { LittleMoreComponent } from './component/little-more/little-more.component';
import { BackButtonComponent } from './component/back-button/back-button.component';
import { HttpClientModule } from '@angular/common/http';
import { TemperaturePipe } from 'src/mock/temperature.pipe';
import { OtherTravelsComponent } from './component/other-travels/other-travels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ArticleComponent,
    LastArticleComponent,
    ResumeComponent,
    OpinionsComponent,
    LittleMoreComponent,
    BackButtonComponent,
    TemperaturePipe,
    OtherTravelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
