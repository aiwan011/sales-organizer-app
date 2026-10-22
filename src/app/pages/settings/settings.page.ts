import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { addIcons } from 'ionicons';
import { settings } from 'ionicons/icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {
  selectedTheme: string = 'blue';

  constructor(private storage: Storage) {
    addIcons({ settings });
  }

  async ngOnInit() {
    const savedTheme = await this.storage.get('theme');
    if (savedTheme) {
      this.selectedTheme = savedTheme;
      document.body.setAttribute('color-theme', savedTheme);
    } else {
      document.body.setAttribute('color-theme', 'blue');
    }
  }

  async updateSettings() {
    // Save to Local Storage
    await this.storage.set('theme', this.selectedTheme);

    // Apply attribute directly to the body tag
    document.body.setAttribute('color-theme', this.selectedTheme);
    console.log('Theme changed to:', this.selectedTheme);
  }
}