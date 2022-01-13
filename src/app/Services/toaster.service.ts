import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToasterComponent } from '../toaster/toaster.component';

export class Toast {
  content: string;
  component?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  toasts: Toast[] = [];
  toastsEmitter: Subject<Toast> = new Subject();

  constructor() { }

  public createToast(): void {
    //this.toasts.push('Test' + this.toasts.length)
    const newToast = { content: 'Test ' + this.toasts.length};
    this.toasts.push(newToast);
    this.toastsEmitter.next(newToast);
  }

  public createToastWithComponent(): void {
    const newToast = { content: null, component: ToasterComponent };
    this.toasts.push(newToast);
    this.toastsEmitter.next(newToast);
  }
}
