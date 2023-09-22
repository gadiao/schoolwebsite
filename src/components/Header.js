"use client";

import * as React from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logocaption from "@/img/logocaption.jpg";

const sections = [
  { title: "HOME", url: "/" },
  { title: "OUR SCHOOL", url: "/ourschool" },
  { title: "ACADEMICS", url: "/academics" },
  { title: "ADMISSIONS", url: "/admissions" },
  { title: "EVENTS", url: "/events" },
  { title: "NEWS", url: "/news" },
  { title: "LEARNING TOOLS", url: "/learningtools" },
  { title: "CONTACT", url: "/contact" },
];

function TopBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // React Component as an arrow function in a function
  const NavList = () => {
    return (
    <Box
      role="presentation"
      onClick={() => { handleClose() }}
      sx={{ px: 1, flexShrink: 0 }}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="LOGIN" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider variant='middle'/>
      <List>
        {sections.map((section) => (
          <MUILink
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            underline="hover"
            component={NextLink}
          >
            <ListItem>
              <ListItemButton>
                <ListItemText primary={section.title} />
              </ListItemButton>
            </ListItem>
          </MUILink>
        ))}
      </List>
    </Box>
    );
  };
  return (
    <Toolbar
      variant="dense"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "#FDFDFD",
        color: "black",
        justifyContent: { xs: "space-around", md: "flex-end" },
      }}
    >
      <Paper
        elevation={0}
        sx={{ display: { xs: "flex", md: "none" }, ml: { xs: 5, sm: 20 } }}
      >
        <MUILink href="/" component={NextLink}>
          <Image
            alt="Logo with Caption"
            src={logocaption}
            width={200}
            height={150}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            priority
          />
        </MUILink>
      </Paper>
      {/* Login Button here****************************** */}
      <Button startIcon={<AccountCircle />} sx={{ display: { xs: "none", md: "flex" }, color: 'grey.600' }}>
        LOGIN
      </Button>
      <IconButton onClick={() => { handleOpen() }} sx={{ display: { xs: "flex", md: "none" }, ml: 20 }}>
        <MenuIcon sx={{ fontSize: 35 }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <NavList />
      </Drawer>
    </Toolbar>
  );
}

export default function Header() {
  return (
    <AppBar position="relative" sx={{ zIndex: "drawer" }}>
      <TopBar />
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          color: "white",
          height: 50,
        }}
      >
        <Paper
          elevation={4}
          sx={{ alignSelf: "flex-start", width: 200, height: 150 }}
        >
          <MUILink href="/" component={NextLink}>
            <Image
              alt="Logo with Caption"
              src={logocaption}
              width={200}
              height={150}
              style={{ objectFit: "cover" }}
              priority
            />
          </MUILink>
        </Paper>
        {sections.map((section) => (
          <MUILink
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            underline="hover"
            sx={{ px: 2, flexShrink: 0 }}
            component={NextLink}
          >
            {section.title}
          </MUILink>
        ))}
      </Toolbar>
      <Divider
        sx={{
          display: { xs: "block", md: "none" },
          bgcolor: "primary.main",
          py: 0.5,
        }}
      />
    </AppBar>
  );
}
