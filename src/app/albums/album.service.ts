import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = "https://jsonplaceholder.typicode.com";

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(this.baseUrl+"/albums");
  }

}
