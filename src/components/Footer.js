// "use client"

import * as React from 'react';
// import { useRef } from "react";
import { Card, CardMedia, Fade, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import logocaption from '@/img/logocaption.jpg'
// import useAnimate from "@/components/useAnimate";

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
  // const animRef = useRef(null);
  // const animate = useAnimate(animRef);

  // Requires animation on page change
  return (
    <Grid 
      container 
      sx={{ 
        flexDirection: { xs: 'column', md: 'row'},
        bgcolor: 'primary.main',
        color: '#fff',
        justifyContent: 'center',
        alignContent: 'center'
      }}
      // ref={animRef}
    >
      {/* <Fade in={animate} timeout={800}> */}
        <Grid item sx={{ py: 2, px: 6 }}>
          <Card sx={{ maxWidth: 200, maxHeight: 150 }}>
            {/* Replace with transparent logo */}
            <CardMedia>
              <Image
                alt="Logo with Caption"
                src={logocaption}
                width={200}
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
      {/* </Fade> */}
      {/* <Fade in={animate} timeout={800}> */}
        <Grid item sx={{ py: 2, px: 6}}>
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
      {/* </Fade> */}
      {/* <Fade in={animate} timeout={800}> */}
        <Grid item sx={{ py: 2, px: 6 }}>
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
      {/* </Fade> */}
    </Grid>
  );
}