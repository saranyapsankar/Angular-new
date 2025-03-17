import { afterRender, Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true, 
  template: `<button class="btn"><ng-content></ng-content></button>`,
  styles: [`.btn { padding: 10px; background: blue; color: white; }`]
})
export class ButtonComponent {
    constructor() {
        afterRender(
            {read: () => console.log('Button rendered')},
        )
     }

}