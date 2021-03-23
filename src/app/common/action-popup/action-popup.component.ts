import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "action-popup",
  templateUrl: "./action-popup.component.html",
  styleUrls: ["./action-popup.component.scss"],
})
export class ActionPopupComponent implements OnInit {
  @Input() popupVisibility: boolean = false;
  @Input() popupText: string;
  @Input() confirmButton: string = "Yes";
  @Input() cancelButton: string = "No";
  @Output() confirmAction = new EventEmitter();
  @Output() popupVisibilityChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  confirm() {
    this.confirmAction.emit(true);
  }

  close() {
    this.popupVisibility = false;
    this.popupVisibilityChange.emit(this.popupVisibility);
  }
}
