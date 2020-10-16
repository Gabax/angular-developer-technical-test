import { Component } from '@angular/core';
import { ThemingService } from './services/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public themeIcon: string;

  constructor(private themingService: ThemingService) {}

  ngOnInit() {
    this.themeIcon = this.themingService.themeIcon$.value;
  }

  toggleTheme() {
    this.themingService.toggle();
    this.themeIcon = this.themingService.themeIcon$.value;
  }
}
