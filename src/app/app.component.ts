import { Component } from '@angular/core';
import { MainService, PropertyI } from './main.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public mainService: MainService) {

  }

  loading: boolean = false;
  ngOnInit() {
    this.getProperty();
  }

  addPropertyToggle: boolean = false;
  propertyList : PropertyI[];

  addProperty(): void {
    this.addPropertyToggle = true;
  }

  async newData (data: PropertyI | null) {
    if(!data) {
      this.addPropertyToggle = false;
      return;
    }
    this.loading = true;
    await this.mainService.addProperty(data);
    this.getProperty();
    this.addPropertyToggle = false;
  }

  async getProperty() {
    this.loading = true;
    const response = await this.mainService.getProperties();
    this.loading = false;
    if(response.success) {
      this.propertyList = [];
      response.data.records.forEach(element => {
        const data: PropertyI = {
          name: element.fields.name,
          description: element.fields.description,
          size: element.fields.size,
          id : element.id
        }
        this.propertyList.push(data);
      });
    }
  }
}
