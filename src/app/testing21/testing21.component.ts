import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ToasterDirective } from '../Directives/toaster.directive';
import { Toast, ToasterService } from '../Services/toaster.service';

@Component({
  selector: 'app-testing21',
  templateUrl: './testing21.component.html',
  styleUrls: ['./testing21.component.scss']
})
export class Testing21Component implements OnInit, AfterViewInit {

  @ViewChild(ToasterDirective, { static: true }) toasterHost: ToasterDirective;

  toasts: Toast[] = [];

  users = [
    {
      name: 'Chris',
      age: 21,
      gender: 'Male'
    },
    {
      name: 'John',
      age: 26,
      gender: 'Male'
    },
    {
      name: 'Kate',
      age: 221,
      gender: 'Female'
    },
  ]

  constructor(private resolver: ComponentFactoryResolver, private toaster: ToasterService) { 
    toaster.toastsEmitter.subscribe((toast) => {
      this.toasts.push(toast)

      if (toast.component) {
        let componentFactory = this.resolver.resolveComponentFactory(toast.component);
        this.toasterHost.viewContainerRef.createComponent(componentFactory);
      }

    });
  }
  
  ngAfterViewInit(): void {
    console.log(this.toasterHost);
  }

  ngOnInit(): void {
  }

  createToast(): void {
    this.toaster.createToast();
  }

  createToastWithComponent(): void {
    this.toaster.createToastWithComponent();
  }



  addItem(item): void {
    console.log('Adding Item', item);
  }

  editItem(item): void {
    console.log('Editing Item', item);
  }

  deleteItem(item): void {
    console.log('Delete Item', item);
  }



  subMenuOne(): void {
    console.log('This is to prove sub menu option one works');
  }


  subsubMenuOne(): void {
    console.log('This is to prove that sub sub option one works');
  }

}
