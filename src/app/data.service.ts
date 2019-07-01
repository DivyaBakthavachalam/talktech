import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class DataService {
 

  constructor(private http:HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/');
  }
}
