import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStatusPagesComponent } from './ngx-status-pages.component';

describe('NgxStatusPagesComponent', () => {
  let component: NgxStatusPagesComponent;
  let fixture: ComponentFixture<NgxStatusPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStatusPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxStatusPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
