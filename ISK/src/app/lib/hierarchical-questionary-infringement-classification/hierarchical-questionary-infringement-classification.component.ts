import {KeyValue} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

export interface HierarchyElement {
	header?: string;
	shortName?: string;
	value?: string;
	childs?: HierarchyElement[];
}

export interface RadioItem {
	value: string;
	text: string;
}

@Component({
	selector: 'app-hierarchical-questionary-infringement-classification',
	templateUrl: './hierarchical-questionary-infringement-classification.component.html',
	styleUrls: ['./hierarchical-questionary-infringement-classification.component.scss']
})
export class HierarchicalQuestionaryInfringementClassificationComponent implements OnInit {
	@Input() root!: HierarchyElement;
	rootSelection?: number = undefined;
	formGroup!: FormGroup;

	constructor(readonly fb: FormBuilder) {}

	ngOnInit(): void {
		console.log(this.rootChilds);
		this.formGroup = this.fb.group({root: ['']});
		this.formGroup.valueChanges.subscribe(o => console.log(o));
	}

	get rootHeader() {
		return this.root.header!;
	}

	get rootChilds() {
		return (
			this.root.childs?.map(child => {
				return child.shortName ?? '';
			}) ?? ([] as string[])
		);
	}
}
