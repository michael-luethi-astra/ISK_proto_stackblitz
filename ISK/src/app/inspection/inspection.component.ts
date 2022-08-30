import {ConfigService} from './../config/config.service';
import {Component, OnInit} from '@angular/core';
import {ObNavTreeItemModel} from '@oblique/oblique';

@Component({
	selector: 'app-inspection',
	templateUrl: './inspection.component.html',
	styleUrls: ['./inspection.component.scss']
})
export class InspectionComponent implements OnInit {
	items: ObNavTreeItemModel[];

	constructor(readonly configServie: ConfigService) {
		this.items = configServie.config.lists.map((list, index) => new ObNavTreeItemModel({label: list.title, id: list.id}));
	}

	ngOnInit(): void {}
}
