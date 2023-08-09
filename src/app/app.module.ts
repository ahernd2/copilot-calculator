import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ActionReducer, MetaReducer, StoreModule } from "@ngrx/store";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { localStorageSync } from "ngrx-store-localstorage";
import { AppComponent } from "./app.component";
import { AcceptedModifiedComponent } from "./buttons/accepted-modified/accepted-modified.component";
import { AcceptedComponent } from "./buttons/accepted/accepted.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { DidNotAcceptComponent } from "./buttons/did-not-accept/did-not-accept.component";
import { reducer } from "./store/reducer";
import { PositiveBoostComponent } from './buttons/positive-boost/positive-boost.component';
import { NegativeBoostComponent } from './buttons/negative-boost/negative-boost.component';
import { SummaryComponent } from './summary/summary.component';
import { ComplicatedComponent } from './buttons/complicated/complicated.component';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ["app"], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    AcceptedComponent,
    AcceptedModifiedComponent,
    DidNotAcceptComponent,
    PositiveBoostComponent,
    NegativeBoostComponent,
    SummaryComponent,
    ComplicatedComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ app: reducer }, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
