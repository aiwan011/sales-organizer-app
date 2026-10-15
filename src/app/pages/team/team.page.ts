import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
  standalone: false,
})
export class TeamPage implements OnInit {
  teamMembers: any[] = [];

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    const rawData = await this.dataService.getTeamMembers();
    this.teamMembers = rawData.sort((a: any, b: any) => (a.name || '').localeCompare(b.name || ''));
    this.cdr.detectChanges();
  }
}