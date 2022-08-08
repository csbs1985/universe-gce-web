import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gce-mode-selection',
  templateUrl: './mode-selection.component.html',
  styleUrls: ['./mode-selection.component.scss'],
})
export class ModeSelectionComponent implements OnInit {
  public cards: Array<string> = [];

  constructor(private translate: TranslateService) {
    this.getListCards();
  }

  ngOnInit(): void {}

  private getListCards(): void {
    this.cards.push(
      this.translate.instant('card-follow'),
      this.translate.instant('card-update'),
      this.translate.instant('card-create')
    );
  }

  public selectMode(item: number): void {
    console.log(item);
  }
}
