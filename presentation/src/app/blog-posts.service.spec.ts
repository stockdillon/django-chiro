import { TestBed } from '@angular/core/testing';

import { BlogPostsService } from './blog-posts.service';

describe('BlogPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogPostsService = TestBed.get(BlogPostsService);
    expect(service).toBeTruthy();
  });
});
