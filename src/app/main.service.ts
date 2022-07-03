import { Injectable } from '@angular/core';

export interface PropertyI {
  name: string,
  description: string,
  size: number
}

@Injectable({
  providedIn: 'root'
})

export class MainService {

  propertyList : PropertyI[] = [
    {name: "Default 1", description: "Default description", size: 2},
  ];
  constructor() { }

  async getProperties() {
    return this.propertyList;
  }

  async addProperty(data: PropertyI) {
    this.propertyList.push(data);
  }

  async deleteProperty(index: number) {
    this.propertyList.splice(index, 1)
  }

}
