import { Component, forwardRef, Inject, Injector, INJECTOR, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements OnInit, ControlValueAccessor, Validator {

  public value: string;
  public changed: (value: string) => void;
  public touched: () => void;
  public isDisabled: boolean;
  formatValidation = /^(([0-2][0-9]|[0-3][0-1])[\/]([0-1][0-2]|[0][0-9])[\/][0-9][0-9][0-9][0-9])/
  _control: NgControl;

  constructor(@Inject(INJECTOR) private injector: Injector) { }

  ngOnInit() {
    this._control = this.injector.get(NgControl);
  }

  validate({ value }: FormControl) {
    const isValid = !!this.formatValidation.exec(value) && value.length <= 10;
    if (value) {
      return !isValid && {
        invalid: true
      }
    }
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

  writeValue(value: any): void {
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
