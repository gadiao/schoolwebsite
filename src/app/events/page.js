import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Hero from "@/components/Hero";

function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

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
            sx={{ pt: 8, pb: 8, mb: 2, color: "primary.main", fontWeight: "medium" }}
          >
            EVENTS
          </Typography>
        </Paper>
        <BasicAccordion />
      </Container>
    </Box>
  );
}
