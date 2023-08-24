import * as React from 'react';
import { Container, Divider, Grid, Typography } from '@mui/material';
import MainFeaturedPost from '@/components/MainFeaturedPost';
import FeaturedPost from '@/components/FeaturedPost';
import EventsBar from '@/components/EventsBar';
import MoreInfo from '@/components/MoreInfo';

const mainFeaturedPost = {
  title: 'Welcome to Center For Early Education (CFESchool)',
  description:
    "Center For Early Education (CFESchool) was founded in 1980, by Beverly Anne Russel-Lockhart as one of the first preschools in the Bahamas. Our goal is to provide a nurturing and stimulating environment for young children to learn and grow into leaders and pillars of their community.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Learn More',
};

const featuredPosts = [
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
  title: 'Events',
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
      <MainFeaturedPost post={mainFeaturedPost} />
      <Container maxWidth="xl">
        <Typography variant="h4" gutterBottom>
          News
        </Typography>
        <Divider sx={{ mb: 2 }}/>
        <Grid container spacing={2} sx={{ mb: 8 }}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} bp={{ givenXS: 12, givenMD: 4 }}/>
          ))}
        </Grid>
        <Grid container spacing={2}>
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
