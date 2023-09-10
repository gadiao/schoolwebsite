import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Hero from '@/components/Hero';
import Staff from '@/components/Staff';
import founder from '@/img/founder.jpg'

const welcomeinfo = {
  title: `Principal's Welcome`,
  description:
    `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.`,
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Learn More',
};

const staff = [
  {
    name: 'Mr. Russel-Lockhart',
    title: 'PRINCIPAL',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Ms. Bailey',
    title: 'ASSISTANT PRINCIPAL',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Ms. Miller',
    title: 'PARENT COORDINATOR',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Ms. Allen',
    title: 'PARENT COORDINATOR',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Ms. Judy',
    title: 'TEACHER - SOCIAL STUDIES',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Mr. Anderson',
    title: 'TEACHER - PHYSICAL EDUCATION',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Ms. Young',
    title: 'TEACHER - PHYSICAL EDUCATION',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Ms. Garcia',
    title: 'TEACHER - SCIENCE',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
]

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F3F3' }}>
      <Hero imgSrc={ "https://source.unsplash.com/E813FON0wDQ/2400x1600" } givenAlt={ "Empty Classroom" }/>
      <Container maxWidth="lg" sx={{ flexDirection: 'row', pb: 8 }}>
        <Paper>
          <Typography align='center' variant="h2" sx={{ pt: 8, pb: 2, color: 'primary.main', fontWeight: 'medium' }}>
            OUR SCHOOL
          </Typography>
          <Typography align='center' variant='subtitle1' sx={{ pb: 8, px: { xs: 5, md: 25 } }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
          </Typography>
          <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' }, pb: 6, px: 2 }} >
            <Grid item md={6} sx={{ px: 4 }}>
              <Paper sx={{ position: 'relative', py: 25 }}>
                <Image alt="Founder" src={founder.src} fill style={{ objectFit: 'cover' }} />
              </Paper>
            </Grid>
            <Grid item md={6} sx={{ px: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium', pb: 2 }}  >
                {welcomeinfo.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {welcomeinfo.description}
              </Typography>
              <Typography variant="body1" paragraph>
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium', pt: 8 }}  >
               B.A.Russel-Lockhart, Founder 
              </Typography>
            </Grid>
          </Grid>
          {/* Uses 2nd website template from here */}
          <Typography align='center' variant="h2" sx={{ py: 8, color: 'primary.main', fontWeight: 'medium' }}>
            STAFF DIRECTORY
          </Typography>
          <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' }, px: 3 }}>
            {staff.map((member) => (
              <Staff key={member.title} member={member}/>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
