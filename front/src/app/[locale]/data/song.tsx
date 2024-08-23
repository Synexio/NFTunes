import { StaticImageData } from "next/image";

export interface Song {
  id: number;
  title: string;
  url: string;
  artist: string;
  image: string | StaticImageData; // Uncomment if you want to use image property
}

const musicDatabase: Song[] = [
  {
    id: 1,
    title: "Song One",
    url: "/cinematic-time-lapse-115672.mp3",
    artist: "Artist One",
    image: "/drawing.png",
  },
  {
    id: 2,
    title: "Song Two",
    url: "https://pixabay.com/fr/music/beats-velvet-sky-lofi-ambient-231924/",
    artist: "Artist Two",
    image: "/dbanj.png",
  },
  {
    id: 3,
    title: "Another Song",
    url: "/music/song3.mp3",
    artist: "Artist Three",
    image: "/dbanj.png",
  },
];

// Default export for the music database
export default musicDatabase;
