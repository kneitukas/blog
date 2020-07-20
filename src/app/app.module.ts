import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeModule } from './home/home.module';
import { StoreModule } from '@ngrx/store';
import { PostsReducer } from './store/reducers/posts.reducer';
import { MaterialModule } from './shared/material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [

    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule, 
    HomeModule,
    StoreModule.forRoot({ posts: PostsReducer }, {}),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
