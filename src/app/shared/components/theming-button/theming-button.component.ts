import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'shared-theming-button',
  templateUrl: './theming-button.component.html',
  styles: [],
})
export class ThemingButtonComponent {
  public checked = this.themeService.themeSelection;

  constructor(private themeService: ThemeService) {}

  changeTheme(): void {
    this.themeService.switchTheme(this.checked);
  }
}
