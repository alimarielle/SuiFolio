import { Box, Typography, Container, Stack, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Links() {
  return (
    <Box sx={{ py: 12, px: 2, ...sectionBg }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Connect with Me
        </Typography>

        <Typography color="text.secondary" mb={4}>
          Let’s build something meaningful together.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          {[
            { label: "GitHub", icon: <GitHubIcon />, href: "#" },
            { label: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
            { label: "Twitter", icon: <TwitterIcon />, href: "#" },
          ].map((link) => (
            <Button
              key={link.label}
              startIcon={link.icon}
              href={link.href}
              target="_blank"
              sx={{
                px: 4,
                py: 1.2,
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.05)",
                "&:hover": {
                  background: "rgba(77,162,255,0.15)",
                  borderColor: "#4DA2FF",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
