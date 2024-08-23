import React, { useRef, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  LinearProgress,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface AudioPlayerProps {
  url: string;
  title: string;
  artist: string;
  // image: string; // Uncomment if you want to use an image
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  url,
  title,
  artist,
  // image, // Uncomment if you want to use an image
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(10); // 10-second timer
  const [progress, setProgress] = useState<number>(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
      startCountdown();
    }
    setIsPlaying(!isPlaying);
  };

  const startCountdown = () => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          audioRef.current?.pause();
          setIsPlaying(false);
          return 10; // Reset timer
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    const percentage = ((10 - remainingTime) / 10) * 100;
    setProgress(percentage);
  }, [remainingTime]);

  return (
    <Card sx={{ width: 250, position: "relative" }}>
      {/* Uncomment if you want to use an image
      <CardMedia
        component="img"
        image={image}
        height="140"
      /> */}
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle2">{artist}</Typography>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          margin: 1,
          padding: 1,
        }}
      >
        <IconButton onClick={togglePlay} sx={{ color: "white" }}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Box>
      <audio ref={audioRef} src={url} onEnded={() => setIsPlaying(false)} />

      {/* Countdown Timer Visual */}
      <Box sx={{ padding: 1 }}>
        <LinearProgress variant="determinate" value={progress} />
        <Typography
          variant="caption"
          sx={{ textAlign: "center", display: "block", marginTop: 1 }}
        >
          {remainingTime} seconds left
        </Typography>
      </Box>
    </Card>
  );
};

export default AudioPlayer;
