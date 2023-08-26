import * as React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@mui/material';

function FeaturedPost(props) {
  const { post, bp } = props;

  return (
    <Grid item xs={bp.givenXS} md={bp.givenMD}>
      <CardActionArea component="a" href="#">
        <Card 
          sx={{ 
            height: { xs: 250, md: 400 }, 
            display: "flex", 
            flexDirection: { xs: 'row', md: 'column'} 
          }}
        >
          <CardMedia sx={{ height: { xs: 250, md: 200, xl: 250 } }}>
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
            <Typography variant="h6">
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
