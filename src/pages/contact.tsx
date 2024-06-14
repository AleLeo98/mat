import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LanguageSelector from '../components/LanguageSelector'; // Adjust the path based on your directory structure

interface MenuItemProps {
  text: string;
  isBold?: boolean;
  onClick: () => void;
}

interface SocialLinkProps {
  href: string;
  alt: string;
  src: string;
  platform: string;
}

interface MenuProps {
  items: MenuItemProps[];
}

const MenuItem: React.FC<MenuItemProps> = ({ text, isBold = false, onClick }) => (
  <span className={`font-medium ${isBold ? 'font-bold' : ''}`} onClick={onClick} style={{ cursor: 'pointer' }}>
    {text}
  </span>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, alt, src, platform }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex gap-3 py-2 whitespace-nowrap">
    <img loading="lazy" src={src} className="shrink-0 w-6 aspect-square" alt={alt} />
    <span>{platform}</span>
  </a>
);

const Menu: React.FC<MenuProps> = ({ items }) => (
  <div className="flex gap-5 justify-between">
    {items.map((item, index) => (
      <MenuItem key={index} text={item.text} isBold={item.isBold} onClick={item.onClick} />
    ))}
  </div>
);

const Contact: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'IT'>('EN');
  const router = useRouter();

  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      memoryAssociationTest: 'Memory Association Test',
      enterYourName: 'Enter your name',
      playNow: 'Play now',
      termsConfirmation: "By playing this game you're confirming that you agree with our Terms and Conditions.",
      allRightsReserved: '© 2022 Gender Bias Memory Game. All rights reserved.',
      explore: 'Explore',
      howToPlay: 'Play MAT',
      followUs: 'Follow Us',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedIn: 'LinkedIn',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiesSettings: 'Cookies Settings',
      contactTitle: 'Contact us',
      contactDescription1: 'If you have any questions or need further information, feel free to reach out to us. We are here to help.',
      contactDescription2: 'For any questions or concerns about the study, you can contact Alessio Leoncini at',
      contactEmail: 'leonca@usi.ch'
    },
    IT: {
      playMat: 'Gioca a MAT',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      memoryAssociationTest: 'Test di Associazione di Memoria',
      enterYourName: 'Inserisci il tuo nome',
      playNow: 'Gioca ora',
      termsConfirmation: 'Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.',
      allRightsReserved: '© 2022 Gioco di Memoria sui Pregiudizi di Genere. Tutti i diritti riservati.',
      explore: 'Esplora',
      howToPlay: 'Gioca a MAT',
      followUs: 'Seguici su',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedIn: 'LinkedIn',
      privacyPolicy: 'Politica sulla privacy',
      termsOfService: 'Termini di servizio',
      cookiesSettings: 'Impostazioni dei cookie',
      contactTitle: 'Contattaci',
      contactDescription1: 'Se hai domande o necessiti di ulteriori informazioni, non esitare a contattarci. Siamo qui per aiutarti.',
      contactDescription2: 'Per qualsiasi domanda o dubbio sullo studio, puoi contattare Alessio Leoncini a',
      contactEmail: 'leonca@usi.ch'
    }
  };

  const selectedContent = content[selectedLanguage];

  return (
    <div className="flex flex-col pt-4" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
      <header className="flex flex-col justify-center px-16 w-full border-0 border-solid leading-[150%] max-md:px-5 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)', borderColor: 'rgb(34, 72, 73)' }}>
        <div className="flex justify-between items-center px-16 max-md:px-5 max-md:mr-1 max-md:max-w-full">
          <div className="flex items-center gap-5">
            <div className="text-5xl font-bold cursor-pointer" style={{ color: 'rgb(212, 114, 62)' }} onClick={() => router.push('/')}>
              MAT
            </div>
            <nav className="flex justify-center items-center px-16 my-auto text-base font-medium" style={{ color: 'rgb(24, 37, 39)' }}>
              <Menu
                items={[
                  { text: selectedContent.playMat, isBold: true, onClick: () => router.push('/playtest') },
                  { text: selectedContent.about, isBold: true, onClick: () => router.push('/about') },
                  { text: selectedContent.contactUs, isBold: true, onClick: () => router.push('/contact') }
                ]}
              />
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <button onClick={() => router.push('/playtest')} className="justify-center px-8 py-3 text-base font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'white', cursor: 'pointer' }}>
              {selectedContent.playMat}
            </button>
            <LanguageSelector selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
          </div>
        </div>
      </header>
      <main className="self-center mt-24 w-full max-w-[1305px] max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <article className="flex flex-col px-5 mt-4 text-lg font-medium leading-7 text-gray-800 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-6xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl">{selectedContent.contactTitle}</h2>
              <p className="mt-14 max-md:mt-10 max-md:max-w-full">{selectedContent.contactDescription1}</p>
              <p className="mt-11 max-md:mt-10 max-md:max-w-full">
                {selectedContent.contactDescription2} <span className="font-bold text-gray-800">{selectedContent.contactEmail}</span>.
              </p>
            </article>
          </div>
          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e7dc63814e51482189182e79bdb2955a05c6df61dcb4c7bdeb692ee6d8937bf?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&" className="grow w-full aspect-[0.95] max-md:mt-10 max-md:max-w-full" alt="" />
          </div>
        </section>
      </main>
      <footer className="flex flex-col px-16 py-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
        <section className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
                <h1 className="text-5xl font-bold cursor-pointer max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(212, 114, 62)' }} onClick={() => router.push('/')}>
                  MAT
                </h1>
                <p className="mt-3 text-base text-gray-800 max-md:max-w-full">{selectedContent.memoryAssociationTest}</p>
                <form className="flex gap-4 mt-3 max-md:flex-wrap">
                  <label htmlFor="userName" className="sr-only">
                    {selectedContent.enterYourName}
                  </label>
                  <input id="userName" type="text" className="flex-1 justify-center self-start p-3 text-base bg-white rounded-lg border border-gray-800 border-solid text-neutral-600" placeholder={selectedContent.enterYourName} aria-label={selectedContent.enterYourName} />
                  <button type="submit" onClick={() => router.push('/playtest')} className="justify-center px-8 py-3 text-lg font-semibold rounded-[500px] max-md:px-5 cursor-pointer" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)' }}>
                    {selectedContent.playNow}
                  </button>
                </form>
                <p className="mt-4 text-xs text-gray-800 max-md:max-w-full">{selectedContent.termsConfirmation}</p>
              </article>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <aside className="grow justify-end max-md:mt-10 max-md:max-w-full">
                <section className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <article className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pb-3.5 text-sm leading-5 text-gray-800 max-md:mt-10">
                      <h2 className="text-base font-semibold leading-6">{selectedContent.explore}</h2>
                      <p className="mt-11 max-md:mt-10 cursor-pointer" onClick={() => router.push('/playtest')}>
                        {selectedContent.howToPlay}
                      </p>
                      <p className="mt-4 cursor-pointer" onClick={() => router.push('/about')}>
                        {selectedContent.about}
                      </p>
                      <p className="mt-4 cursor-pointer" onClick={() => router.push('/contact')}>
                        {selectedContent.contactUs}
                      </p>
                    </div>
                  </article>
                  <article className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm leading-5 text-gray-800 max-md:mt-10">
                      <h2 className="text-base font-semibold">{selectedContent.followUs}</h2>
                      <SocialLink href="https://www.facebook.com" alt="Facebook logo" src="https://cdn.builder.io/api/v1/image/assets/TEMP/69380b1bf1ad980681a985e825473ffa2638ac454f0a55d362c077779aaaeebf?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&" platform="Facebook" />
                      <SocialLink href="https://www.instagram.com" alt="Instagram logo" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2638be2b79313bae6d4e49ffb3b209582ccc6362521917805883379696fa1af?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&" platform="Instagram" />
                      <SocialLink href="https://twitter.com" alt="Twitter logo" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c2601de0a7e37eccae762786165a7cff234fe3fc4de1caf5b4c2ac372111d7f?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&" platform="Twitter" />
                      <SocialLink href="https://www.linkedin.com" alt="LinkedIn logo" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c40bf1434f5eaef011110763cd55fc6cff416c7e232222f0b4b955f75e3d16?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&" platform="LinkedIn" />
                    </div>
                  </article>
                </section>
              </aside>
            </div>
          </div>
        </section>
        <hr className="shrink-0 mt-10 h-px bg-gray-800 max-md:max-w-full" />
        <section className="flex gap-5 justify-between px-px mt-8 w-full text-sm leading-5 text-gray-800 max-md:flex-wrap max-md:max-w-full">
          <p>{selectedContent.allRightsReserved}</p>
          <nav className="flex gap-5 justify-between font-medium">
            <a href="/privacy-policy" className="underline">
              {selectedContent.privacyPolicy}
            </a>
            <a href="/terms-of-service" className="underline">
              {selectedContent.termsOfService}
            </a>
            <a href="/cookies-settings" className="underline">
              {selectedContent.cookiesSettings}
            </a>
          </nav>
        </section>
      </footer>
    </div>
  );
};

export default Contact;
