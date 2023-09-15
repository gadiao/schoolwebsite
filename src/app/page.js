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
import EventsBar from "@/components/EventsBar";
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

const eventsbar = {
  events: [
    { title: "Board Meeting", date: "August 24, 7:00 PM - 9:00 PM", url: "#" },
    { title: "Labour Day", date: "September 4, All Day", url: "#" },
    {
      title: "First Day of School for Students",
      date: "September 5, All Day",
      url: "#",
    },
    {
      title: "Governance and Policy Committee Meeting",
      date: "September 5, 7:00 PM - 9:00 PM",
      url: "#",
    },
    {
      title: "Board Meeting",
      date: "September 7, 7:00 PM - 9:00 PM",
      url: "#",
    },
    { title: "Labour Day", date: "September 9, 10:00AM  - 10:00 PM", url: "#" },
    {
      title: "First Day of School for Students",
      date: "September 12, 10:00AM  - 10:00 PM",
      url: "#",
    },
    {
      title: "Student Achievement Committee Meeting",
      date: "October 12, 10:00AM  - 10:00 PM",
      url: "#",
    },
  ],
};
export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
      <Hero imgSrc={heroHome.src} givenAlt={"Landing Image"} />
      <Container
        maxWidth="lg"
        sx={{ flexDirection: "row", bgcolor: "#F3F3F3", pb: 8 }}
      >
        <Grid container sx={{ justifyContent: "center", mb: 8 }}>
          <Grid item sm={9} md={6} sx={{ mb: { xs: 8, md: 0 } }}>
            <Card sx={{ p: 6, height: { lg: 750 } }}>
              <CardMedia sx={{ px: 2 }}>
                <Paper sx={{ position: "relative", py: 20, mb: 1 }}>
                  <Image
                    alt="Founder"
                    src={founder.src}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Paper>
              </CardMedia>
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "medium",
                    mb: 4,
                  }}
                >
                  {welcomeinfo.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {welcomeinfo.description}
                </Typography>
                <MUILink
                  variant="subtitle1"
                  href="/ourschool"
                  component={NextLink}
                >
                  {welcomeinfo.linkText}
                </MUILink>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ bgcolor: "primary.main", height: { lg: 750 } }}>
              <CardContent>
                <Box sx={{ px: 2, pt: 2 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: "medium", color: "white" }}
                  >
                    Upcoming Events
                  </Typography>
                  <Divider sx={{ mb: 5, bgcolor: "text.secondary" }} />
                </Box>
                <EventsBar title={eventsbar.title} events={eventsbar.events} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={8} sx={{ pr: { xs: 0, md: 8 } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "medium" }}
            >
              Our Latest News
            </Typography>
            <Divider sx={{ mb: 5 }} />
            <Grid container spacing={2} sx={{ flexDirection: "column" }}>
              {news.map((post) => (
                <News
                  key={post.title}
                  bp={{ xs: 200, sm: 250, lg: 250 }}
                  post={post}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item md={4}>
            <MoreInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
