import { Component, forwardRef, Inject, Injector, INJECTOR, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl, Validator, NgControl } from '@angular/forms';

@Component({
  selector: 'duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    }
  ]
})
export class DurationInputComponent implements OnInit, ControlValueAccessor, Validator {

  public value: string;
  public changed: (value: string) => void;
  public touched: () => void;
  public isDisabled: boolean;
  _control: NgControl;

  constructor(@Inject(INJECTOR) private injector: Injector) { }

  ngOnInit() {
    this._control = this.injector.get(NgControl);
  }

  validate({ value }: FormControl) {
    const isValid = !isNaN(value);
    return !isValid && {
      invalid: true
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
}
