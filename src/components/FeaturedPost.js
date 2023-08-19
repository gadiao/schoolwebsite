import * as React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@mui/material';

function FeaturedPost(props) {
  const { post, bp } = props;

  return (
    <Grid item xs={bp.givenXS} md={bp.givenMD} sx={{ mb: 4 }}>
      <CardActionArea component="a" href="#">
        <Card 
          sx={{ 
            height: { xs: 250, md: 400 }, 
            display: "flex", 
            flexDirection: { xs: 'row', md: 'column'} 
          }}
        >
          <CardMedia sx={{ height: { xs: 250, md: 150 } }}>
            <Image
              alt="Random image"
              src="https://source.unsplash.com/random"
              width={600}
              height={400}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'cover',
              }}
            />
          </CardMedia>
          <CardContent>
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
