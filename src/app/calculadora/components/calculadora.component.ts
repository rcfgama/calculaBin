import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';
import { Binary } from '@angular/compiler';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;
  
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1,numero);
      return
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
      return
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseInt(this.numero1, 2),
        parseInt(this.numero2, 2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

    calcular(): void {
      if(this.numero2 === null) {
        return;
      }

      this.resultado = this.calculadoraService.calcular(
        parseInt(this.numero1, 2),
        parseInt(this.numero2, 2),
        this.operacao);
    }
    
    get display(): string {
      if (this.resultado !== null) {
        return this.resultado.toString(2);
      }
      if (this.numero2 !== null) {
        return this.numero2;
      }
      return this.numero1;
    }
  }
