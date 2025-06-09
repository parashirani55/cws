import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Creative Wealth Society - Elite Creators for Brands',
  description:
    'Hire elite creators for your next campaign without the agency markup. Connect directly with top-performing UGC creators, influencers, and creative strategists.',
  keywords:
    'UGC creators, influencers, creative strategists, social media managers, graphic designers, brand campaigns',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
