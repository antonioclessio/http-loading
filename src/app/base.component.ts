import { Renderer2, ElementRef } from '@angular/core';
import { AppService } from './app.service';

export abstract class BaseComponent {

  protected loadingData: boolean = false;

  constructor(protected renderer: Renderer2, protected elRef: ElementRef) {
    AppService.Loading.subscribe((response: boolean) => this.toggleLoading());
  }

  toggleLoading(): void {
    let selector: string = '.loading';
    let element: any = this.elRef.nativeElement.querySelector(selector);
    if (!element) {
      element = this.elRef.nativeElement.ownerDocument.querySelector(selector);

      if (!element) {
        return;
      }
    }
    
    if (element.classList.contains('d-none')) {
      this.renderer.removeClass(element, 'd-none');
    } else {
      this.renderer.addClass(element, 'd-none');
    }
  }
}
