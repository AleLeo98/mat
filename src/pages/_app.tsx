// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { LanguageProvider } from '../context/LanguageContext'; // Ensure the path is correct
import { SelectionsProvider } from '../context/SelectionsContext'; // Ensure the path is correct
import Hotjar from '@hotjar/browser';

const HJID = 5026709; // Replace with your Hotjar Site ID
const HJSV = 6; // Replace with your Hotjar Version

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Hotjar.init(HJID, HJSV);
  }, []);

  return (
    <LanguageProvider>
      <SelectionsProvider>
        <Component {...pageProps} />
      </SelectionsProvider>
    </LanguageProvider>
  );
}
