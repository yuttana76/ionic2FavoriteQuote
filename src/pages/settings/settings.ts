import { SettingsService } from './../../services/settings';
import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';

/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {
  constructor(private settingsService: SettingsService ){};

  onToggle(toggle: Toggle) {
   this.settingsService.setBackground(toggle.checked);
  }

 checkAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
