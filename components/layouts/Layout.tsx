import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '@components/ui';

interface LayoutProps {
  title?: string;
  children: ReactNode;
  icon?: string;
}

const origin = (typeof window == 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({ title, children, icon }) => {

  return (
    <div>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Untitled V01D" />
        <meta name="description" content={`Información sobre el pokemon ${ title }`} />
        <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
        <meta property="og:title" content={`Info about ${ title }`} />
        <meta property="og:description" content={`This it's the page about ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/banner.jpg`} />
        <link rel="icon" href={ icon || '/favicon.ico' } />
      </Head>
      
      <Navbar />

      <main
        style={{
          padding: '20px'
        }}
      >
        { children }
      </main>
    </div>
  );
};