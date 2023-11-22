import * as React from "react";
import Image from "next/image";
import { Container, Divider, Fade, Paper, Typography } from "@mui/material";

// Back-end fetching required
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

export default function Page({ params }) {
  // params requires type 
  const article = news.find((newsArticle) => newsArticle.id == params.id);

  return (
    <Fade in={true} timeout={400}>
      <Container sx={{ py: 15, justifyContent: 'center' }}>
        <Paper elevation={4} sx={{ position: 'relative', py: 20, width: { xs: 1, md: 0.5}, mb: 4 }}>
          <Image
            alt={"Random image"}
            src={article.image}
            fill
            style={{ objectFit: "cover" }}
          />
        </Paper>
        <Typography variant="h3" gutterBottom>{article.title}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography sx={{ mb: 2 }}>{article.date}</Typography>
        <Typography>{article.description}</Typography>
      </Container>
    </Fade>
  );
}
