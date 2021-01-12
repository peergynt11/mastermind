import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmenuComponent } from './mainmenu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectColorComponent } from './select-color/select-color.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';

const routes: Routes = [
  {path: '', component: MainmenuComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'select-color', component: SelectColorComponent},
  {path: 'dragdrop', component: DragdropComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmenuRoutingModule { }
