import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Hero from '@/components/Hero';
import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import ExploreTwoToneIcon from '@mui/icons-material/ExploreTwoTone';
import SportsTennisTwoToneIcon from '@mui/icons-material/SportsTennisTwoTone';

const staff = [
  {
    name: 'Literacy',
    title: 'PRINCIPAL',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Writing',
    title: 'ASSISTANT PRINCIPAL',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Mathematics',
    title: 'PARENT COORDINATOR',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Science',
    title: 'PARENT COORDINATOR',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Geography',
    title: 'TEACHER - SOCIAL STUDIES',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
  {
    name: 'Physical Education',
    title: 'TEACHER - PHYSICAL EDUCATION',
    email: 'info@mysite.com',
    phone: '123-456-7890'
  },
]


export default function Academics() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F3F3' }}>
      <Hero imgSrc={ "https://source.unsplash.com/zFSo6bnZJTw/2400x1493" } givenAlt={ "Full Classroom" }/>
      <Container maxWidth="lg" sx={{ flexDirection: 'row', pb: 8 }}>
        <Paper>
          <Typography align='center' variant="h2" sx={{ pt: 8, pb: 2, color: 'primary.main', fontWeight: 'medium' }}>
            ACADEMICS
          </Typography>
          <Typography align='center' variant='subtitle1' sx={{ pb: 8, px: { xs: 5, md: 25 }, fontWeight: 'light', letterSpacing: 1 }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
          </Typography>
          {/* Iterate through icons by passing component as a prop */}
          {/* https://www.developerway.com/posts/react-component-as-prop-the-right-way */}
        </Paper>
      </Container>
    </Box>
  );
}
