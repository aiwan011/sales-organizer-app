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
    const rawData = await this.dataService.getCustomers();
    this.customers = rawData.sort((a: any, b: any) => (a.name || '').localeCompare(b.name || ''));
    this.cdr.detectChanges();
  }
}