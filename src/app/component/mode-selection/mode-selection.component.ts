import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gce-mode-selection',
  templateUrl: './mode-selection.component.html',
  styleUrls: ['./mode-selection.component.scss'],
})
export class ModeSelectionComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}
}
