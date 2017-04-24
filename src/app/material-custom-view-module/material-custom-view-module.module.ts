import { NgModule } from '@angular/core';
import {MdToolbarModule, MdSidenavModule} from '@angular/material';


@NgModule({
  imports: [MdToolbarModule, MdSidenavModule],
  exports: [MdToolbarModule, MdSidenavModule]
})
export class MaterialCustomViewModule { }

