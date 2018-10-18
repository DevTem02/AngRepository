import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {_Index} from './Index'
export const HomeRoute: Routes = [
  //  { path: '', redirectTo: 'Registration', pathMatch: 'full' },
    {path :'Home', component :_Index  }
]
export const routes: ModuleWithProviders = RouterModule.forChild(HomeRoute);