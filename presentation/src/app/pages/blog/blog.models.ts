export interface BlogPost {
  test: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  updated_on: string;
  created_on: string;
  publish_on: string;
}
export interface BlogPostComment {
  id: number;
  post_id: number;
  text: string;
  created_date: Date;
}
