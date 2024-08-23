import { Box, Typography, Avatar } from "@mui/material";

type ArtistCardProps = {
  image: string;
  name: string;
  role: string;
};

const ArtistCard = ({ image, name, role }: ArtistCardProps) => {
  return (
    <Box sx={{ textAlign: "center", width: 120 }}>
      <Avatar
        alt={name}
        src={image}
        sx={{ width: 100, height: 100, margin: "0 auto" }}
      />
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body2" color="textSecondary">
        {role}
      </Typography>
    </Box>
  );
};

export default ArtistCard;
