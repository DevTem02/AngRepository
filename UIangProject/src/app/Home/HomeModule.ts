import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {HomeRoute } from "./HomeRoute"
import {_Index } from "./Index"

@NgModule({
     declarations:[_Index],
    imports: [RouterModule.forChild(HomeRoute)],
    exports: [RouterModule],
    providers: []
  })
  export class HomeModule {}