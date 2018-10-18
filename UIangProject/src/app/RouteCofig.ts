import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {_Loging} from './Login/Index'
export const RouteConf: Routes = [
    { path: '', redirectTo: 'Log', pathMatch: 'full' },
    {path :'Log', component :_Loging  },   
    {path :"Registration", loadChildren :'./Registration/RegistrationModule#RegistrationModule' },
    {path :"Home", loadChildren :'./Home/HomeModule#HomeModule' }
]
export const routes: ModuleWithProviders = RouterModule.forRoot(RouteConf);