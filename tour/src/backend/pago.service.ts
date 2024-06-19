import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private http: HttpClient) {}

  async CrearToken(data: any): Promise<any> {
    try {
      const headers = new HttpHeaders({
        'Authorization': 'Token',
        'Tbk-Api-Key-Id': '597055555532',
        'Tbk-Api-Key-Secret': '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
        'Content-Type': 'application/json'
      });

      const response = await lastValueFrom(this.http.post<any>('https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions', data, { headers }));
      return response;
    } catch (error) {
      console.error('Error creating payment token', error);
      throw error;
    }
  }
}

