import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: false,
})
export class CustomersPage implements OnInit {
  customers: any[] = [];

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
<<<<<<< HEAD
    // Fetch both customers and tasks from Supabase
    const rawCustomers = await this.dataService.getCustomers();
    const allTasks = await this.dataService.getTasks();

    // Calculate the task count for each customer and sort alphabetically
    this.customers = rawCustomers.map((customer: any) => {
      const taskCount = allTasks.filter((task: any) => task.customer === customer.name).length;
      return { ...customer, taskCount: taskCount };
    }).sort((a: any, b: any) => (a.name || '').localeCompare(b.name || ''));

    this.cdr.detectChanges(); // Force screen refresh
=======
    const rawData = await this.dataService.getCustomers();
    this.customers = rawData.sort((a: any, b: any) => (a.name || '').localeCompare(b.name || ''));
    this.cdr.detectChanges();
>>>>>>> 4f63c2e4a20a3a814b36a9da2640f5e89833eb76
  }
}