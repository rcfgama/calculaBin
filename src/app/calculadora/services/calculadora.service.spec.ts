import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 1 = 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 1, CalculadoraService.SOMA);
      expect(soma).toEqual(2);
    })
  );

  it('deve garantir que 1 - 1 = 0',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1, 1, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(0);
    })
  );

  it('deve garantir que 4 / 2 = 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(2);
    })
  );

  it('deve garantir que 3 * 2 = 6',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(3, 2, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(6);
    })
  );

  it('deve garantir que modulo de 4 % 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let invalida = service.calcular(4, 2, '%');
      expect(invalida).toEqual(0);
    })
  );
});
