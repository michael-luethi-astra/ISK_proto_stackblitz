import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

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
	styleUrls: ['./hierarchical-questionary-infringement-classification.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: HierarchicalQuestionaryInfringementClassificationComponent
		}
	]
})
export class HierarchicalQuestionaryInfringementClassificationComponent implements OnInit, ControlValueAccessor {
	@Input() root!: HierarchyElement;
	formGroupElements = [] as string[];
	selectionPath?: number[] = undefined;
	formGroup!: FormGroup;

	touched = false;
	disabled = false;
	selection?: number;

	constructor(readonly fb: FormBuilder) {}

	onChange = (quantity: number) => {};

	onTouched = () => {};

	writeValue(obj: any): void {
		console.log(`value set by form: ${obj}`);
	}

	registerOnChange(onChange: any) {
		this.onChange = onChange;
	}

	registerOnTouched(onTouched: any) {
		this.onTouched = onTouched;
	}

	ngOnInit(): void {
		this.setupFormGroup();

		this.formGroup.valueChanges.subscribe(o => {
			console.log(JSON.stringify(o));

			this.selectionPath = [];
			let childArray = this.root.childs!;

			for (let index = 0; index < this.formGroupElements.length; index++) {
				const elementName = this.formGroupElements[index];
				const selectionValue = o[elementName];

				if (selectionValue !== '') {
					const selectionValueNumber = (selectionValue as number) - 1;
					const element = childArray[selectionValueNumber];

					if (element.childs !== undefined) {
						this.selectionPath.push(selectionValueNumber);
						childArray = element.childs;
					} else {
						console.log(selectionValueNumber);
						this.setValue(selectionValueNumber);
						break;
					}
				}
			}
		});
	}

	setValue(value: number) {
		this.markAsTouched();
		if (!this.disabled) {
			this.selection = value;
			this.onChange(this.selection);
		}
	}

	getDepth(element: HierarchyElement, count?: number): number {
		const depths = element.childs?.map(e => this.getDepth(e, count !== undefined ? count + 1 : 0));
		return depths ? Math.max(...depths) : count ?? 0;
	}

	private setupFormGroup() {
		this.formGroup = this.fb.group({root: ['']});
		this.formGroupElements.push('root');

		for (let index = 0; index < this.getDepth(this.root); index++) {
			const elementName = `child${index}`;
			this.formGroup.addControl(elementName, new FormControl(''));
			this.formGroupElements.push(elementName);
		}
	}

	get activePath() {
		let path = [] as HierarchyElement[];

		if (this.selectionPath) {
			path = this.getActiveElement(this.selectionPath);
		}

		return path;
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

	private markAsTouched() {
		if (!this.touched) {
			this.onTouched();
			this.touched = true;
		}
	}

	private getActiveElement(pathIndexes: number[]): HierarchyElement[] {
		const path = [] as HierarchyElement[];

		let childArray = this.root.childs!;

		for (let index = 0; index < pathIndexes.length; index++) {
			const element = childArray[pathIndexes[index]];
			path.push(element);

			childArray = element.childs!;
		}

		return path;
	}
}
