
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { CreateComponent } from './book/create/create.component';
import { EditComponent } from './book/edit/edit.component';
import { DeleteComponent } from './book/delete/delete.component';
import { DetailComponent } from './book/detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent
  ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
