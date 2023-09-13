import * as React from 'react';
import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import Hero from '@/components/Hero';

export default function Admissions() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F3F3' }}>
      <Hero imgSrc={ "https://source.unsplash.com/16kXp6HKIyo/2400x1600" } givenAlt={ "Notebook" }/>
      <Container maxWidth="lg" sx={{ flexDirection: 'row', pb: 4 }}>
        <Paper>
          <Typography align='center' variant="h2" sx={{ pt: 8, pb: 2, color: 'primary.main', fontWeight: 'medium' }}>
            ADMISSIONS
          </Typography>
          <Typography align='center' variant='subtitle1' sx={{ pb: 8, px: { xs: 5, md: 25 }, fontWeight: 'light', letterSpacing: 1 }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
          </Typography>
          <Grid container sx={{ px: 2, py: 4, alignItems: 'center', justifyContent: 'center' }}>
            <Grid item xs={12} sm={4} sx={{ px: 4, mb: 4 }}>
              <Typography variant='h3' color='primary.main' align='center' sx={{ mb: 2 }}>01.</Typography>
              <Typography variant='subtitle2' align='center' sx={{ mx: 2 }}>
                Download this PDF form and fill in all the correct details!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ px: 4, mb: 4 }}>
              <Typography variant='h3' color='primary.main' align='center' sx={{ mb: 2 }}>02.</Typography>
              <Typography variant='subtitle2' align='center'>
                Bring or send your form to the following address: info@mysite.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ px: 4, mb: 4 }}>
              <Typography variant='h3' color='primary.main' align='center' sx={{ mb: 2 }}>03.</Typography>
              <Typography variant='subtitle2' align='center'>
                Pay the $35 administrative fee - payable on line via this link
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" sx={{ mx: { xs: 20, md: 50 }, mb: 4 }}/>
          <Typography variant='body2' align='center' sx={{ mx: { xs: 5, md: 25}, pb: 8 }}>We shall process your admission and update you with our final decision within 60 days of receiving payment and all documentation.</Typography>
        </Paper>
      </Container>
    </Box>
  );
}
