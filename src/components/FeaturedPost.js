import * as React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@mui/material';

function FeaturedPost(props) {
  const { post, bp, givenDirection } = props;

  return (
    <Grid item xs={bp.givenXS} md={bp.givenMD} sx={{ mb: 4 }}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            sx={{ height: 150, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  bp: PropTypes.shape({
    givenXS: PropTypes.number.isRequired,
    givenMD: PropTypes.number.isRequired,
  }),
};

export default FeaturedPost;
