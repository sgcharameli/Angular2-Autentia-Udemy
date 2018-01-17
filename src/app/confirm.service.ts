import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ExampleDataBindingComponent } from './data-binding/example-data-binding/example-data-binding.component';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmService implements CanDeactivate<ExampleDataBindingComponent> {

  constructor() { }

  canDeactivate(component: ExampleDataBindingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
      return confirm('¿Estás seguro?');
  }

}
