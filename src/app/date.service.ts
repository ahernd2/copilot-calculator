import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DateService {
  constructor() {}

  static getDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    return dd + "/" + mm + "/" + yyyy;
  }
}
