import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Image from 'next/image';
import landingpage from '@/img/landingpage.png'

export default function Hero() {

  return (
    <Paper sx={{ position: 'relative', py: 30,  mb: 10 }}>
      <Image
        alt="Landing Image"
        src={landingpage.src}
        fill
        style={{ objectFit: 'cover', }}
      />
    </Paper>
  );
}
