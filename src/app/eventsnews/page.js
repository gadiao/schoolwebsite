import * as React from 'react';
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F3F3' }}>
      <Hero imgSrc={ "https://source.unsplash.com/U4zpPfvogJ4" } givenAlt={ "Rock Climbing" }/>
      <Container maxWidth="lg" sx={{ flexDirection: 'row', pb: 4 }}>

      </Container>
    </Box>
  );
}
