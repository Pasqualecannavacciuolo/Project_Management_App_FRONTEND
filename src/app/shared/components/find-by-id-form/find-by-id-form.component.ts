import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-by-id-form',
  templateUrl: './find-by-id-form.component.html',
  styleUrls: ['./find-by-id-form.component.css']
})
export class FindByIdFormComponent implements OnInit{

  findForm!: FormGroup;
  @Output() id_from_form = new EventEmitter<any>();
  @Output() switch_value = new EventEmitter<any>();

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.findForm = this.fb.group({
      id: ['', Validators.required],
      switch: ['']
    });
  }

  get id() {
    return this.findForm.get('id');
  }

  get switch() {
    return this.findForm.get('switch');
  }

  passData() {
    this.switch_value.emit(this.switch);
    this.id_from_form.emit(this.id);
  }



}
