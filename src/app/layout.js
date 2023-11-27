import * as React from 'react';
import { Header, Footer } from '@/app/_components';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import { ThemeRegistry } from '@/app/_helpers/themeregistry';

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