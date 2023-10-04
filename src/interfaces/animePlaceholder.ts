import { IAnime } from './IAnime';

let animePlaceholder: IAnime = {
  mal_id: 0,
  url: '',
  images: {
    jpg: {
      image_url: '',
      small_image_url: '',
      large_image_url: 'https://placehold.co/400x600'
    },
    webp: {
      image_url: '',
      small_image_url: '',
      large_image_url: 'https://placehold.co/400x600'
    }
  },
  trailer: {
    embed_url: 'https://placehold.co/600x400',
    youtube_id: '',
    url: ''
  },
  title: '',
  type: '',
  episodes: 0,
  status: '',
  score: 0,
  synopsis: '',
  year: 0,
  genres: [],
  streaming: []
}

export default animePlaceholder