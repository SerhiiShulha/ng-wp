import { TagsService } from './services/tags.service';
import { CategoriesService } from './services/categories.service';
import { UserComponent } from './user/user.component';
import { PostsService } from './services/posts.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { EditorComponent } from './post/editor.component';
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
import { MatSidenavModule, MatCardModule, MatButtonModule, MatChipsModule, MatPaginatorModule, MatExpansionModule, MatListModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { QuillModule } from 'ngx-quill';

export const ROUTES: Routes = [
  // { path: 'home', component: DashboardComponent },
  { path: 'post/:postId', component: FullPostComponent },
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, MenuComponent, DashboardComponent, PostComponent, FullPostComponent, PaginationComponent, NotFoundComponent, EditorComponent, UserComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(
      ROUTES,
      { enableTracing: false } // <-- debugging purposes only
    ), HttpClientModule,
    BrowserAnimationsModule, MatSidenavModule, MatCardModule, MatButtonModule, MatChipsModule, MatPaginatorModule, MatExpansionModule, QuillModule, MatListModule, MatInputModule, MatSnackBarModule
  ],
  providers: [UserService, PostsService, CategoriesService, TagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
