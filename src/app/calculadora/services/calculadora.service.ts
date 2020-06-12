/**
 * Projeto para fazer uma calculadora binária
 * @author Ronaldo Gama
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';
import { Binary } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  //Definição das constantes
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  static readonly MODULO: string = '%';

  constructor() { }

  /**
   * Declaração de parâmetros:
   * Suporta as operações de soma, subtração, divisão, multiplicação e módulo.
   * @param num1 número binário
   * @param num2 número binário
   * @param operacao string Define a operação a ser usada
   * @return númwro binário Retorna o resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; 

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      case CalculadoraService.MODULO:
        resultado = num1 % num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
