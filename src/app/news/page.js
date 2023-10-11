import * as React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Hero from "@/components/Hero";
import News from "@/components/News";

const news = [
  {
    title: "Student Council Election Updates",
    date: "Sept 12",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/sEgodrJdMGw",
    imageLabel: "Image Text",
  },
  {
    title: "Registration for Science Fair Is Now Open",
    date: "Oct 15",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/505eectW54k",
    imageLabel: "Image Text",
  },
  {
    title: "Back to School - All You Need to Know",
    date: "Nov 07",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/OyCl7Y4y0Bk",
    imageLabel: "Image Text",
  },
];

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
      <Hero
        imgSrc={"https://source.unsplash.com/U4zpPfvogJ4/2688x2096"}
        givenAlt={"Rock Climbing"}
      />
      <Container
        maxWidth="lg"
        sx={{ justifyContent: "centre", alignItems: "centre", pb: 4 }}
      >
        <Paper elevation={4} sx={{ mb: 4 }}>
          <Typography
            align="center"
            variant="h2"
            sx={{ py: 8, color: "primary.main", fontWeight: "medium" }}
          >
            NEWS
          </Typography>
        </Paper>
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "center",
            pb: 4,
          }}
        >
          {news.map((post) => (
            <News
              key={post.title}
              // Adjust to have appropriate width for given image
              bp={{ xs: 200, sm: 425, lg: 500 }}
              post={post}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
