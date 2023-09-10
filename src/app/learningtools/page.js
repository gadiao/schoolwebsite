import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Hero from '@/components/Hero';

export default function LearningTools() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F3F3' }}>
      <Hero imgSrc={ "https://source.unsplash.com/lUaaKCUANVI/2400x1595" } givenAlt={ "Stack of books" }/>
      <Container maxWidth="lg" sx={{ flexDirection: 'row', pb: 4 }}>
        <Paper>
          <Typography align='center' variant="h2" sx={{ pt: 8, color: 'primary.main', fontWeight: 'medium' }}>
            LEARNING TOOLS
          </Typography>
          <Typography align='center' variant='subtitle1' sx={{ pb: 8, px: { xs: 5, md: 25 }, fontWeight: 'light', letterSpacing: 1 }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
