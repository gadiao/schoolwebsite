import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '@/img/logo.png'

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar 
          sx={{
            pt: 2,
            pb: 2,
            borderBottom: 1, 
            borderColor: 'divider', 
            bgcolor: 'white', 
            color: 'black',
            justifyContent: 'space-between',
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Stack direction='row'>
            <Image alt="Logo" src={logo} width={70} height={80} priority />
            <Typography
              variant="h5"
              color="darkred"
              sx={{ width: '170px', fontWeight: 800 }}
            >
              {title}
            </Typography>
          </Stack>
          <Stack direction='row'>
            <IconButton>
              <AccountCircle />
            </IconButton>
            <Button variant="text">
              LOG IN
            </Button>
          </Stack>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ 
            justifyContent: 'center',
            overflowX: 'hidden',
            color: 'white',
          }}
        >
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body1"
              href={section.url}
              underline="hover"
              sx={{ pl: 3.5, pr: 3.5, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
