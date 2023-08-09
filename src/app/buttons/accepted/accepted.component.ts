import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { DateService } from "src/app/date.service";
import { accepted } from "../../store/actions";

@Component({
  selector: "app-accepted",
  templateUrl: "./accepted.component.html",
  styleUrls: ["./accepted.component.scss"]
})
export class AcceptedComponent {
  constructor(private store: Store) {}

  accepted() {
    this.store.dispatch(accepted({ date: DateService.getDate() }));
  }
}
