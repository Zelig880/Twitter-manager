import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:3000";
  }
  
  getUserInfo() {
    return this.http.get<any>(`${this.apiUrl}/getUserInfo`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  
  getDummyFollowers() {
    return this.http.get<any>(`${this.apiUrl}/getDummyFollowers`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getFollowing() {
    return this.http.get<any>(`${this.apiUrl}/getFollowing`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  private handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
