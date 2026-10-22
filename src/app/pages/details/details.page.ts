import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false,
})
export class DetailsPage implements OnInit {
  @Input() taskData: any;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController 
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async deleteTask() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this task?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          handler: async () => {
            // 1. Delete from Supabase
            await this.dataService.deleteTaskFromDb(this.taskData.id);
            
            // 2. Show Toast Notification
            const toast = await this.toastCtrl.create({
              message: 'Task successfully deleted!',
              duration: 2000,
              position: 'top',
              color: 'success',
              icon: 'checkmark-circle'
            });
            await toast.present();

            // 3. Close the Modal
            this.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }
}