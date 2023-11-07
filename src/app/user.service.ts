import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) {

  }
  baseUrl = "https://653b530d2e42fd0d54d4eae6.mockapi.io/users";

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public getUser(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  public updateUser(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  public addUser(user: object): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}`, user);
  }

}
