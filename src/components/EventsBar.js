'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

function Sidebar(props) {
  const { events } = props;

  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 1,
        },
      }}
    >
      {events.map((event) => (
        <TimelineItem key={event.title}>
          <TimelineOppositeContent color="textSecondary" sx={{ typography: 'body1' }}>
            {event.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Link href={event.url} sx={{ color: 'white', typography: 'subtitle1' }}>
              {event.title}
            </Link>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

Sidebar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired
};

export default Sidebar;
