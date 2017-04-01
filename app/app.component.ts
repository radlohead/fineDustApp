import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <map></map>`
})
export class AppComponent {
    title = '전국 미세먼지 농도';
}