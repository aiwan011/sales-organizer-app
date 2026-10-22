import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getTasks() {
    const { data, error } = await this.supabase.from('tasks').select('*');
    console.log('Supabase Tasks Response:', { data, error });
    if (error) console.error('Supabase Error:', error);
    return data || [];
  }

  async addTaskToDb(task: { title: string; text?: string; customer?: string; teammember?: string }) {
    const { data, error } = await this.supabase.from('tasks').insert([task]).select();
    if (error) console.error('Supabase Insert Error:', error);
    return data;
  }

  async deleteTaskFromDb(id: number) {
    const { error } = await this.supabase.from('tasks').delete().eq('id', id);
    if (error) console.error('Supabase Delete Error:', error);
  }

  async updateTaskInDb(id: number, updatedFields: any) {
    const { error } = await this.supabase.from('tasks').update(updatedFields).eq('id', id);
    if (error) console.error('Supabase Update Error:', error);
  }

  async getCustomers() {
    const { data, error } = await this.supabase.from('customers').select('*');
    console.log('Supabase Customers Response:', { data, error });
    if (error) console.error('Supabase Error:', error);
    return data || [];
  }

  async getTeamMembers() {
    const { data, error } = await this.supabase.from('team_members').select('*');
    console.log('Supabase Team Response:', { data, error });
    if (error) console.error('Supabase Error:', error);
    return data || [];
  }
}