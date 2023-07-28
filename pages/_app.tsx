import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import '@styles/globals.css';
import { darkTheme } from '../themes';
import { PokeFavoritesProvider } from 'context';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <PokeFavoritesProvider>
        <Component {...pageProps} />
      </PokeFavoritesProvider>
    </NextUIProvider>
  );
}
