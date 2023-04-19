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
    LittleMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
