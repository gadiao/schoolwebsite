import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

function Subjects(props) {
  const { member } = props;

  return (
    <Grid xs={12} sm={4} sx={{ pb: 8 }}>
      <Typography align='center' variant='h5' gutterBottom>
        {member.name}
      </Typography>
      <Typography align='center' variant='subtitle1' sx={{ pb: 2 }}>
        {member.title}
      </Typography>
      <Typography align='center' variant='subtitle1'>
        {member.email}
      </Typography>
      <Typography align='center' variant='subtitle1'>
        {member.phone}
      </Typography>
    </Grid>
  );
}

Subjects.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired,
};

export default Staff;
