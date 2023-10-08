"use client";

import * as React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function EventsAccordion(props) {
  const { events } = props;

  return (
    <React.Fragment>
      {events.map((event) => (
        <Accordion key={event.title}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1a-content"
            // id="panel1a-header"
          >
            <Grid container spacing={3}>
              <Grid item md={4}>
                <Typography align="center">{event.date}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="primary" sx={{ textOverflow: "ellipsis" }}>
                  {event.title}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>{"Address: " + event.addr}</Typography>
            <Typography>
              I’m an event description. Click here to open up the Event Editor
              and change my text.
            </Typography>
          </AccordionDetails>
          <AccordionActions sx={{ justifyContent: "center" }}>
            <Button>More Info</Button>
          </AccordionActions>
        </Accordion>
      ))}
    </React.Fragment>
  );
}

EventsAccordion.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      addr: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventsAccordion;
