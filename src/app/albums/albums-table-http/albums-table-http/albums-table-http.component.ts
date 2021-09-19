import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-albums-table-http',
  templateUrl: './albums-table-http.component.html',
  styleUrls: ['./albums-table-http.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsTableHttpComponent implements OnInit {

  isLoadingResults = false;
  isRateLimitReached= false;
  displayedColumns: string[] = ['userId', 'id', 'details', 'title'];
  exampleDatabase: Album | null;
  data: Album[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
