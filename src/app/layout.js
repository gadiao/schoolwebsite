import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export default function RootLayout({ children }) {
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
}
