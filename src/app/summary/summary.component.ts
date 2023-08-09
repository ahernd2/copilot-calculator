import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { datesSelector } from "../store/selectors/dates.selector";
import { DateData } from "../store/state";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent {
  dates$: Observable<DateData>;

  constructor(private store: Store) {
    this.dates$ = this.store.select(datesSelector);
  }
}
