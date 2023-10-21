import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import heroHome from "@/img/landingpage.png";
import Hero from "@/components/Hero";
import News from "@/components/News";
import EventsAccordion from "@/components/Events/EventsAccordion";
import MoreInfo from "@/components/MoreInfo";
import founder from "@/img/founder.jpg";

const welcomeinfo = {
  title: "Welcome to Center For Early Education (CFESchool)",
  description:
    "Center For Early Education (CFESchool) was founded in 1980, by Beverly Anne Russel-Lockhart as one of the first preschools in the Bahamas. Our goal is to provide a nurturing and stimulating environment for young children to learn and grow into leaders and pillars of their community.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Learn More",
};

const news = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

const events = [
  {
    title: "Board Meeting",
    date: "August 24, 7:00 PM - 9:00 PM",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Labour Day",
    date: "September 4, All Day",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "First Day of School for Students",
    date: "September 5, All Day",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Governance and Policy Committee Meeting",
    date: "September 5, 7:00 PM - 9:00 PM",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Board Meeting",
    date: "September 7, 7:00 PM - 9:00 PM",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Student Achievement Committee Meeting",
    date: "October 12, 10:00AM  - 10:00 PM",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
];

// Transitions would be nice but without making this a client js
export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
      <Hero imgSrc={heroHome.src} givenAlt={"Landing Image"} />
      <Container
        maxWidth="lg"
        sx={{ flexDirection: "column", bgcolor: "#F3F3F3", pb: 8 }}
      >
        <Grid container sx={{ justifyContent: "center", height: 1 }}>
          <Grid item md={6}>
            <Paper sx={{ p: { xs: 6, lg: 8 }, height: "100%" }}>
              <Paper sx={{ position: "relative", py: 20, mb: 8 }}>
                <Image
                  alt="Founder"
                  src={founder.src}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Paper>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: "medium",
                  mb: 4,
                  color: "primary.main",
                }}
              >
                {welcomeinfo.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {welcomeinfo.description}
              </Typography>
              <MUILink
                variant="subtitle1"
                href="/ourschool"
                component={NextLink}
              >
                {welcomeinfo.linkText}
              </MUILink>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper sx={{ bgcolor: "primary.main", p: { xs: 6, lg: 8 }, height: "100%"  }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "medium", color: "white", mb: 4 }}
              >
                Upcoming Events
              </Typography>
              {/* Can be converted to horizontal with calendar and 4 upcoming events */}
              <EventsAccordion events={events} />
            </Paper>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "medium", color: "primary.main" }}
            >
              NEWS
            </Typography>
            <Divider sx={{ mb: 4 }} />
            <Grid container spacing={2} sx={{ flexDirection: "row" }}>
              {news.map((post) => (
                <News
                  key={post.title}
                  bp={{ xs: 200, sm: 250, lg: 250 }}
                  post={post}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <MoreInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
