import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {_Index} from './Index'
export const RegistrationRoute: Routes = [
  //  { path: '', redirectTo: 'Registration', pathMatch: 'full' },
    {path :'Registration', component :_Index  }
]
export const routes: ModuleWithProviders = RouterModule.forChild(RegistrationRoute);