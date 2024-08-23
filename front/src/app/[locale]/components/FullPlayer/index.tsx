// src/app/[locale]/player/[id]/page.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  LinearProgress,
  Box,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import musicDatabase, { Song } from "../../song";

interface FullPlayerProps {
  params: {
    locale: string; // Adjust based on your locale structure
    id: string; // The dynamic route parameter
  };
}

const FullPlayer: React.FC<FullPlayerProps> = ({ params }) => {
  const { id } = params; // Get the ID from the route parameters
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [audioData, setAudioData] = useState<Song | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Fetch audio data from the music database
  const fetchAudioData = (audioId: string) => {
    const songId = parseInt(audioId, 10); // Convert the string ID to a number
    const song = musicDatabase.find((song) => song.id === songId);
    if (song) {
      setAudioData(song);
    } else {
      console.error(`Song with ID ${audioId} not found.`);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAudioData(id);
    }
  }, [id]);

  // Update the progress and current time as the audio plays
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setCurrentTime(currentTime);
      setDuration(duration);
      setProgress((currentTime / duration) * 100);
    }
  };

  const togglePlay = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent unwanted routing
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Seek functionality
  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    const seekBar = event.currentTarget;
    const clickX = event.clientX - seekBar.getBoundingClientRect().left;
    const percent = clickX / seekBar.clientWidth;
    const newTime = percent * duration; // Calculate new time based on click position

    if (audioRef.current) {
      audioRef.current.currentTime = newTime; // Set the audio's current time
      setCurrentTime(newTime); // Update current time in state
    }
  };

  // Add event listeners on mount and cleanup on unmount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleTimeUpdate); // To set duration when metadata is loaded
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [audioRef]);

  if (!audioData) {
    return <div>Loading...</div>; // Optional loading state
  }

  // Format time in MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <Box sx={{ padding: 2, textAlign: "center" }}>
      <Card>
        <CardContent>
          <Typography variant="h5">{audioData.title}</Typography>
          <Typography variant="subtitle1">{audioData.artist}</Typography>
          <IconButton
            onClick={togglePlay}
            sx={{ color: "primary.main", marginTop: 2 }}
          >
            {isPlaying ? (
              <PauseIcon fontSize="large" />
            ) : (
              <PlayArrowIcon fontSize="large" />
            )}
          </IconButton>
          <audio ref={audioRef} src={audioData.url} preload="metadata" />
          <Box
            sx={{ width: "100%", cursor: "pointer", marginTop: 2 }}
            onClick={handleSeek}
          >
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ marginTop: 2 }}
            />
            <Typography
              variant="caption"
              sx={{ display: "block", marginTop: 1 }}
            >
              {formatTime(currentTime)} / {formatTime(duration)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FullPlayer;
