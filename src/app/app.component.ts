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
    await this.mainService.addProperty(data);
    this.getProperty();
    this.addPropertyToggle = false;
  }

  async getProperty() {
    this.propertyList = await this.mainService.getProperties()
  }
}
