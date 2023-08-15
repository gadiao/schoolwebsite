import * as React from 'react';
import { Container, Divider, Grid, Typography } from '@mui/material';
import MainFeaturedPost from '@/components/MainFeaturedPost';
import FeaturedPost from '@/components/FeaturedPost';
import Sidebar from '@/components/Sidebar';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
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
];

const sidebar = {
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
      <Typography variant="h6" gutterBottom>
        Featured News
      </Typography>
      <Divider sx={{ mb: 3 }}/>
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} bp={{ givenXS: 12, givenMD: 6 }}/>
        ))}
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'block' }}
        >
          <Typography variant="h6" gutterBottom>
            More info
          </Typography>
          <Divider sx={{ mb: 3 }}/>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} bp={{ givenXS: 0, givenMD: 0 }}/>
          ))}
        </Grid>
        <Sidebar
          title={sidebar.title}
          events={sidebar.events}
        />
      </Grid>
      </Container>
      
    </>
  );
}
