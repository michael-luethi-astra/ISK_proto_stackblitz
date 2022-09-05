import {NGXLogger} from 'ngx-logger';
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {HierarchicalInfringement} from '../hierarchical-infringement';

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
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HierarchicalQuestionaryInfringementClassificationComponent implements OnInit, ControlValueAccessor {
	@Input() root!: HierarchicalInfringement;
	@Input() activatedOptions?: boolean[];
	formGroupElements = [] as string[];
	selectionPath?: number[] = undefined;
	formGroup!: FormGroup;

	touched = false;
	disabled = false;
	selection?: number;

	constructor(readonly fb: FormBuilder, private readonly logger: NGXLogger) {}

	onChange = (quantity: number) => {};

	onTouched = () => {};

	writeValue(obj: any): void {
		this.logger.log(`value set by form: ${obj}`);
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
			this.logger.log(JSON.stringify(o));

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
						this.logger.log(selectionValueNumber);
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

	getDepth(element: HierarchicalInfringement, count?: number): number {
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
		let path = [] as HierarchicalInfringement[];

		if (this.selectionPath) {
			path = this.getActiveElement(this.selectionPath);
		}

		return path;
	}

	get rootHeader() {
		return this.root.i18nKeyHeader!;
	}

	get rootChilds() {
		return (
			this.root.childs?.map(child => {
				return child.i18nKeySelectionItem ?? '';
			}) ?? ([] as string[])
		);
	}

	private markAsTouched() {
		if (!this.touched) {
			this.onTouched();
			this.touched = true;
		}
	}

	private getActiveElement(pathIndexes: number[]): HierarchicalInfringement[] {
		const path = [] as HierarchicalInfringement[];

		let childArray = this.root.childs!;

		for (let index = 0; index < pathIndexes.length; index++) {
			const element = childArray[pathIndexes[index]];
			path.push(element);

			childArray = element.childs!;
		}

		return path;
	}
}
