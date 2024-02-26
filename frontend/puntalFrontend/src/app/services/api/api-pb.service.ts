import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiPBService {
  private url = 'http://127.0.0.1:8000';
  private api = this.url + '/api/v1';
  constructor(private http: HttpClient) {}




}
