import { Box, Typography, Stack, IconButton } from "@mui/material";
import devconLogo from "../assets/logos/devcon.png";
import suiLogo from "../assets/logos/sui-sui-logo.png";
export default function Footer() {
  return (
    <Box sx={{ py: 6, textAlign: "center", background: "rgba(2, 6, 23, 0.8)" }}>
      <Typography variant="body1" color="text.secondary">
        &copy; Powered by DEVCON and SUI
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
        <Box
          component="img"
          src={devconLogo}
          alt="DEVCON"
          sx={{ height: 40, objectFit: "contain" }}
        />
        <Box
          component="img"
          src={suiLogo}
          alt="SUI"
          sx={{ height: 40, objectFit: "contain" }}
        />
      </Stack>
    </Box>
  );
}
