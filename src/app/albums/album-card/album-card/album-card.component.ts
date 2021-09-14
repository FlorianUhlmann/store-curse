import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
