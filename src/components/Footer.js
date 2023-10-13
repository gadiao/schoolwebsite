"use client";

import * as React from "react";
import { useRef } from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import {
  Box,
  Card,
  CardMedia,
  Fade,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logocaption from "@/img/logocaption.jpg";
import useAnimate from "@/components/useAnimate";

const sections = [
  { title: "Home", url: "/" },
  { title: "Our School", url: "/ourschool" },
  { title: "Academics", url: "/academics" },
  { title: "Admissions", url: "/admissions" },
  { title: "Events", url: "/events" },
  { title: "News", url: "/news" },
  { title: "Contact", url: "/contact" },
];

function Copyright() {
  return (
    <Typography>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        CREF
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "primary.main",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "lg",
          bgcolor: "inherit",
          color: "#fff",
          p: 4,
          justifyContent: "space-around",
        }}
        ref={animRef}
      >
        <Fade in={animate} timeout={800}>
          <Grid item>
            <Card>
              <CardMedia>
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
              </CardMedia>
            </Card>
          </Grid>
        </Fade>
        <Fade in={animate} timeout={1600}>
          <Grid item>
            <Typography variant="body1" sx={{ color: "text.secondary" }} gutterBottom>
              QUICK NAVIGATION
            </Typography>
            <Grid container>
              <List>
                <nav aria-label="navbar">
                  {sections.slice(0, 4).map((section) => (
                    <MUILink
                      color="inherit"
                      key={section.title}
                      href={section.url}
                      underline="hover"
                      component={NextLink}
                    >
                      <ListItem disablePadding>
                        <ListItemButton disableGutters>
                          <ListItemText
                            primary={section.title}
                            primaryTypographyProps={{
                              variant: "subtitle1",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </MUILink>
                  ))}
                </nav>
              </List>
              <List>
                <nav aria-label="navbar">
                  {sections.slice(4).map((section) => (
                    <MUILink
                      color="inherit"
                      key={section.title}
                      href={section.url}
                      underline="hover"
                      component={NextLink}
                    >
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText 
                            primary={section.title}
                            primaryTypographyProps={{
                              variant: "subtitle1",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </MUILink>
                  ))}
                </nav>
              </List>
            </Grid>
          </Grid>
        </Fade>
        <Fade in={animate} timeout={2400}>
          <Grid item>
            <Typography gutterBottom sx={{ color: "text.secondary", mb: 3 }}>
              CONTACT US
            </Typography>
            <Typography gutterBottom>
              500 Terry Francine Street,
            </Typography>
            <Typography gutterBottom>
              San Francisco, CA 94158
            </Typography>
            <Typography gutterBottom>
              Tel: 123-456-7890
            </Typography>
            <Typography gutterBottom>
              Email: info@mysite.com
            </Typography>
            <Copyright />
          </Grid>
        </Fade>
      </Grid>
    </Box>
  );
}
