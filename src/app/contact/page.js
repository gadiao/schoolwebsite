import * as React from 'react';
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F3F3' }}>
      {/* Change to an active map where the school is */}
      <Hero imgSrc={ "https://source.unsplash.com/AFB6S2kibuk/2400x1600" } givenAlt={ "Maps" }/>
      <Container maxWidth="lg" sx={{ flexDirection: 'row', pb: 4 }}>

      </Container>
    </Box>
  );
}
