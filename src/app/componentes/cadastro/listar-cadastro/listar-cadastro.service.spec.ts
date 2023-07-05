import { TestBed } from '@angular/core/testing';

import { ListarCadastroService } from './listar-cadastro.service';

describe('ListarCadastroService', () => {
  let service: ListarCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
