import * as React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link as MUILink } from '@mui/material';
import { Box, Card, CardContent, CardMedia, Container, Paper, Typography } from '@mui/material';
import Hero from '@/components/Hero';
import founder from '@/img/founder.jpg'

const welcomeinfo = {
  title: `Principal's Welcome`,
  description:
    `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.`,
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Learn More',
};

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F3F3' }}>
      <Hero imgSrc={ "https://source.unsplash.com/E813FON0wDQ/2400x1600" } givenAlt={ "Empty Classroom" }/>
      <Container maxWidth="lg" sx={{ flexDirection: 'row', pb: 4 }}>
        <Paper>
          <Typography align='center' variant="h2" sx={{ py: 8, color: 'primary.main', fontWeight: 'medium' }}>
            OUR SCHOOL
          </Typography>
          <Card sx={{ display: "flex", flexDirection: 'row', p: 4 }} >
            <CardMedia sx={{ p: 2 }}>
              <Paper sx={{ position: 'relative', p: 20 }}>
                <Image alt="Founder" src={founder.src} fill style={{ objectFit: 'cover' }} />
              </Paper>
            </CardMedia>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium', pb: 2 }}  >
                {welcomeinfo.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {welcomeinfo.description}
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company
              </Typography>
              <MUILink variant="subtitle1" href="/ourschool" component={NextLink}>
                {welcomeinfo.linkText}
              </MUILink>
            </CardContent>
          </Card>
        </Paper>
      </Container>
    </Box>
  );
}
