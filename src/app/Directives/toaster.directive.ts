import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[toaster]'
})
export class ToasterDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
