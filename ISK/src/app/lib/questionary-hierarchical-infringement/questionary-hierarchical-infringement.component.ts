import {KeyValue} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
	selector: 'app-questionary-hierarchical-infringement',
	templateUrl: './questionary-hierarchical-infringement.component.html',
	styleUrls: ['./questionary-hierarchical-infringement.component.scss']
})
export class QuestionaryHierarchicalInfringementComponent implements OnInit {
	@Input() radioValues = [{key: '1', value: 'resli'}] as KeyValue<string, string>[];
	@Input() label = 'Not set';
	@Output() readonly selectionChangeEvent = new EventEmitter<string>();
	constructor() {}

	ngOnInit(): void {}

	radioChange(event: MatRadioChange) {
		console.log(event.value);
		this.selectionChangeEvent.emit(event.value);
	}
}
