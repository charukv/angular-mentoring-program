import { Component, ElementRef, EventEmitter, forwardRef, Inject, Injector, INJECTOR, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Author } from 'src/app/interfaces/author-interface/author-interface';


@Component({
  selector: 'authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true
    }
  ]
})
export class AuthorsInputComponent implements OnInit, ControlValueAccessor, Validator {

  public value: string;
  public changed: (value: string) => void;
  public touched: () => void;
  public isDisabled: boolean;
  _control: NgControl;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedAuthors: any[] = [];

  @ViewChild('authorInput') authorInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @Input() set SelectedAuthors(authors) {
    if (authors.length) {
      this.selectedAuthors = authors;
      this.change(this.selectedAuthors);
    }
  }
  @Input() allAuthors: any[] = [];
  @Output() selectedAuthorsChange = new EventEmitter()

  constructor(@Inject(INJECTOR) private injector: Injector) { }

  ngOnInit() {
    this._control = this.injector.get(NgControl);
  }

  validate() {
    const notValid = this.selectedAuthors.length === 0;
    return notValid && {
      required: true
    }
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  change(value) {
    this.changed(value);
    this.touched();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.selectedAuthors.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  remove(author: Author): void {
    const index = this.selectedAuthors.indexOf(author);
    this.allAuthors.push(author);
    if (index >= 0) {
      this.selectedAuthors.splice(index, 1);
    }
    this.change(this.selectedAuthors);
    this.selectedAuthorsChange.emit(this.selectedAuthors);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedAuthors.push(event.option.value);
    this.authorInput.nativeElement.value = '';
    this.selectedAuthorsChange.emit(this.selectedAuthors);
    this.allAuthors = this.allAuthors.filter(author => author.id !== event.option.value.id);
    this.change(this.selectedAuthors);
  }
}
