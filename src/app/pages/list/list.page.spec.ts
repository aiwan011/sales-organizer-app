declare const describe: any;
declare const it: any;
declare const expect: any;
declare const beforeEach: any;

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPage } from './list.page';
import { AlertController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ListPage', () => {
  let component: ListPage;
  let fixture: ComponentFixture<ListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPage],
      providers: [
        { provide: DataService, useValue: {} },
        { provide: AlertController, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});