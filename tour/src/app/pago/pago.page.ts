import { Component } from '@angular/core';
import { PayService } from 'src/backend/pago.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage {
  buy_order: string;
  session_id: string;
  amount: number;
  return_url: string; // Declarar la propiedad return_url

  constructor(private payService: PayService) {
    this.buy_order = 'ordenCompra12345678';
    this.session_id = 'sesion1234557545';
    this.amount = 10000;
    this.return_url = 'http://www.comercio.cl/webpay/retorno';
  }

  async CrearToken() {
    const data = {
      buy_order: this.buy_order,
      session_id: this.session_id,
      amount: this.amount,
      return_url: this.return_url
    };
    
    try {
      const response = await this.payService.CrearToken(data);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error creating token:', error);
    }
  }
}
