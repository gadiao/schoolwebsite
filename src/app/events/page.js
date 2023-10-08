import * as React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import Hero from "@/components/Hero";
import EventsAccordion from "@/components/Events/EventsAccordion";


// Back-end injection here for events
//============================================
// Requirements:
// - date converted to Date type
// - unique keys
// - remove previous events
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
]

export default function Events() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
      <Hero
        imgSrc={"https://source.unsplash.com/U4zpPfvogJ4/2688x2096"}
        givenAlt={"Rock Climbing"}
      />
      <Container maxWidth="lg" sx={{ flexDirection: "row", pb: 4 }}>
        <Paper>
          <Typography
            align="center"
            variant="h2"
            sx={{
              pt: 8,
              pb: 8,
              color: "primary.main",
              fontWeight: "medium",
            }}
          >
            EVENTS
          </Typography>
        </Paper>
        <EventsAccordion events={events}/>
      </Container>
    </Box>
  );
}
