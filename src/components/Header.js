'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { Link as MUILink } from '@mui/material';
import { AppBar, Box, Button, Divider, IconButton, Menu, Paper, Stack, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logocaption from '@/img/logocaption.jpg'

const sections = [
  { title: 'OUR SCHOOL', url: '/ourschool' },
  { title: 'ACADEMICS', url: '/academics' },
  { title: 'ADMISSIONS', url: '/admissions' },
  { title: 'EVENTS', url: '/events' },
  { title: 'NEWS', url: '/news' },
  { title: 'LEARNING TOOLS', url: '/learningtools' },
  { title: 'CONTACT', url: '/contact' },
];

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          overflow: 'visible',
        },
      },
    },
  }
});


export default function Header() {
  return (
    <AppBar position="relative" >
      <Toolbar
        variant="dense"
        sx={{
          borderBottom: 1,
          borderColor: 'divider', 
          bgcolor: '#FDFDFD', 
          color: 'black',
          justifyContent: 'space-between',
        }}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Paper elevation={0} sx={{ display: 'none' }}>
          <Image
            alt="Logo with Caption"
            src={logocaption}
            width={200}
            height={150}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
            }}
            priority
          />
        </Paper>
        <Stack direction='row'>
          <IconButton>
            <AccountCircle />
          </IconButton>
          <Button variant="text">
            LOG IN
          </Button>
        </Stack>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          color: 'white',
          zIndex: 'drawer',
          height: 50
        }}
      >
        <ThemeProvider theme={theme}>
          <Paper elevation={4} sx={{ width: 200, height: 150 }}>
            <Image
              alt="Logo with Caption"
              src={logocaption}
              width={200}
              height={150}
              style={{ objectFit: 'cover' }}
              priority
            />
          </Paper>
        </ThemeProvider>
        {sections.map((section) => (
          <MUILink
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            underline="hover"
            sx={{ px: 2, flexShrink: 0 }}
            component={NextLink}
          >
            {section.title}
          </MUILink>
        ))}
      </Toolbar>
      <Divider sx={{ display: { xs: 'block', md: 'none' }, bgcolor: 'primary.main', py: 0.5 }} />
    </AppBar>
  );
}