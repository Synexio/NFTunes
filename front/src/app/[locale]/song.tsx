// src/musicDatabase.ts
export interface Song {
  id: number;
  title: string;
  url: string;
  artist: string;
  // image?: string; // Uncomment if you want to use image property
}

const musicDatabase: Song[] = [
  {
    id: 1,
    title: "Song One",
    url: "http://streaming.tdiradio.com:8000/house.mp3",
    artist: "Artist One",
    // image: "/public/logo.png", // Update this to be a valid path
  },
  {
    id: 2,
    title: "Song Two",
    url: "https://pixabay.com/fr/music/beats-velvet-sky-lofi-ambient-231924/",
    artist: "Artist Two",
    // image: "/path/to/album2.jpg",
  },
  {
    id: 3,
    title: "Another Song",
    url: "/music/song3.mp3",
    artist: "Artist Three",
    // image: "/path/to/album3.jpg",
  },
];

// Default export for the music database
export default musicDatabase;
