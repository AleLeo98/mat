import * as React from "react";
import LanguageSelector from '../components/LanguageSelector'; // Ensure the path is correct
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct
import { useRouter } from 'next/router';

function recallinstructions() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      recallInstructions: 'Recall Instructions',
      recallInstructionDetail: 'Please recall all the information you have memorized about each child. You will need to provide as much detail as possible.',
      noNotes: 'Please do not use any notes, as the purpose of this test is to use only your memory.',
      startRecall: 'Start Recall',
      termsConfirmation: "By playing this game you're confirming that you agree with our Terms and Conditions.",
      reflectOnAssociations: 'Play MAT, the Memory Association Test, to reflect on unconscious associations.',
      memoryAssociationTest: 'Memory Association Test',
      enterYourName: 'Enter your name',
      playNow: 'Play now',
      explore: 'Explore',
      howToPlay: 'Play MAT',
      followUs: 'Follow Us',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedIn: 'LinkedIn',
      allRightsReserved: '© 2022 Gender Bias Memory Game. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiesSettings: 'Cookies Settings'
    },
    IT: {
      playMat: 'Gioca a MAT',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      recallInstructions: 'Istruzioni di Richiamo',
      recallInstructionDetail: 'Si prega di ricordare tutte le informazioni che avete memorizzato su ciascun bambino. Dovrete fornire il maggior numero di dettagli possibile.',
      noNotes: 'Si prega di non utilizzare alcun appunto, poiché lo scopo di questo test è utilizzare solo la vostra memoria.',
      startRecall: 'Inizia Richiamo',
      termsConfirmation: "Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.",
      reflectOnAssociations: 'Gioca a MAT, il Test di Associazione della Memoria, per riflettere sulle associazioni inconsce.',
      memoryAssociationTest: 'Test di Associazione di Memoria',
      enterYourName: 'Inserisci il tuo nome',
      playNow: 'Gioca ora',
      explore: 'Esplora',
      howToPlay: 'Gioca a MAT',
      followUs: 'Seguici su',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedIn: 'LinkedIn',
      allRightsReserved: '© 2022 Gioco di Memoria sui Pregiudizi di Genere. Tutti i diritti riservati.',
      privacyPolicy: 'Politica sulla privacy',
      termsOfService: 'Termini di servizio',
      cookiesSettings: 'Impostazioni dei cookie'
    }
  };

  const router = useRouter();
  const handleNextClick = () => {
    router.push('/recallcard1');
  };

  const selectedContent = content[selectedLanguage];

  return (
    <div className="flex flex-col pt-4" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
      <div className="flex flex-col justify-center px-16 w-full border-0 border-solid leading-[150%] max-md:px-5 max-md:max-w-full" style={{ borderColor: 'rgb(34, 72, 73)' }}>
        <div className="flex justify-center items-center px-16 max-md:px-5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1089px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div onClick={() => router.push('/')} className="text-5xl font-bold cursor-pointer" style={{ color: 'rgb(212, 114, 62)' }}>MAT</div>
              <div className="flex justify-center items-center px-16 my-auto text-base font-medium" style={{ color: 'rgb(24, 37, 39)' }}>
                <div className="flex gap-5 justify-between">
                <div onClick={() => router.push('/demographicquestions')} style={{ cursor: 'pointer' }}>{selectedContent.playMat}</div>
                <div onClick={() => router.push('/about')} style={{ cursor: 'pointer' }}>{selectedContent.about}</div>
                <div onClick={() => router.push('/contact')} style={{ cursor: 'pointer' }}>{selectedContent.contactUs}</div>
                </div>
              </div>
            </div>
            <div onClick={() => router.push('/demographicquestions')} className="justify-center px-8 py-3 my-auto text-lg font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)', cursor: 'pointer' }}>
              {selectedContent.playMat}
            </div>
            <LanguageSelector selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center px-5 mt-24 w-full font-bold text-gray-800 max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center text-6xl leading-[90px] max-md:text-4xl">
          <span className="text-gray-800">{selectedContent.playMat.split(' ')[0]} </span>
          <span className="text-6xl text-gray-800 leading-[96px]">{selectedContent.playMat.split(' ')[1]} {selectedContent.playMat.split(' ')[2]}</span>
        </div>
        <div className="self-center mt-8 text-xl font-medium leading-8" style={{ color: 'rgb(24, 37, 39)' }}>
          {selectedContent.reflectOnAssociations}
        </div>
        <div className="flex flex-col py-16 mt-16 rounded-[30px] max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(34, 72, 73)' }}>
          <div className="self-center text-5xl leading-[57.6px] max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(251, 238, 239)' }}>
            {selectedContent.recallInstructions}
          </div>
          <div className="flex flex-col px-20 mt-16 text-lg leading-7 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="font-medium" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.recallInstructionDetail}
            </div>
            <div className="mt-3.5 font-medium" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.noNotes}
            </div>
            <div className="relative self-center mt-24 max-w-full h-[376px] w-[282px] max-md:mt-10">
              <div className="absolute top-0 left-0 transform -rotate-6 h-[376px] w-[282px] bg-gray-200 rounded-3xl"></div>
              <div className="absolute top-2 left-2 transform rotate-6 h-[376px] w-[282px] bg-white rounded-3xl flex flex-col justify-center items-center" style={{ color: 'rgb(212, 114, 62)', backgroundColor: 'rgb(251, 238, 239)' }}>
                <div className="text-center text-5xl font-bold">MAT</div>
                <div className="w-4/6 border-t-2 border-orange-400 mt-4"></div>
                <div className="w-3/6 border-t-2 border-orange-400 mt-4"></div>
                <div className="w-2/6 border-t-2 border-orange-400 mt-4"></div>
              </div>
            </div>
            <div onClick={handleNextClick} className="justify-center self-end px-8 py-3 mt-20 font-semibold text-gray-800 whitespace-nowrap bg-orange-400 rounded-[500px] max-md:px-5 max-md:mt-10 cursor-pointer">
              {selectedContent.startRecall}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start mt-7 bg-red-50 max-md:pr-5 max-md:max-w-full">
            <div className="shrink-0 max-w-full h-3.5 bg-orange-400 w-full" />
          </div>
        </div>
        <div className="self-start mt-4 ml-3 text-base font-medium leading-6 text-gray-800 max-md:max-w-full">
          {selectedContent.termsConfirmation}
        </div>
      </div>
      <div className="flex flex-col px-16 py-20 mt-48 w-full bg-red-50 max-md:px-5 max-md:mt-10 max-md:max-w-full"style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
        <div className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(212, 114, 62)' }}>
                  MAT
                </div>
                <div className="mt-3 text-base text-gray-800 max-md:max-w-full">
                  {selectedContent.memoryAssociationTest}
                </div>
                <div className="mt-4 text-xs text-gray-800 max-md:max-w-full">
                  {selectedContent.termsConfirmation}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grow justify-end max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pb-3.5 text-sm leading-5 text-gray-800 max-md:mt-10">
                      <div className="text-base font-semibold leading-6">
                        {selectedContent.explore}
                      </div>
                      <div className="mt-11 max-md:mt-10" onClick={() => router.push('/demographicquestions')} style={{ cursor: 'pointer' }}>{selectedContent.howToPlay}</div>
                      <div className="mt-4" onClick={() => router.push('/about')} style={{ cursor: 'pointer' }}>{selectedContent.about}</div>
                      <div className="mt-4" onClick={() => router.push('/contact')} style={{ cursor: 'pointer' }}>{selectedContent.contactUs}</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm leading-5 text-gray-800 max-md:mt-10">
                      <div className="text-base font-semibold">{selectedContent.followUs}</div>
                      <div className="flex gap-3 py-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44b28edb6904971f020d825dc5ff8dfbb46c350dd41ce14be44a49a4d97d646d?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.facebook}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58eb2ed98eace25303e7a67fe91471e2032300a9f2e6305730ee4373b08f76e8?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.instagram}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2eafd8ca1a8d11a644af9c4738227e99c706ba9ebaece19305f8aedf64c2cb5?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.twitter}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/363d5fe016017973f151dced35650f8ed4ea453bdb5bc5d308c8a932698e3eb9?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.linkedIn}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-10 h-px bg-gray-800 max-md:max-w-full" />
        <div className="flex gap-5 justify-between mt-8 w-full text-sm leading-5 text-gray-800 max-md:flex-wrap max-md:max-w-full">
          <div>{selectedContent.allRightsReserved}</div>
          <div className="flex gap-5 justify-between font-medium">
            <div className="underline">{selectedContent.privacyPolicy}</div>
            <div className="underline">{selectedContent.termsOfService}</div>
            <div className="underline">{selectedContent.cookiesSettings}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default recallinstructions;
