import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TouristHireService {

  basePath : string = 'http://44.204.1.137:8080/api/v1/services'
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

  postHire(data: any, tId: string, sId: string): Observable<any>{
    console.log(this.basePath+`/${sId}/hired-services/touristId=${tId}`);
    return this.http.post(this.basePath+`/${sId}/hired-services/touristId=${tId}`, data, this.httpOptions);
  }
}
