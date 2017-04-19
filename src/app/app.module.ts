import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialCustomViewModuleModule} from './material-custom-view-module/material-custom-view-module.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialCustomViewModuleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
