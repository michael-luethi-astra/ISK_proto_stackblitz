import {ConfigService} from './../config/config.service';
import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-inspection',
	templateUrl: './inspection.component.html',
	styleUrls: ['./inspection.component.scss']
})
export class InspectionComponent implements OnInit {
	constructor(readonly configServie: ConfigService) {}

	ngOnInit(): void {}
}
