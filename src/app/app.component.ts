import { Component, Renderer2, ElementRef } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {

  constructor(protected renderer: Renderer2, protected elRef: ElementRef) {
    super(renderer, elRef);
  }
  
}
