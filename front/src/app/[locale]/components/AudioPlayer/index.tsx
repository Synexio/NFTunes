import React, { useRef, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface AudioPlayerProps {
  url: string;
  title: string;
  artist: string;
  image: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  url,
  title,
  artist,
  image,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Card sx={{ width: 160, position: "relative" }}>
      <CardMedia component="img" image={image} alt={title} height="140" />
      <CardContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {artist}
        </Typography>
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
      <audio ref={audioRef} src={url} />
    </Card>
  );
};

export default AudioPlayer;
