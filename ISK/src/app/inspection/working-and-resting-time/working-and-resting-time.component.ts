import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-working-and-resting-time',
  templateUrl: './working-and-resting-time.component.html',
  styleUrls: ['./working-and-resting-time.component.scss'],
})
export class WorkingAndRestingTimeComponent implements OnInit {
  formGroup = new FormGroup({
    workingDaysInspected: new FormControl(0),
    drivingTime: new FormControl('0'),
    infringements: new FormArray([]),
  });
  constructor() {}

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((t) => {
      if (t.drivingTime !== '0' && this.infringements.length === 0) {
        this.infringements.push(new FormControl('0'));
      }
      console.log(t);
    });
  }

  get infringements() {
    return this.formGroup.get('infringements') as FormArray;
  }

  addInfringement() {
    this.infringements.push(new FormControl('0'));
  }
}
