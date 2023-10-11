"use client"

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
  const { bp, post } = props;

  return (
    // Can check for on scroll
    <Fade in={true} timeout={400}>
      <Grid item>
        <CardActionArea component="a" href="#">
          {/* Edit to match school website news posts */}
          <Card
            sx={{
              height: { xs: 300, lg: 350 },
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CardMedia>
              <Paper
                sx={{
                  position: "relative",
                  height: { xs: 300, lg: 350 },
                  width: { xs: bp.xs, sm: bp.sm, lg: bp.lg },
                }}
              >
                <Image
                  alt={"Random image"}
                  src={post.image}
                  fill
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </CardMedia>
            <CardContent sx={{ mx: 4, mt: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: 'medium' }}>{post.title}</Typography>
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
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  bp: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number.isRequired,
    md: PropTypes.number,
    lg: PropTypes.number.isRequired,
    xl: PropTypes.number,
  }).isRequired,
};

export default News;
