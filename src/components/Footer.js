import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Divider, Link, Stack, Typography } from '@mui/material';

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
    <Stack 
      direction="row"
      divider={<Divider orientation="vertical" variant="middle" light flexItem />}
      sx={{ mt: 6, py: 6, bgcolor: 'primary.main', color: '#fff' }}
    >
      <Container component="footer">
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
      </Container>
      <Container component="footer">
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
      </Container>
    </Stack>
  );d
}