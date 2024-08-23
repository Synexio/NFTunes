import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type PodcastCardProps = {
  image: string;
  title: string;
  date: string;
  duration: string;
};

const PodcastCard = ({ image, title, date, duration }: PodcastCardProps) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia component="img" image={image} alt={title} height="140" />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {date} · {duration}
        </Typography>
        <Typography variant="subtitle1">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
