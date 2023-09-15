import * as React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function News(props) {
  const { bp, post } = props;

  return (
    <Grid item>
      <CardActionArea component="a" href="#">
        <Card
          sx={{
            height: { xs: bp.xs, lg: bp.lg },
            display: "flex",
            flexDirection: "row",
          }}
        >
          <CardMedia>
            <Paper
              sx={{
                position: "relative",
                height: { xs: bp.xs, lg: bp.lg },
                width: { xs: bp.xs, sm: bp.sm, lg: bp.lg },
              }}
            >
              <Image
                alt={"Random image"}
                src={"https://source.unsplash.com/random?wallpapers"}
                fill
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              />
            </Paper>
          </CardMedia>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
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
