import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface comment {
  id: number;
  text: string;
  created_date: Date;
  post_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  allComments: Array<comment>;

  constructor(private http: HttpClient) { }

  // url = 'http://127.0.0.1:8000/api/posts';
  url = 'http://18.209.24.24/api/posts';
  commentUrl = 'http://127.0.0.1:8000/api/posts/comments';

  getBlogPosts() {
    return this.http.get(this.url);
  }

  getCommentsById(id: number) {
    return this.http.get(`${this.commentUrl}${id}`);
  }

  getComments() {
    return this.http.get(this.commentUrl);
  }
}
