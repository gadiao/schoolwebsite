'use client';

import * as React from 'react';
import { Grid, Typography, Icon } from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const subjects = [
  {
    name: 'Literacy',
    icon: HistoryEduIcon,
    desc: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you`,
  },
  {
    name: 'Writing',
    icon: DriveFileRenameOutlineIcon,
    desc: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you`,
  },
  {
    name: 'Mathematics',
    icon: CalculateOutlinedIcon,
    desc: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you`,
  },
  {
    name: 'Science',
    icon: ScienceOutlinedIcon,
    desc: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you`,
  },
  {
    name: 'Geography',
    icon: ExploreOutlinedIcon,
    desc: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you`,
  },
  {
    name: 'Physical Education',
    icon: SportsSoccerIcon,
    desc: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you`,
  },
];

const Subject = ( props ) => {
  const { subject } = props;
  
  return (
    <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', mb: 4 }}>
      <Icon component={subject.icon} sx={{ fontSize: 75, color: 'primary.main' }} />
      <Typography variant='h6' align='center' sx={{ py: 2 }}>{subject.name}</Typography>
      <Typography variant='subtitle2' align='center' sx={{ fontWeight: 'light', px: 3 }}>{subject.desc}</Typography>
    </Grid>
  )
};

export default function Subjects() {
  return (
    <Grid container spacing={2} sx={{ mb: 4, px: 4 }}>
      {subjects.map((subject) => (
        <Subject key={subject.name} subject={subject}/>
      ))}
    </Grid>
  )
};