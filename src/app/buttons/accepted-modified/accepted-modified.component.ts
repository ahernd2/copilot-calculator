import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { DateService } from "src/app/date.service";
import { acceptedModified } from "../../store/actions";

@Component({
  selector: "app-accepted-modified",
  templateUrl: "./accepted-modified.component.html",
  styleUrls: ["./accepted-modified.component.scss"]
})
export class AcceptedModifiedComponent {
  constructor(private store: Store) {}

  acceptedModified() {
    this.store.dispatch(acceptedModified({ date: DateService.getDate() }));
  }
}
