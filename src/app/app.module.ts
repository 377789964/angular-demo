import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { ReactiveRegistComponent } from './reactive-regist/reactive-regist.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactFormComponent,
    ReactiveRegistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
