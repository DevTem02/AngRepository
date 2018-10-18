
import { NgModule } from '@angular/core';
import { ProgressSpiner } from './Utility/ProgressSpiner';

import { LoaderService } from './Services/LoaderService';
import { Mdeclarations } from './Mdeclarations';
import { Mimports } from './Mimports';
import { ImportProvider } from './Mproviders';
@NgModule({
  declarations:Mdeclarations,
  imports:Mimports,
  providers: ImportProvider,
  entryComponents: [Mdeclarations[2]],
  bootstrap: [Mdeclarations[0]]
})
export class AppModule { }
