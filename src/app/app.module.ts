import { DashboardComponent } from './ui/dashboard.component';
import { NotFoundComponent } from './ui/not-found.component';
import { PaginationComponent } from './ui/pagination.component';
import { RouterModule, Routes } from '@angular/router';
import { FullPostComponent } from './post/full-post.component';
import { PostComponent } from './post/post.component';
import { MenuComponent } from './ui/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatSidenavModule, MatCardModule, MatButtonModule, MatChipsModule, MatPaginatorModule } from '@angular/material';

const ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'full-post', component: FullPostComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, MenuComponent, DashboardComponent, PostComponent, FullPostComponent, PaginationComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(
      ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    ), 
    BrowserAnimationsModule, MatSidenavModule, MatCardModule, MatButtonModule, MatChipsModule, MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
