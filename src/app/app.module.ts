import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { VinjoinComponent } from './component/vinjoin/vinjoin.component';
import { VinscanComponent } from './component/vinscan/vinscan.component';
import { VinsearchComponent } from './component/vinsearch/vinsearch.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ClipboardModule} from "ngx-clipboard";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PapaParseModule } from 'ngx-papaparse';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    VinjoinComponent,
    VinscanComponent,
    VinsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    ClipboardModule,
    MatSlideToggleModule,
    PapaParseModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
