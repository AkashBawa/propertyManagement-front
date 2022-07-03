import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PropertyI } from '../main.service'

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  constructor(
    public fb: FormBuilder
  ) { }

  @Output() newDataChild = new EventEmitter<PropertyI>()

  newPropertyForm : FormGroup;
  ngOnInit(): void {
    this.newPropertyForm = this.fb.group({
      name: ['' , Validators.required],
      description: ['' , Validators.required],
      size: ['' , Validators.required]
    })
  }

  submitForm() {
    if(!this.newPropertyForm.valid) {
      window.alert("Enter all the fields correctly");
      return;
    }
    console.log(this.newPropertyForm.value)
    this.newDataChild.emit(this.newPropertyForm.value)
  }

  cancelForm() {
    this.newDataChild.emit(null);
  }
}
