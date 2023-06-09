import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,  retry,  throwError, catchError } from 'rxjs';
import { Iservice } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  basePath : string = 'http://localhost:3000/services'

  httpOptions : {headers:HttpHeaders} ={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse):Observable<never> {
    if (error.error instanceof ErrorEvent){
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    //Return Observable with Error MEssage to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getServices(): Observable<Iservice[]>{
    return this.http.get<Iservice[]>(this.basePath, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  getServicebyId(id:number): Observable<Iservice>{
    return this.http.get<Iservice>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  searchService(name: String): Observable<Iservice[]>{
    return this.http.get<Iservice[]>(this.basePath+ `?name_like=${name}`, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

}
