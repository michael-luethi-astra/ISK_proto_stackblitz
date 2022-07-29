import { Infringement } from './../../lib/infringement';
import { InspectionPointGroup } from './../../lib/inspection-point-group';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InspectionPoint } from 'src/app/lib/inspection-point';

interface FormGroupNamePair {
  group: FormGroup;
  name: string;
}

@Component({
  selector: 'app-working-and-resting-time',
  templateUrl: './working-and-resting-time.component.html',
  styleUrls: ['./working-and-resting-time.component.scss'],
})
export class WorkingAndRestingTimeComponent implements OnInit {
  structure = [
    {
      i18nKey:
        'inspection.working-and-resting-time.driving-and-resting-time.label',
      inspectionPoints: [
        {
          name: 'drivingTime',
          i18nKey:
            'inspection.working-and-resting-time.driving-and-resting-time.driving-time.label',
          default: '0',
          infringements: [
            {
              i18nKey:
                'inspection.working-and-resting-time.driving-and-resting-time.driving-time.infringement.exceed-daily-driving-time-of-9h-in-range-of-10h-to-11h',
              value: '1',
            },
            {
              i18nKey:
                'inspection.working-and-resting-time.driving-and-resting-time.driving-time.infringement.exceed-daily-driving-time-of-9h-more-than-11h',
              value: '2',
            },
          ] as Infringement[],
        },
      ] as InspectionPoint[],
    },
  ] as InspectionPointGroup[];
  formGroup!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      workingDaysInspected: new FormControl(0),
    });
    const controlGroups = this.structure.map((inspectionPointGroup) => {
      return inspectionPointGroup.inspectionPoints.map((inspectionPoint) => {
        const inspectionFormGroup = new FormGroup({});
        inspectionFormGroup.addControl(
          inspectionPoint.name,
          new FormControl(inspectionPoint.default)
        );
        if (inspectionPoint.infringements.length > 0) {
          inspectionFormGroup.addControl(
            `${inspectionPoint.name}Infringements`,
            new FormArray([new FormControl('')])
          );
          console.log('check');
        }
        return {
          group: inspectionFormGroup,
          name: `${inspectionPoint.name}Group`,
        } as FormGroupNamePair;
      });
    });

    controlGroups
      .flat()
      .forEach((pair) => this.formGroup.addControl(pair.name, pair.group));

    this.formGroup.valueChanges.subscribe((t) => {
      console.log(t);
    });
  }
}
