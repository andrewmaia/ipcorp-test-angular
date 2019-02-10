import { TestBed } from '@angular/core/testing';

import { LogSistemaService } from './log-sistema.service';

describe('LogSistemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogSistemaService = TestBed.get(LogSistemaService);
    expect(service).toBeTruthy();
  });
});
