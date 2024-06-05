import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '../context/LanguageContext'; // Ensure the path is correct

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
