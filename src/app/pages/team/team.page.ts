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
<<<<<<< HEAD
    // 1. Fetch team members and tasks from Supabase
    const rawTeam = await this.dataService.getTeamMembers();
    const allTasks = await this.dataService.getTasks();

    // 2. Count the tasks for each member and sort alphabetically
    this.teamMembers = rawTeam.map((member: any) => {
      const taskCount = allTasks.filter((task: any) => task.teammember === member.name).length;
      return { ...member, taskCount: taskCount };
    }).sort((a: any, b: any) => (a.name || '').localeCompare(b.name || ''));

    this.cdr.detectChanges(); // Force screen refresh
=======
    const rawData = await this.dataService.getTeamMembers();
    this.teamMembers = rawData.sort((a: any, b: any) => (a.name || '').localeCompare(b.name || ''));
    this.cdr.detectChanges();
>>>>>>> 4f63c2e4a20a3a814b36a9da2640f5e89833eb76
  }
}