"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { tracks } from "../data/tracks";

interface AudioPlayerContextType {
  currentTrack: (typeof tracks)[number];
  setCurrentTrack: (track: (typeof tracks)[number]) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  duration: number;
  setDuration: (duration: number) => void;
  progressBarRef: React.RefObject<HTMLInputElement>;
  timeProgress: number;
  setTimeProgress: (time: number) => void;
  trackIndex: number;
  setTrackIndex: (index: number) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  listeningPoints: { [id: number]: number };
  setListeningPoints: (points: { [id: number]: number }) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const AudioPlayerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const progressBarRef = useRef<HTMLInputElement>(null);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [listeningPoints, setListeningPoints] = useState<{
    [id: number]: number;
  }>({});

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setListeningPoints((prevPoints) => ({
          ...prevPoints,
          [currentTrack.id]: (prevPoints[currentTrack.id] || 0) + 1,
        }));
      }, 10000); // Adds a point every 10 seconds
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentTrack]);

  return (
    <AudioPlayerContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
        audioRef,
        duration,
        setDuration,
        progressBarRef,
        timeProgress,
        setTimeProgress,
        trackIndex,
        setTrackIndex,
        isPlaying,
        setIsPlaying,
        listeningPoints,
        setListeningPoints,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error(
      "useAudioPlayerContext must be used within an AudioPlayerProvider"
    );
  }
  return context;
};
