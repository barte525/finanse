import { Injectable } from '@angular/core';
import { Asset } from './asset';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Currency} from './currency'

@Injectable({
  providedIn: 'root'
})

export class AssetService {

  private AssetUrl = 'http://127.0.0.1:8000/api/asset';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAssets(): Observable<Asset[]> {
    const url = `${this.AssetUrl}/get_all`
    return this.http.get<Asset[]>(url)
      .pipe(
        catchError(this.handleError<Asset[]>('getAssets', []))
      );
  }

  getAssetsNames(): Observable<Asset[]> {
    const url = `${this.AssetUrl}/get_all_names`
    return this.http.get<Asset[]>(url)
      .pipe(
        catchError(this.handleError<Asset[]>('getAssets', []))
      );
  }

  getCurrencies(): Observable<Currency[]> {
    const url = `${this.AssetUrl}/get_currencies`
    return this.http.get<Currency[]>(url)
      .pipe(
        catchError(this.handleError<Currency[]>('getCurrencies', []))
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
