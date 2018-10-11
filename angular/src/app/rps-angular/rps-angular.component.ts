import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {logic, styles, template} from './rps';

@Component({
    selector: 'rps-angular',
    template: template,
    styles: [styles],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class RpsAngularComponent implements OnInit {

    private game:any;

    constructor() {
        this.game = logic.createGame();
    }

    ngOnInit() {

    }

}


