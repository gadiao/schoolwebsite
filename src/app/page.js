import * as React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
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
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'April 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'March 2020', url: '#' },
  ]
};

export default function HomePage() {
  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
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
          archives={sidebar.archives}
        />
      </Grid>
    </>
  );
}
