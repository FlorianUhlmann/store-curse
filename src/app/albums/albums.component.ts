import { Component, AfterViewInit, EventEmitter, ChangeDetectionStrategy, ViewChild, Output, HostListener } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { finalize, first, map, switchMap, tap } from 'rxjs/operators';
import { Album } from '../models/album';
import { AlbumManageService } from '../services/album-manage.service';
import { AppState } from '../store/app.store';
import { AlbumService } from './album.service';
import * as albumSelector from '../store/album/album.selector'
import * as albumReducer from '../store/album/album.reducer'
import * as albumAction from '../store/album/album.action'
import { Action } from 'rxjs/internal/scheduler/Action';
import { Update } from '@ngrx/entity';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditAlbumDialogComponent } from './edit-album-dialog/edit-album-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsComponent implements AfterViewInit {

  displayedColumns: string[] = ['userId', 'id', 'title', 'getdetails','editalbum','deletealbum'];
  dataSource: MatTableDataSource<Album> = new MatTableDataSource();
  data$: any;
  albumData$: Album[] ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() courseChanged = new EventEmitter();


  constructor(private api: AlbumService, private readonly store: Store<AppState>, private dialog: MatDialog, private activatedRoute:ActivatedRoute ) {}

  ngAfterViewInit(): void {
    //this.dataSource.paginator = this.paginator;
    this.loadData();
  }




  ngOnDestroy(): void {
    this.data$.unsubscribe();
  }

  getRecord(name: string){
    alert("Object Selected: " + name);
  }

  editAlbum(album: Album ){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';

    dialogConfig.data = {
      dialogTitle:"Edit Album",
      album,
      mode: 'update'
    };

    this.dialog.open(EditAlbumDialogComponent, dialogConfig)
  }

  deleteAlbum(album: Album ){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';

    dialogConfig.data = {
      dialogTitle:"Delete Album",
      album,
      mode: 'delete'
    };


    this.dialog.open(EditAlbumDialogComponent, dialogConfig)
  }

  loading = false;

  private loadData() {
    /* of(this.activatedRoute.snapshot.data)
      .subscribe((albums: any) => {
        console.log(albums);
        this.dataSource = new MatTableDataSource(albums);
        this.dataSource.paginator = this.paginator
      }
    ); */
    this.data$ = this.store
            .pipe(
              select(albumSelector.selectAllAlbums),
              /* select(this.store.pipe(select(selectAll))), */
              tap((courseLoaded) => {
                console.log("in resolver");
                if (!this.loading && !courseLoaded.length) {
                  console.log("in resolver in loop");
                  this.loading = true;
                  this.store.dispatch(albumAction.loadAllAlbums());
                }
              }),
              finalize(() => this.loading = false),
              tap(albums => {
                this.dataSource = new MatTableDataSource(albums);
                this.dataSource.paginator = this.paginator
              })
            ).subscribe()

  }

}
