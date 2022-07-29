import { InspectionPoint } from '../../../../../ISK/src/app/lib/inspection-point';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Infringement } from '../../../../../ISK/src/app/lib/infringement';

@Component({
  selector: 'app-infringement-without-obv',
  templateUrl: './infringement-without-obv.component.html',
  styleUrls: ['./infringement-without-obv.component.scss'],
})
export class InfringementWithoutObvComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  @Input() inspectionPoint!: InspectionPoint;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private readonly rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(
      `${this.inspectionPoint.name}Group`
    ) as FormGroup;

    if (this.infringements !== null) {
      this.form
        .get(this.inspectionPoint.name)
        ?.valueChanges.pipe(takeUntil(this.destroy$))
        .subscribe((value) => {
          if (value === '1' && this.infringements.length === 0) {
            this.addInfringement();
          } else {
            this.clearInfringements();
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get infringements() {
    return this.form.get(
      `${this.inspectionPoint.name}Infringements`
    ) as FormArray;
  }

  get canAddSecondInfringementClassification() {
    const infringementsClasses = this.inspectionPoint.infringements;
    const group = infringementsClasses.reduce((group, infringement) => {
      if (!group.some(infringement.exclusionGroup ?? number.))

      return group;
    }, [] as number[]);

    console.log(JSON.stringify(group));
    return Object.keys(group).length > 1;
  }

  addInfringement() {
    this.infringements.push(new FormControl('0'));
  }

  clearInfringements() {
    this.infringements.clear();
  }
}
