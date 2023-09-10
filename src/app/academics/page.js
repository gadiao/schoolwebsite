import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Paper, Typography }from '@mui/material';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F3F3' }}>
      <Hero imgSrc={ "https://source.unsplash.com/zFSo6bnZJTw/2400x1493" } givenAlt={ "Full Classroom" }/>
      <Container maxWidth="lg" sx={{ flexDirection: 'row', pb: 8 }}>
        <Paper>
          <Typography align='center' variant="h2" sx={{ pt: 8, color: 'primary.main', fontWeight: 'medium' }}>
            OUR ACADEMICS
          </Typography>
          
        </Paper>
      </Container>
    </Box>
  );
}
