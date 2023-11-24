import * as React from "react";
import { Box, Container, Fade, Paper, Typography } from "@mui/material";
import { Hero } from "@/app/_components";
import NewsTab from "@/components/news/NewsTab";

const NewsPage = () => {
  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
        <Hero
          imgSrc={"https://source.unsplash.com/lUaaKCUANVI/2400x1595"}
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
          <NewsTab />
        </Container>
      </Box>
    </Fade>
  );
};

export default NewsPage;