// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Hotjar from '@hotjar/browser';
import { LanguageProvider } from '../context/LanguageContext'; // Ensure the path is correct
import { SelectionsProvider } from '../context/SelectionsContext'; // Ensure the path is correct

const siteId = 5026640;
const hotjarVersion = 6;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, [router]);

  return (
    <LanguageProvider>
      <SelectionsProvider>
        <Component {...pageProps} />
      </SelectionsProvider>
    </LanguageProvider>
  );
}

export default App;
