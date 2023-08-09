import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { DateService } from "../../date.service";
import { negativeBoost } from "../../store/actions";

@Component({
  selector: "app-negative-boost",
  templateUrl: "./negative-boost.component.html",
  styleUrls: ["./negative-boost.component.scss"]
})
export class NegativeBoostComponent {
  @Input() size: number = 1;

  constructor(private store: Store) {}

  handleClick() {
    this.store.dispatch(
      negativeBoost({ date: DateService.getDate(), size: this.size })
    );
  }
}
