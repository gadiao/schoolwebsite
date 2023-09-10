import * as React from 'react';
import NextLink from 'next/link';
import { Link as MUILink } from '@mui/material';
import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logocaption from '@/img/logocaption.jpg'

const sections = [
  { title: 'HOME', url: '/' },
  { title: 'OUR SCHOOL', url: '/ourschool' },
  { title: 'ACADEMICS', url: '/academics' },
  { title: 'ADMISSIONS', url: '/admissions' },
  { title: 'EVENTS', url: '/events' },
  { title: 'NEWS', url: '/news' },
  { title: 'LEARNING TOOLS', url: '/learningtools' },
  { title: 'CONTACT', url: '/contact' },
];

export default function Header() {
  return (
    <AppBar position="static">
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
          justifyContent: 'center',
          overflowX: 'hidden',
          color: 'white',
        }}
      >
        {sections.map((section) => (
          <MUILink
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            underline="hover"
            sx={{ p: 2, flexShrink: 0 }}
            component={NextLink}
          >
            {section.title}
          </MUILink>
        ))}
      </Toolbar>
    </AppBar>
  );
}