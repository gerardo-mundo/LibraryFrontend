import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'shared-theming-button',
  templateUrl: './theming-button.component.html',
  styles: [],
})
export class ThemingButtonComponent implements OnInit {
  public checked!: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
  this.checked = this.themeService.themeSelection;
  console.log(`Al iniciar: ${this.checked}`);
  }

  changeTheme(): void {
    console.log('changeTheme', this.checked);
    this.themeService.switchTheme(this.checked);
  }
}
