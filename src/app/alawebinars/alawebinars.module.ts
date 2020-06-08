import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlawebinarsPageRoutingModule } from './alawebinars-routing.module';

import { AlawebinarsPage } from './alawebinars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlawebinarsPageRoutingModule
  ],
  declarations: [AlawebinarsPage]
})
export class AlawebinarsPageModule {}
