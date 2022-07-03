import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PropertyI, MainService } from '../main.service';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss']
})
export class ListPropertyComponent implements OnInit {

  constructor( private mainService: MainService) { }


  @Input() propertyList: PropertyI[];
  @Output() refetchList = new EventEmitter();
  ngOnInit(): void {
  }

  async deleteProperty(index: number) {
    const id = this.propertyList[index].id;
    await this.mainService.deleteProperty(id);
    this.refetchList.emit();
  }
}
