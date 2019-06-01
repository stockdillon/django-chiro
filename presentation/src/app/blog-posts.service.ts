import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:8000/api/posts';
  commentUrl = 'http://127.0.0.1:8000/api/posts/comments';

  getBlogPosts() {
    return this.http.get(this.url);
  }

  getComments() {
    return this.http.get(this.commentUrl);
  }
}
