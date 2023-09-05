import * as React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import Image from 'next/image';

function Hero(props) {
  const { imgSrc, givenAlt } = props;

  return (
    <Paper elevation={4} sx={{ position: 'relative', height: 500 }}>
      <Image
        alt={ givenAlt }
        src={ imgSrc }
        fill
        quality={65}
        style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
        priority
      />
    </Paper>
  );
}

Hero.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  givenAlt: PropTypes.string.isRequired,
};

export default Hero;