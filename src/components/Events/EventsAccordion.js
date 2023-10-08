"use client"

import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from '@mui/icons-material/Circle';

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
              <Grid item md={2.5}>
                <Typography align='center'>{event.date}</Typography>
              </Grid>
              <Grid item>
                <CircleIcon color="primary"/>
              </Grid>
              <Grid item>
                <Typography variant="h6">{event.title}</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>{"Address: " + event.addr}</Typography>

            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
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