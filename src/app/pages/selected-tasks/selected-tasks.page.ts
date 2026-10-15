import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-selected-tasks',
  templateUrl: './selected-tasks.page.html',
  styleUrls: ['./selected-tasks.page.scss'],
  standalone: false,
})
export class SelectedTasksPage implements OnInit {
  tasks: any[] = [];
  category: string = '';
  criteria: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    public alertCtrl: AlertController,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category') || '';
    this.criteria = this.activatedRoute.snapshot.paramMap.get('criteria') || '';
    await this.loadFilteredTasks();
  }

  async loadFilteredTasks() {
    const allTasks = await this.dataService.getTasks();
    this.tasks = allTasks
      .filter((task: any) => task[this.category] === this.criteria)
      .sort((a: any, b: any) => (a.title || '').localeCompare(b.title || ''));
    this.cdr.detectChanges();
  }

  async addTask() {
    const alert = await this.alertCtrl.create({
      header: 'Add Task',
      inputs: [
        { name: 'title', type: 'text', placeholder: 'Task Title' },
        { name: 'text', type: 'text', placeholder: 'What is the task' },
        { 
          name: 'teammember', 
          type: 'text', 
          placeholder: 'Who is responsible',
          value: this.category === 'teammember' ? this.criteria : ''
        },
        { 
          name: 'customer', 
          type: 'text', 
          placeholder: 'Who is the customer',
          value: this.category === 'customer' ? this.criteria : ''
        }
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
            await this.loadFilteredTasks();
          }
        }
      ]
    });
    await alert.present();
  }
}