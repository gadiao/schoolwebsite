import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Container, IconButton, Link, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '@/img/logo.jpg'

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar 
          sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white', color: 'black' }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Image
            alt="Logo"
            src={logo}
            width={80}
            height={100}
            priority
            style={{
              maxWidth: '100%',
              height: '100px',
              objectFit: 'cover',
            }}
            />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
          <IconButton>
            <AccountCircle />
          </IconButton>
          <Button variant="text">
            LOG IN
          </Button>
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
              sx={{ pl: 2, pr: 2, flexShrink: 0 }}
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
