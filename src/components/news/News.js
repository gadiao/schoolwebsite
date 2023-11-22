"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function News(props) {
  const { post } = props;

  return (
    // Can check for on scroll
    <Fade in={true} timeout={400}>
      <Grid item>
        <CardActionArea component="a" href={"/news/" + post.id}>
          {/* Edit to match school website news posts */}
          <Card
            sx={{
              height: { xs: 200 },
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CardMedia>
              <Paper
                sx={{
                  position: "relative",
                  height: { xs: 200 },
                  width: { xs: 300, sm: 400, lg: 600 },
                }}
              >
                <Image
                  alt={"Random image"}
                  src={post.image}
                  fill
                  style={{objectFit: "cover"}}
                />
              </Paper>
            </CardMedia>
            <CardContent sx={{ mx: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: "medium" }}>
                {post.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {post.date}
              </Typography>
              <Typography variant="body1" paragraph>
                {post.description}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </Fade>
  );
}

News.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default News;
