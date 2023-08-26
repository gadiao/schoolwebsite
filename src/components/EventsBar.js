'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Divider, Grid, Link, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

function Sidebar(props) {
  const { events } = props;

  return (
    <Grid item xs={12} md={8}>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 1,
          },
        }}
      >
        {events.map((event) => (
          <TimelineItem key={event.title}>
            <TimelineOppositeContent color="textSecondary">
              {event.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Link href={event.url}>
                {event.title}
              </Link>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Grid>
  );
}

Sidebar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired
};

export default Sidebar;
