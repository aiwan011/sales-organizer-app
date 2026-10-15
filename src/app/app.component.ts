import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { 
  list, listOutline, listSharp, 
  people, peopleOutline, peopleSharp, 
  person, personOutline, personSharp, 
  trash, trashOutline, trashSharp, 
  create, createOutline, createSharp, 
  arrowForward, arrowForwardOutline, arrowForwardSharp, 
  add, addOutline, addSharp 
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
    { title: 'Team Members', url: '/team', icon: 'person' }
  ];

  constructor() {
    // This perfectly maps every variant so Ionic never crashes trying to find them
    addIcons({ 
      'list': list, 'list-outline': listOutline, 'list-sharp': listSharp,
      'people': people, 'people-outline': peopleOutline, 'people-sharp': peopleSharp,
      'person': person, 'person-outline': personOutline, 'person-sharp': personSharp,
      'trash': trash, 'trash-outline': trashOutline, 'trash-sharp': trashSharp,
      'create': create, 'create-outline': createOutline, 'create-sharp': createSharp,
      'arrow-forward': arrowForward, 'arrow-forward-outline': arrowForwardOutline, 'arrow-forward-sharp': arrowForwardSharp,
      'add': add, 'add-outline': addOutline, 'add-sharp': addSharp 
    });
  }
}