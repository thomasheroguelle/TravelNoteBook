import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticleComponent } from './pages/article/article.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {path : "", component : HomePageComponent},
  {path : "article/:id", component : ArticleComponent},
  {path : '**', pathMatch: 'full', component : NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
