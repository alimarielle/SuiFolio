import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";
import { sectionBg, cardStyle } from "../styles/styles.js";

export default function About() {
  const hobbies = ["Gaming", "Reading", "Music", "Traveling"];
  const skills = ["React", "MUI", "Sui Move", "JavaScript", "TypeScript"];

  return (
    <Box sx={{ py: 12, px: 2, ...sectionBg }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          About Me
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          maxWidth="720px"
          mx="auto"
          mb={6}
        >
          I’m a frontend developer passionate about blockchain and the Sui
          ecosystem. I enjoy building clean interfaces, functional dApps, and
          continuously improving my craft.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  🎮 Hobbies
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {hobbies.map((hobby) => (
                    <Chip
                      key={hobby}
                      label={hobby}
                      sx={{
                        background: "rgba(255,255,255,0.08)",
                        color: "white",
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  🧠 Skills
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        background: "rgba(77,162,255,0.15)",
                        color: "white",
                        border: "1px solid rgba(77,162,255,0.35)",
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
