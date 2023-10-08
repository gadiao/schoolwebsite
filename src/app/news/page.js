import * as React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Hero from "@/components/Hero";
import News from "@/components/News";

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

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
      <Hero
        imgSrc={"https://source.unsplash.com/U4zpPfvogJ4/2688x2096"}
        givenAlt={"Rock Climbing"}
      />
      <Container maxWidth="lg" sx={{ flexDirection: "row", pb: 4 }}>
        <Paper sx={{ mb: 4 }}>
          <Typography
            align="center"
            variant="h2"
            sx={{ pt: 8, pb: 4, color: "primary.main", fontWeight: "medium" }}
          >
            NEWS
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{
              flexDirection: "column",
              justifyContent: "centre",
              alignItems: "centre",
              px: { xs: 5, md: 10 },
              pb: 4
            }}
          >
            {news.map((post) => (
              <News
                key={post.title}
                bp={{ xs: 200, sm: 250, lg: 300 }}
                post={post}
              />
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
