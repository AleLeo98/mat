// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '../context/LanguageContext'; // Ensure the path is correct
import { SelectionsProvider } from '../context/SelectionsContext'; // Ensure the path is correct
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <SelectionsProvider>
        <Component {...pageProps} />
        <Script
          id="HotjarAnalytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5026709,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </SelectionsProvider>
    </LanguageProvider>
  );
}
