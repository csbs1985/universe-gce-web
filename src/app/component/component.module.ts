import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModeSelectionComponent } from './mode-selection/mode-selection.component';
import { TranslateModule } from '@ngx-translate/core';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HeaderComponent, ModeSelectionComponent, SearchComponent],
  imports: [CommonModule, TranslateModule],
  exports: [HeaderComponent, ModeSelectionComponent, SearchComponent],
})
export class ComponentModule {}
