"use client"

import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function EventsAccordion(props) {
  const { events } = props;

  return (
    <React.Fragment>
      {events.map((event) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1a-content"
            // id="panel1a-header"
          >
            <Typography>{event.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
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