import { Box, Typography, Button } from "@mui/material";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Button variant="text" color="primary">
        Show all
      </Button>
    </Box>
  );
};

export default SectionHeader;
