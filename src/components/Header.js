import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
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
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Container
        maxWidth="xl" 
        sx={{ justifyContent: 'center' }}
      >
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', overflowX: 'hidden' }}
        >
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body1"
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
      

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
