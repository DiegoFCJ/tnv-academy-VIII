import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'src/models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  API_URL = 'http://localhost:1234/api';

  constructor(private http: HttpClient) { 
  }

  getAllPiatti() {
    return this.http.get<MenuItem[]>(`${this.API_URL}/piatti`);
  }

  getPiatto(id: number) {
    return this.http.get<MenuItem>(`${this.API_URL}/piatti/${id}`);
  }

  addPiatto(piatto: MenuItem) {
    return this.http.post<MenuItem>(`${this.API_URL}/piatti`, piatto);
  }

  editPiatto(id: number, piatto: Partial<MenuItem>) {
    return this.http.patch<MenuItem>(`${this.API_URL}/piatti/${id}`, piatto);
  }

  deletePiatto(id: number) {
    return this.http.delete(`${this.API_URL}/piatti/${id}`);
  }
}
