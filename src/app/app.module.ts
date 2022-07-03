import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Modules
 */
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListPropertyComponent } from './list-property/list-property.component';
import { AddPropertyComponent } from './add-property/add-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPropertyComponent,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
