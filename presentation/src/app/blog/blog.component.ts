import { Component, OnInit } from '@angular/core';
import { BlogPostsService } from '../blog-posts.service';

export interface Post{
  id: number;
  title: string;
  content: string;
  updated_on: string;
  created_on: string;
  publish_on: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPostsService : BlogPostsService;
  posts: Post[];

  constructor( blogPostsService: BlogPostsService) {
    this.blogPostsService = blogPostsService;
  }

  ngOnInit() {
    this.blogPostsService.getBlogPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      posts.forEach(post => {
        console.log(`title: ${post.title}`);
      });
      // console.log(`Result of service: ${result.title}`);
    })
  }

}
