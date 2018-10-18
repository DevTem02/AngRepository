import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {RegistrationRoute } from "./RegistrationRoute"
import {_Index} from './Index'
@NgModule({
    imports: [RouterModule.forChild(RegistrationRoute)],
    exports: [RouterModule],
    providers: [],
  // declarations: [_Index]
  })
  export class RegistrationModule {}