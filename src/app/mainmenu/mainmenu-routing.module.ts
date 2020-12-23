import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmenuComponent } from './mainmenu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectColorComponent } from './select-color/select-color.component';

const routes: Routes = [
  {path: '', component: MainmenuComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'select-color', component: SelectColorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmenuRoutingModule { }
