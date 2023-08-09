import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { DateService } from "src/app/date.service";
import { didNotAccept } from "../../store/actions";

@Component({
  selector: "app-did-not-accept",
  templateUrl: "./did-not-accept.component.html",
  styleUrls: ["./did-not-accept.component.scss"]
})
export class DidNotAcceptComponent {
  constructor(private store: Store) {}

  didNotAccept() {
    this.store.dispatch(didNotAccept({ date: DateService.getDate() }));
  }
}
