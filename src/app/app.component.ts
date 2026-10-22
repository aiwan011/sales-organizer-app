import { Storage } from '@ionic/storage-angular';
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AboutComponent } from './about/about.component';
import { addIcons } from 'ionicons';
import { 
  list, listOutline, listSharp, 
  people, peopleOutline, peopleSharp, 
  person, personOutline, personSharp, 
  trash, trashOutline, trashSharp, 
  create, createOutline, createSharp, 
  arrowForward, arrowForwardOutline, arrowForwardSharp, 
  add, addOutline, addSharp,
  informationCircle, informationCircleOutline, informationCircleSharp,
  settings, settingsOutline, settingsSharp
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'All Tasks', url: '/list', icon: 'list' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Team Members', url: '/team', icon: 'person' },
    { title: 'Settings', url: '/settings', icon: 'settings' } // Adds Settings page
  ];

  constructor(private storage: Storage, private popoverCtrl: PopoverController) {
    this.initStorage();

    addIcons({ 
      'list': list, 'list-outline': listOutline, 'list-sharp': listSharp,
      'people': people, 'people-outline': peopleOutline, 'people-sharp': peopleSharp,
      'person': person, 'person-outline': personOutline, 'person-sharp': personSharp,
      'trash': trash, 'trash-outline': trashOutline, 'trash-sharp': trashSharp,
      'create': create, 'create-outline': createOutline, 'create-sharp': createSharp,
      'arrow-forward': arrowForward, 'arrow-forward-outline': arrowForwardOutline, 'arrow-forward-sharp': arrowForwardSharp,
      'add': add, 'add-outline': addOutline, 'add-sharp': addSharp,
      'information-circle': informationCircle, 'information-circle-outline': informationCircleOutline, 'information-circle-sharp': informationCircleSharp,
      'settings': settings, 'settings-outline': settingsOutline, 'settings-sharp': settingsSharp
    });
  }

async initStorage() {
    await this.storage.create();
    const savedTheme = await this.storage.get('theme');
    if (savedTheme) {
      document.body.setAttribute('color-theme', savedTheme);
    } else {
      document.body.setAttribute('color-theme', 'blue');
    }
  }

  async about(event: any) {
    const popover = await this.popoverCtrl.create({
      component: AboutComponent,
      event: event,
      translucent: true
    });
    await popover.present();
  }
}