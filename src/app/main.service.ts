import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
export interface PropertyI {
  name: string,
  description: string,
  size: number,
  id?: string
}

@Injectable({
  providedIn: 'root'
})

export class MainService {

  private baseURL = environment.backend_url;

  propertyList : PropertyI[] = [
    {name: "Default 1", description: "Default description", size: 2},
  ];
  constructor(private http: HttpClient) { }

  async getProperties(): Promise<any> {
    return this.http.get(`${this.baseURL}/allProperties`).toPromise();
  }

  async addProperty(data: PropertyI): Promise<any> {
    return this.http.post(`${this.baseURL}/addProperty`, data).toPromise();
  }

  async deleteProperty(id: string): Promise<any> {
    return this.http.delete(`${this.baseURL}/deleteProperty/${id}`).toPromise();
  }
}