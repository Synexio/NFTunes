"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Slider,
  CardMedia,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import musicDatabase, { Song } from "../../data/song";
import VolumeControl from "./VolumeControl"; // Adjust the path as necessary

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
  const [volume, setVolume] = useState<number>(50); // Default volume
  const [isMuted, setIsMuted] = useState<boolean>(false);

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

      if (!isNaN(duration) && duration > 0) {
        setCurrentTime(currentTime);
        setDuration(duration);
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const togglePlay = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current
        ?.play()
        .catch((error) => console.log("Playback error:", error));
    }
    setIsPlaying(!isPlaying);
  };

  // Seek functionality
  const handleSeek = (event: Event, newValue: number | number[]) => {
    const newTime = (newValue as number) * (duration / 100); // Calculate new time based on percentage
    if (audioRef.current) {
      audioRef.current.currentTime = newTime; // Set the audio's current time
      setCurrentTime(newTime); // Update current time in state
      setProgress(newValue as number); // Update progress bar
    }
  };

  // Handle volume change from VolumeControl
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume / 100; // Adjust volume if unmuted
    }
  };

  // Mute/Unmute functionality
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      if (!isMuted) {
        audioRef.current.volume = 0; // Mute the audio
      } else {
        audioRef.current.volume = volume / 100; // Restore volume
      }
    }
  };

  // Add event listeners on mount and cleanup on unmount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume / 100; // Set initial volume
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration); // Update duration when metadata is loaded
      });
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [audioRef, volume]);

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
        <CardMedia
          component="img"
          image={
            typeof audioData.image === "string"
              ? audioData.image
              : audioData.image.src
          } // Handle imported images and URLs
          alt={`${audioData.title} cover`}
          sx={{
            height: 200, // Set the desired height
            width: 200, // Set the desired width
            objectFit: "cover", // Cover the entire area
            margin: "0 auto", // Center the image horizontally
          }}
        />
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
          <Box sx={{ width: "100%", marginTop: 2 }}>
            <Slider
              value={progress}
              onChange={handleSeek}
              min={0}
              max={100}
              sx={{
                color: "primary.main",
                "& .MuiSlider-thumb": {
                  height: 24,
                  width: 24,
                  backgroundColor: "white",
                  border: "2px solid currentColor",
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: "inherit",
                  },
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{ display: "block", marginTop: 1 }}
            >
              {formatTime(currentTime)} / {formatTime(duration)}
            </Typography>
          </Box>
          <VolumeControl
            volume={volume}
            onVolumeChange={handleVolumeChange}
            isMuted={isMuted}
            onMuteToggle={toggleMute}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default FullPlayer;
