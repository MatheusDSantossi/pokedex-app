import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ThemeService } from "../core/services/theme.service";

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [IonicModule],
  template: `
  <ion-icon
    slot="end"
    size="large"
    [name]="theme.isDark ? 'sunny' : 'moon'"
    (click)="theme.toggle()"
    ></ion-icon>
  `
})

export class ThemeToggleComponent {
  constructor(public theme: ThemeService) {}
}
