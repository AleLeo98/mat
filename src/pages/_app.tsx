// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '../context/LanguageContext'; // Ensure the path is correct
import { SelectionsProvider } from '../context/SelectionsContext'; // Ensure the path is correct

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <SelectionsProvider>
        <Component {...pageProps} />
      </SelectionsProvider>
    </LanguageProvider>
  );
}
