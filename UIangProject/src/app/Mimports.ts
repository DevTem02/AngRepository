import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes} from './RouteCofig'
import { Animation } from './Utility/Animation';
import { RegistrationModule } from './Registration/RegistrationModule';
import { HomeModule } from './Home/HomeModule';
//import { Ng2GoogleRecaptchaModule } from 'ng2-google-recaptcha';
export const Mimports=[BrowserModule, FormsModule, routes,RegistrationModule,
    HomeModule,
     Animation
    ]