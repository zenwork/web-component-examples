import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {RpsAngularComponent} from './rps-angular/rps-angular.component';

@NgModule({
    declarations: [RpsAngularComponent],
    imports: [BrowserModule],
    bootstrap: [RpsAngularComponent],
    entryComponents:[RpsAngularComponent]
})
export class AppModule {
    
}
