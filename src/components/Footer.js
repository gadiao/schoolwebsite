import * as React from 'react';
import { Card, CardMedia, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import logocaption from '@/img/logocaption.jpg'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        CREF
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {

  return (
    <Grid
      container
      sx={{ 
        mt: 6,
        py: 2,
        px: 4,
        bgcolor: 'primary.main',
        color: '#fff',
        justifyContent: 'center'
      }}
    >
      <Grid 
        container 
        maxWidth="md" 
        sx={{ 
          flexDirection: { xs: 'column', md: 'row'}, 
          justifyContent: 'space-between',
          alignContent: 'center'
        }}
      >
        <Grid item sx={{ py: 2 }}>
          <Card sx={{ maxWidth: 200, maxHeight: 150 }}>
            <CardMedia>
              <Image
                alt="Logo with Caption"
                src={logocaption}
                width={180}
                height={150}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                priority
              />
            </CardMedia>
          </Card>
        </Grid>
        <Grid item sx={{ py: 2 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            color="text.secondary"
            component="p"
          >
            Tel: 123-456-7890
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            color="text.secondary"
            component="p"
          >
            Email: info@mysite.com
          </Typography>
          <Copyright />
        </Grid>
        <Grid item sx={{ py: 2 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Address
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            color="text.secondary"
            component="p"
          >
            500 Terry Francine Street,
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            color="text.secondary"
            component="p"
          >
            San Francisco, CA 94158
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );d
}