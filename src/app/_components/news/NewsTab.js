"use client"

import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Tab,
  Tabs,
} from "@mui/material";
import News from "@/app/_components/news/News"

// Combine News.js and NewsTab.js

const news = [
  {
    id: 121421,
    title: "Learning at Home Effectively",
    date: "Sept 12",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/sEgodrJdMGw",
    imageLabel: "Image Text",
  },
  { 
    id: 121462,
    title: "Registration for Science Fair Is Now Open",
    date: "Oct 15",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/505eectW54k",
    imageLabel: "Image Text",
  },
  {
    id: 123421,
    title: "Back to School - All You Need to Know",
    date: "Nov 07",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/OyCl7Y4y0Bk",
    imageLabel: "Image Text",
  },
  {
    id: 235421,
    title: "Student Council Election Updates",
    date: "Sept 12",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/zFSo6bnZJTw/2400x1493",
    imageLabel: "Image Text",
  },
  {
    id: 872934,
    title: "Registration for Science Fair Is Now Open",
    date: "Oct 15",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/505eectW54k",
    imageLabel: "Image Text",
  },
  {
    id: 840290,
    title: "Cyber Awareness Month 2023",
    date: "Nov 03",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/OyCl7Y4y0Bk",
    imageLabel: "Image Text",
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Latest News" {...a11yProps(0)} />
          <Tab label="All News" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            pb: 4,
          }}
        >
          {news.slice(0,3).map((post) => (
            <News
              key={post.title}
              // Adjust to have appropriate width for given image
              post={post}
            />
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            pb: 4,
          }}
        >
          {news.map((post) => (
            <News
              key={post.title}
              // Adjust to have appropriate width for given image
              post={post}
            />
          ))}
        </Grid>
      </CustomTabPanel>
    </Box>
  );
};