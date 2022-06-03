import { Injectable } from '@angular/core';
import { Alert } from './alert';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  private AssetUrl = 'http://127.0.0.1:8000/api/alert';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAlerts(): Observable<Alert[]> {
    const url = `${this.AssetUrl}/get_all`
    return this.http.get<Alert[]>(url)
      .pipe(
        catchError(this.handleError<Alert[]>('getAlerts', []))
      );
  }

  deleteAlert(id: number): Observable<Alert> {
    const url = `${this.AssetUrl}/?id=${id}`;
    return this.http.delete<Alert>(url, this.httpOptions).pipe(
      catchError(this.handleError<Alert>('deleteAlert'))
    );
  }

  updateAlert(alert: Alert): Observable<any> {
    return this.http.patch(this.AssetUrl + "/", alert, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateAlert'))
    );
  }

  addAlert(alert: Alert): Observable<Alert> {
    return this.http.post<Alert>(this.AssetUrl + "/", alert, this.httpOptions).pipe(
      catchError(this.handleError<Alert>('addAlert'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
