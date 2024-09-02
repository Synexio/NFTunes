export interface MusicAlbum {
  _id: string;
  name: string;
  author: string;
  img: string;
  // tokenId: number;
}
export interface Music {
  _id: string;
  name: string;
  author: string;
  genre: string;
  audio: string;
  album_img: string;
  tokenId: number;
}
