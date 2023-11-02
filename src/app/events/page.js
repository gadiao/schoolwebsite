import * as React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import Hero from "@/components/Hero";
import MonthsTab from "@/components/Events/MonthsTab";


// Back-end injection here for events
//============================================
// Requirements:
// - date converted to Date type
// - unique keys
// - remove previous events

const Events = () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
      <Hero
        imgSrc={"https://source.unsplash.com/U4zpPfvogJ4/2688x2096"}
        givenAlt={"Rock Climbing"}
      />
      <Container maxWidth="lg" sx={{ flexDirection: "row", pb: 8 }}>
        <Paper>
          <Typography
            align="center"
            variant="h2"
            sx={{
              py: 8,
              color: "primary.main",
              fontWeight: "medium",
            }}
          >
            EVENTS
          </Typography>
        </Paper>
        {/* Failed Hydration: needs work */}
        <MonthsTab />
      </Container>
    </Box>
  );
};

export default Events;