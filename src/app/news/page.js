import * as React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import Hero from "@/components/Hero";
import NewsTab from "@/components/News/NewsTab";

const NewsPage = () => {
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
        <NewsTab />
      </Container>
    </Box>
  );
};

export default NewsPage;
