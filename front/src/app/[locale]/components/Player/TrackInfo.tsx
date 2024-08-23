// components/TrackInfo.tsx
import { BsMusicNoteBeamed } from "react-icons/bs";
import { useAudioPlayerContext } from "../../context/audio-player-context";
import { Box, Typography } from "@mui/material";

export const TrackInfo = () => {
  const { currentTrack } = useAudioPlayerContext();

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Box className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-md overflow-hidden">
        {currentTrack.thumbnail ? (
          <img
            className="w-full h-full object-cover"
            src={currentTrack.thumbnail}
            alt="audio avatar"
          />
        ) : (
          <Box className="flex items-center justify-center w-full h-full bg-gray-300 rounded-md">
            <span className="text-xl text-gray-600">
              <BsMusicNoteBeamed />
            </span>
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
      </Box>
    </Box>
  );
};
