import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModeSelectionComponent } from './mode-selection/mode-selection.component';

@NgModule({
  declarations: [HeaderComponent, ModeSelectionComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ModeSelectionComponent],
})
export class ComponentModule {}
