import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  public async getPosts(): Promise<Post[]> {
    return await this.http.get<Post[]>(
      environment.wpPosts, {
        headers: new HttpHeaders({'content-type': 'application/json'})
      }).toPromise()
  }
}
