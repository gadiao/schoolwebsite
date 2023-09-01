import * as React from 'react';
import { AppBar, Button, Box, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logocaption from '@/img/logocaption.jpg'

const sections = [
  { title: 'HOME', url: '#' },
  { title: 'OUR SCHOOL', url: '#' },
  { title: 'ACADEMICS', url: '#' },
  { title: 'ADMISSIONS', url: '#' },
  { title: 'EVENTS & NEWS', url: '#' },
  { title: 'LEARNING TOOLS', url: '#' },
  { title: 'CONTACT', url: '#' },
];

export default function Header(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
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
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              underline="hover"
              sx={{ p: 2, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}