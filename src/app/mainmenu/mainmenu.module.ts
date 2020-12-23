import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { MainmenuRoutingModule } from './mainmenu-routing.module';
import { MainmenuComponent } from './mainmenu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectColorComponent } from './select-color/select-color.component';

@NgModule({
  declarations: [MainmenuComponent, WelcomeComponent, SelectColorComponent],
  imports: [
    CommonModule,
    MainmenuRoutingModule,
    MatSliderModule,
    MatMenuModule,
    MatSelectModule
  ],
  exports:[
    MatSliderModule,
    MatSelectModule
  ]
})
export class MainmenuModule { }
