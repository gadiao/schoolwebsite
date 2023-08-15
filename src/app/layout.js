import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header title="Blog" sections={sections} />
          {children}
          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
        </ThemeRegistry>
      </body>
    </html>
  );
}
