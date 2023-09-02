import * as React from 'react';
import Image from 'next/image';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Link, Paper, Typography } from '@mui/material';
import Hero from '@/components/Hero';
import News from '@/components/News';
import EventsBar from '@/components/EventsBar';
import MoreInfo from '@/components/MoreInfo';
import founder from '@/img/founder.jpg'

const welcomeinfo = {
  title: 'Welcome to Center For Early Education (CFESchool)',
  description:
    "Center For Early Education (CFESchool) was founded in 1980, by Beverly Anne Russel-Lockhart as one of the first preschools in the Bahamas. Our goal is to provide a nurturing and stimulating environment for young children to learn and grow into leaders and pillars of their community.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Learn More',
};

const news = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const eventsbar = {
  events: [
    { title: 'Board Meeting', date: 'August 24, 7:00 PM - 9:00 PM', url: '#' },
    { title: 'Labour Day', date: 'September 4, All Day', url: '#' },
    { title: 'First Day of School for Students', date: 'September 5, All Day', url: '#' },
    { title: 'Governance and Policy Committee Meeting', date: 'September 5, 7:00 PM - 9:00 PM', url: '#' },
    { title: 'Board Meeting', date: 'September 7, 7:00 PM - 9:00 PM', url: '#' },
    { title: 'Labour Day', date: 'September 9, 10:00AM  - 10:00 PM', url: '#' },
    { title: 'First Day of School for Students', date: 'September 12, 10:00AM  - 10:00 PM', url: '#' },
    { title: 'Student Achievement Committee Meeting', date: 'October 12, 10:00AM  - 10:00 PM', url: '#' },
  ]
};

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F3F3' }}>
      <Hero />
      <Container maxWidth="lg" sx={{ flexDirection: 'row', bgcolor: '#F3F3F3', py: 8 }}>
        <Grid container sx={{ justifyContent: 'center', mb: 8 }}>
          <Grid item md={6} sx={{ mb: { xs: 4, md: 0 } }}>
            <Card sx={{ p: 6, maxHeight: 750 }}>
              <CardMedia>
                <Paper sx={{ position: 'relative', py: 20, mb: 1 }}>
                  <Image
                    alt="Founder"
                    src={founder.src}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Paper>
              </CardMedia>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {welcomeinfo.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {welcomeinfo.description}
                </Typography>
                <Link variant="body2" href="#">
                  {welcomeinfo.linkText}
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ bgcolor: 'primary.main', maxHeight: 750 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                  Events
                </Typography>
                <Divider sx={{ mb: 5, bgcolor: 'text.secondary' }}/>
              </CardContent>
              <CardActionArea>
                <EventsBar
                  title={eventsbar.title}
                  events={eventsbar.events}
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ justifyContent: 'center', mb: 8 }}>
          <Grid item md={8}>
            <Card sx={{ bgcolor: 'primary.main', maxHeight: 750 }}>
              <CardContent>
                <Typography variant="h4" sx={{ color: 'white' }} gutterBottom>
                  News
                </Typography>
                <Divider sx={{ mb: 5, bgcolor: 'text.secondary' }}/>
                <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
                  {news.map((post) => (
                    <News key={post.title} post={post}/>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <MoreInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
