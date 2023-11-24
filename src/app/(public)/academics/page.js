import * as React from "react";
import { Box, Container, Fade, Paper, Typography } from "@mui/material";
import { Hero } from "@/app/_components";
import Subjects from "@/components/academics/Subjects";

const Academics = () => {
  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
        <Hero
          imgSrc={"https://source.unsplash.com/zFSo6bnZJTw/2400x1493"}
          givenAlt={"Full Classroom"}
        />
        <Container maxWidth="lg" sx={{ flexDirection: "row", pb: 8 }}>
          <Paper>
            <Typography
              align="center"
              variant="h2"
              sx={{ pt: 8, pb: 2, color: "primary.main", fontWeight: "medium" }}
            >
              ACADEMICS
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              sx={{
                pb: 8,
                px: { xs: 5, md: 25 },
                fontWeight: "light",
                letterSpacing: 1,
              }}
            >
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </Typography>
            {/* Iterate through icons by passing component as a prop */}
            {/* https://www.developerway.com/posts/react-component-as-prop-the-right-way */}
            <Subjects />
          </Paper>
        </Container>
      </Box>
    </Fade>
  );
};

export default Academics