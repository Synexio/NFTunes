import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

type AlbumCardProps = {
  image: string;
  title: string;
  artist: string;
};

const AlbumCard = ({ image, title, artist }: AlbumCardProps) => {
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
        <PlayArrowIcon sx={{ color: "white" }} />
      </Box>
    </Card>
  );
};

export default AlbumCard;
