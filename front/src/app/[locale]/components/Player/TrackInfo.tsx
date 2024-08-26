// components/TrackInfo.tsx
import { Box, Typography } from "@mui/material";
import { useAudioPlayerContext } from "../../context/audio-player-context";

export const TrackInfo = () => {
  const { currentTrack, listeningPoints } = useAudioPlayerContext();
  const points = listeningPoints[currentTrack.id] || 0;

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Box className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-md overflow-hidden">
        {currentTrack.thumbnail ? (
          <img
            className="w-full h-full object-cover"
            src={currentTrack.thumbnail as string}
            alt="audio avatar"
          />
        ) : (
          <Box className="flex items-center justify-center w-full h-full bg-gray-300 rounded-md">
            <span className="text-xl text-gray-600">🎵</span>
          </Box>
        )}
      </Box>
      <Box>
        <Typography variant="body1" fontWeight="bold" noWrap>
          {currentTrack.title}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {currentTrack.author}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Listening Points: {points}
        </Typography>
      </Box>
    </Box>
  );
};
