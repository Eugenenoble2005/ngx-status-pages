import { TestBed } from '@angular/core/testing';

import { NgxStatusPagesService } from './ngx-status-pages.service';

describe('NgxStatusPagesService', () => {
  let service: NgxStatusPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStatusPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
