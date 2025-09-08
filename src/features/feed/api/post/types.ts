export interface GetPostsParams {
  page: number
  limit: number
}

export interface Post {
  id: number
  image: string
  content: string
  author: Author
  likeCount: number
  commentCount: number
}

export interface Author {
  id: number
  name: string
  email: string
  avatarUrl: string
}
