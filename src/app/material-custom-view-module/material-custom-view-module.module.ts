import {NgModule} from '@angular/core';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdMenuModule,
  MdIconModule,
  MdTabsModule,
  MdSlideToggleModule
} from '@angular/material';


@NgModule({
  imports: [MdButtonModule, MdToolbarModule, MdSidenavModule, MdMenuModule, MdIconModule, MdTabsModule, MdSlideToggleModule],
  exports: [MdButtonModule, MdToolbarModule, MdSidenavModule, MdMenuModule, MdIconModule, MdTabsModule, MdSlideToggleModule]
})
export class MaterialCustomViewModule {
}
