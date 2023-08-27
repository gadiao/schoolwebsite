import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardMedia, Container, Divider, Grid, Link, Paper, Typography } from '@mui/material';
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
];

const eventsbar = {
  events: [
    { title: 'Board Meeting', date: 'August 24, 7:00 PM - 9:00 PM', url: '#' },
    { title: 'Labour Day', date: 'September 4, All Day', url: '#' },
    { title: 'First Day of School for Students', date: 'September 5, All Day', url: '#' },
    { title: 'Governance and Policy Committee Meeting', date: 'September 5, 7:00 PM - 9:00 PM', url: '#' },
    { title: 'Student Achievement Committee Meeting', date: 'September 7, 7:00 PM - 9:00 PM', url: '#' },
  ]
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container maxWidth="lg">
        <Grid container sx={{ justifyContent: 'center', mb: 8 }} spacing={2}>
          <Grid item md={6} sx={{ mb: { xs: 8, md: 0 } }}>
            <Card 
              sx={{ 
                p: 4,
                height: 650,
                maxWidth: 500,
                bgcolor: 'primary.main'
              }}
            >
              <CardMedia sx={{ px: 2 }}>
                <Paper sx={{ position: 'relative', py: 20, mb: 2 }}>
                  <Image
                    alt="Founder"
                    src={founder.src}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Paper>
              </CardMedia>
              <CardContent>
                <Typography variant="h5" color="#fff" gutterBottom>
                  {welcomeinfo.title}
                </Typography>
                <Typography variant="body2" color="#fff" paragraph>
                  {welcomeinfo.description}
                </Typography>
                <Link variant="body2" color="#fff" href="#">
                  {welcomeinfo.linkText}
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6} sx={{ mb: { xs: 8, md: 0 } }}>
            <Typography variant="h4" gutterBottom>
              News
            </Typography>
            <Divider sx={{ mb: 2 }}/>
            <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
              {news.map((post) => (
                <News key={post.title} post={post} bp={{ givenXS: 12, givenMD: 4 }}/>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="h4" gutterBottom>
          Events
        </Typography>
        <Divider sx={{ mb: 2 }}/>
        {/* Fix the cards to get it centered */}
        <Grid container sx={{ justifyContent: 'center', mb: 8 }} spacing={2}>
          <EventsBar
            title={eventsbar.title}
            events={eventsbar.events}
          />
          <MoreInfo />
        </Grid>
      </Container>
    </>
  );
}
