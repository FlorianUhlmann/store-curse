import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly baseUrl: string = 'https://jsonplaceholder.typicode.com';
  constructor(private readonly httClient: HttpClient) {}

  getPost(): Observable<Post[]> {
    const url: string = `${this.baseUrl}/posts`;
    return this.httClient.get<Post[]>(url);
  }
}
