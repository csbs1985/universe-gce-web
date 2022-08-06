import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModeSelectionComponent } from './mode-selection/mode-selection.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent, ModeSelectionComponent],
  imports: [CommonModule, TranslateModule],
  exports: [HeaderComponent, ModeSelectionComponent],
})
export class ComponentModule {}
