import { Component } from '@angular/core';
import { TransferenciaService } from '../transferencia.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent {
  transferencia = {
    contaOrigem: '',
    contaDestino: '',
    valor: 0,
    dataTransferencia: ''
  };
  mensagemErro: string | null = null;
  taxaTransferencia: number | null = null; 

  constructor(private transferenciaService: TransferenciaService) { }

  agendarTransferencia() {
    this.mensagemErro = null;
    this.taxaTransferencia = null; 

    this.transferenciaService.agendarTransferencia(this.transferencia).subscribe(
      response => {
        
        this.taxaTransferencia = response.taxa; 
        alert('Transferência agendada com sucesso!');
      },
      error => {
        this.mensagemErro = error;
      }
    );
  }
}
