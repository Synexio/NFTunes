export interface Song {
  id: number;
  title: string;
  src: string;
  author: string;
  thumbnail: string; // Uncomment if you want to use thumbnail property
}

export const tracks = [
  {
    id: 1,
    title: "Song One",
    src: "/cinematic-time-lapse-115672.mp3",
    author: "author One",
    thumbnail: "/drawing.png",
  },
  {
    id: 2,
    title: "Song Two",
    src: "https://pixabay.com/fr/music/beats-velvet-sky-lofi-ambient-231924/",
    author: "author Two",
    thumbnail: "/dbanj.png",
  },
  {
    id: 3,
    title: "Another Song",
    src: "/music/song3.mp3",
    author: "author Three",
    thumbnail: "/dbanj.png",
  },
];
