'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
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

const Subject = (props) => {
  const { subject } = props;
  
  return (
    <Grid container xs={12} sm={4} sx={{ flexDirection: 'column', alignItems: 'center', mb: 4 }}>
      <Icon component={subject.icon} sx={{ fontSize: 75, color: 'primary.main' }}></Icon>
      <Typography variant='h6' sx={{ py: 2 }}>{subject.name}</Typography>
      <Typography variant='body2' align='center' sx={{ fontWeight: 'light', px: 4 }}>{subject.desc}</Typography>
    </Grid>
  )
};

Subject.propTypes = {
  subject: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    desc: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Subjects() {
  return (
    <Grid container sx={{ pb: 4 }}>
      {subjects.map((subject) => (
        <Subject key={subject.name} subject={subject}/>
      ))}
    </Grid>
  )
};