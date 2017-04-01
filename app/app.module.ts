import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppComponent2} from './app.componentMap';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        AppComponent2
    ],
    bootstrap: [AppComponent]
})

export class AppModule{ }