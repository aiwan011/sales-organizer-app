import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trash, create, arrowForward, add } from 'ionicons/icons';
import { DataService } from '../../services/data.service';
<<<<<<< HEAD
=======
import * as _ from 'lodash';
>>>>>>> 4f63c2e4a20a3a814b36a9da2640f5e89833eb76

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false,
})
export class ListPage implements OnInit {
  tasks: any[] = [];

  constructor(
    public alertCtrl: AlertController,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {
    addIcons({ trash, create, arrowForward, add });
  }

  async ngOnInit() {
    await this.loadTasks();
  }

  async loadTasks() {
    const rawData = await this.dataService.getTasks();
<<<<<<< HEAD
    this.tasks = rawData.sort((a: any, b: any) => (a.title || '').localeCompare(b.title || ''));
    this.cdr.detectChanges();
=======
    this.tasks = _.sortBy(rawData, ['title']);
    this.cdr.detectChanges(); // Forces Angular 22 to update the UI immediately!
>>>>>>> 4f63c2e4a20a3a814b36a9da2640f5e89833eb76
  }

  async addTask() {
    const alert = await this.alertCtrl.create({
      header: 'Add Task',
      inputs: [
        { name: 'title', type: 'text', placeholder: 'Task Title' },
        { name: 'text', type: 'text', placeholder: 'What is the task' },
        { name: 'teammember', type: 'text', placeholder: 'Who is responsible' },
        { name: 'customer', type: 'text', placeholder: 'Who is the customer' }
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Add',
          handler: async (data) => {
            await this.dataService.addTaskToDb({
              title: data.title,
              text: data.text,
              teammember: data.teammember,
              customer: data.customer
            });
            await this.loadTasks();
          }
        }
      ]
    });
    await alert.present();
  }

<<<<<<< HEAD
  async deleteTask(index: any) {
=======
async deleteTask(index: any) {
>>>>>>> 4f63c2e4a20a3a814b36a9da2640f5e89833eb76
    const task = this.tasks[index];
    if (task && task.id) {
      await this.dataService.deleteTaskFromDb(task.id);
    }
    await this.loadTasks();
  }

  async updateTask(index: any) {
    const task = this.tasks[index];
    const alert = await this.alertCtrl.create({
      header: 'Update Task',
      inputs: [
        { name: 'editTask', type: 'text', value: task.title, placeholder: 'Task Title' }
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Update',
          handler: async (data) => {
            if (task && task.id) {
              await this.dataService.updateTaskInDb(task.id, { title: data.editTask });
            }
            await this.loadTasks();
          }
        }
      ]
    });
    await alert.present();
<<<<<<< HEAD
  }
}
=======
  }
>>>>>>> 4f63c2e4a20a3a814b36a9da2640f5e89833eb76
