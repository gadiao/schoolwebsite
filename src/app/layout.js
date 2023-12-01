import * as React from 'react';
import { Header, Footer } from '_components';
import { ThemeRegistry } from '_helpers/themeregistry';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header title="Center for Early Education" />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;