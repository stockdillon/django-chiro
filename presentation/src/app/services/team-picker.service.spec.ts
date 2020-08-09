import { TestBed } from '@angular/core/testing';

import { TeamPickerService } from './team-picker.service';

describe('TeamPickerService', () => {
  let service: TeamPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
