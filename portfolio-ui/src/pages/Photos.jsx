import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";

const images = [
  "https://placekitten.com/300/200",
  "https://placekitten.com/301/200",
  "https://placekitten.com/302/200",
  "https://placekitten.com/303/200",
  "https://placekitten.com/304/200",
  "https://placekitten.com/305/200",
];

export default function Photos() {
  return (
    <Box sx={{ py: 12, px: 2, ...sectionBg }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Photos
        </Typography>

        <Grid container spacing={2} mt={4}>
          {images.map((img, i) => (
            <Grid item xs={6} sm={4} key={i}>
              <Card
                sx={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  alt={`Photo ${i}`}
                  sx={{ transition: "0.3s", "&:hover": { opacity: 0.85 } }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
