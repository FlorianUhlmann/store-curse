import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../models/album';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[]> = this.api.getAlbums();
  albums: MatTableDataSource<Album>;


  displayedColumns: string[] = ['userId', 'id', 'title', 'getdetails'];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private api: AlbumService) {}

  ngOnInit(): void {
    this.albums$.subscribe(
      (res:Album[]) =>{
        this.albums = new MatTableDataSource(res);
        console.log(this.albums);
      }
    )
  }

  ngAfterViewInit() {
    this.albums.paginator = this.paginator;
  }

  getRecord(name: string){
    alert("Object Selected: " + name);
  }
}
