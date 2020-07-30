import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementListComponent } from './element-list/element-list.component';
import { FilterIdPipe } from './pipes/filter-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElementListComponent,
    FilterIdPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
