import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { DateService } from "../../date.service";
import { positiveBoost } from "../../store/actions";

@Component({
  selector: "app-positive-boost",
  templateUrl: "./positive-boost.component.html",
  styleUrls: ["./positive-boost.component.scss"]
})
export class PositiveBoostComponent {
  @Input() size: number = 1;

  constructor(private store: Store) {}

  handleClick() {
    this.store.dispatch(
      positiveBoost({ date: DateService.getDate(), size: this.size })
    );
  }
}
