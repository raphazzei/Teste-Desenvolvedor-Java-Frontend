import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private apiUrl = 'http://localhost:8080/api/transferencias'; 

  constructor(private http: HttpClient) {}


  agendarTransferencia(transferencia: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, transferencia).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  
  listarTransferencias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => this.handleError(error))
    );
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido';
  
    if (error.status === 400 && error.error && error.error.message) {
      errorMessage = error.error.message; 
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro de rede: ${error.error.message}`;
    } else {
      errorMessage = `Erro do servidor: ${error.status}, ${error.message}`;
    }
  
    return throwError(() => new Error(errorMessage));
  }
}
