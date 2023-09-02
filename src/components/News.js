import * as React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@mui/material';

function News(props) {
  const { post } = props;

  return (
    <Grid item>
      <CardActionArea component="a" href="#">
        <Card 
          sx={{ 
            height: 200, 
            display: "flex", 
            flexDirection: 'row'
          }}
        >
          <CardMedia sx={{ height: 200 }}>
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

News.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default News;
