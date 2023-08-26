import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Our School', url: '#' },
  { title: 'Academics', url: '#' },
  { title: 'Admissions', url: '#' },
  { title: 'Events & News', url: '#' },
  { title: 'Learning Tools', url: '#' },
  { title: 'Contact', url: '#' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header title="Center for Early Education" sections={sections} />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
