import { TestBed, inject } from '@angular/core/testing';

import { IngresarEntradasService } from './ingresar-entradas.service';

describe('IngresarEntradasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngresarEntradasService]
    });
  });

  it('should be created', inject([IngresarEntradasService], (service: IngresarEntradasService) => {
    expect(service).toBeTruthy();
  }));
});
