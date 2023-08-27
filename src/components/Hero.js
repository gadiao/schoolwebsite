import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Link, Paper, Typography} from '@mui/material';
import Image from 'next/image';
import landingpage from '@/img/landingpage.png'

function Hero(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        py: 26,
        mb: 10,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${landingpage.src})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* Update Hero image to have higher priority */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              mt: 10,
              mx: { xs: 8, xl: 24 },
              p: 3,
              bgcolor: 'primary.main',
              opacity: 0.8,
            }}
          >
            <Typography variant="h4" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="body2" color="#fff" href="#">
              {post.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

Hero.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
