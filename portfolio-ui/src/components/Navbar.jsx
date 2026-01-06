import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Photos", path: "/photos" },
  { label: "Links", path: "/links" },
];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(2, 6, 23, 0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar sx={{ maxWidth: "lg", mx: "auto", width: "100%" }}>
        {/* Logo */}
        <Typography
          component={NavLink}
          to="/"
          variant="h6"
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Sui<span style={{ color: "#4DA2FF" }}>Folio</span>
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={2}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
                position: "relative",
                color: "white",
                opacity: 0.7,
                textTransform: "none",
                transition: "all 0.25s ease",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  bottom: 4,
                  width: 0,
                  height: "2px",
                  backgroundColor: "#4DA2FF",
                  transition: "all 0.25s ease",
                },

                "&:hover": {
                  opacity: 1,
                },

                "&:hover::after": {
                  width: "60%",
                  left: "20%",
                },

                "&.active": {
                  opacity: 1,
                  color: "#4DA2FF",
                },

                "&.active::after": {
                  width: "60%",
                  left: "20%",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
