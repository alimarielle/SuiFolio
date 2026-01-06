import { Box, Typography, Container, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Landing() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(2, 6, 23, 0.8)",
        textAlign: "center",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" color="secondary" gutterBottom>
          Hi, I’m Allyza Goyon
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Exploring Move + Sui, building dApps, and creating modern, aesthetic web experiences.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/about"
          sx={{ mt: 4, px: 4, py: 1.5, fontSize: "1.1rem" }}
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
}
