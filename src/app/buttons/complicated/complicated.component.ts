import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { DateService } from "src/app/date.service";
import { complicated } from "src/app/store/actions";

@Component({
  selector: "app-complicated",
  templateUrl: "./complicated.component.html",
  styleUrls: ["./complicated.component.scss"]
})
export class ComplicatedComponent {
  constructor(private store: Store) {}

  complicated() {
    this.store.dispatch(complicated({ date: DateService.getDate() }));
  }
}
