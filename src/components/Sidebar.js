import * as React from 'react';
import PropTypes from 'prop-types';
import { Divider, Grid, Link, Typography } from '@mui/material';

function Sidebar(props) {
  const { archives, title } = props;

  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider sx={{ mb: 3 }}/>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired
};

export default Sidebar;
