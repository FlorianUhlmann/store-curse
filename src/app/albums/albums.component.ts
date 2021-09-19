import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { noop, Observable } from 'rxjs';
import { finalize, first, map, switchMap, tap } from 'rxjs/operators';
import { Album } from '../models/album';
import { AlbumManageService } from '../services/album-manage.service';
import { AppState } from '../store/app.store';
import { AlbumService } from './album.service';
import * as albumSelector from '../store/album/album.selector'
import * as albumReducer from '../store/album/album.reducer'
import * as albumAction from '../store/album/album.action'
import { Action } from 'rxjs/internal/scheduler/Action';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'id', 'title', 'getdetails','editdetail'];
  dataSource: MatTableDataSource<Album>;
  data$: Observable<Album[]> ;
  albumData$: Album[] ;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private api: AlbumService, private readonly store: Store<AppState>) {}

  ngOnInit(): void {

      this.store.pipe(
        select(albumSelector.selectAllAlbums),
        tap(albums => {
          this.dataSource = new MatTableDataSource(albums);
          this.dataSource.paginator = this.paginator
        })
      ).subscribe();

  }

  getRecord(name: string){
    alert("Object Selected: " + name);
  }

  updateRecord(data: Album ){
    alert(JSON.stringify(data));
  }
}
