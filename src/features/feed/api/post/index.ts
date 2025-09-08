import { httpClient } from '@/lib/fetcher'
import type { Response } from '@/lib/fetcher/types'

import type { Author, GetPostsParams, Post } from './types'

interface Photo {
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export const getPosts = async ({ page, limit }: GetPostsParams) => {
  const data = await httpClient.get<Photo[]>(
    'https://jsonplaceholder.typicode.com/photos',
  )

  const authorMocks: Author[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarUrl: 'https://jsonplaceholder.typicode.com/photos/1',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      avatarUrl: 'https://jsonplaceholder.typicode.com/photos/2',
    },
    {
      id: 3,
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      avatarUrl: 'https://jsonplaceholder.typicode.com/photos/3',
    },
    {
      id: 4,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      avatarUrl: 'https://jsonplaceholder.typicode.com/photos/4',
    },
  ]

  const newRes: Response<Post[]> = {
    data: data.slice(page * limit, (page + 1) * limit).map((item) => ({
      id: item.id,
      image: `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 100)}`,
      content: item.title,
      author: authorMocks[Math.floor(Math.random() * authorMocks.length)],
      commentCount: Math.floor(Math.random() * 100),
      likeCount: Math.floor(Math.random() * 100),
    })),
    meta: {
      total: data.length,
      page,
      limit,
    },
  }

  return newRes
}
