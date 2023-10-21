"use client";

import * as React from 'react';
import PropTypes from 'prop-types';
import { Fade, Paper } from '@mui/material';
import Image from 'next/image';

function Hero(props) {
  const { imgSrc, givenAlt } = props;

  return (
    <Fade in={true} timeout={800}>
      <Paper elevation={4} sx={{ position: 'relative', height: 650 }}>
        <Image
          alt={ givenAlt }
          src={ imgSrc }
          fill
          quality={85}
          style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
          priority
        />
      </Paper>
    </Fade>
    
  );
}

Hero.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  givenAlt: PropTypes.string.isRequired,
};

export default Hero;