import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

const sections = [
  { title: 'HOME', url: '#' },
  { title: 'OUR SCHOOL', url: '#' },
  { title: 'ACADEMICS', url: '#' },
  { title: 'ADMISSIONS', url: '#' },
  { title: 'EVENTS & NEWS', url: '#' },
  { title: 'LEARNING TOOLS', url: '#' },
  { title: 'CONTACT', url: '#' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header title="Center For Early Education" sections={sections} />
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
