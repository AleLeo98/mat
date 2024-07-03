import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LanguageSelector from '../components/LanguageSelector'; // Ensure the path is correct
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct

function InstructionPage() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const router = useRouter();

  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      demographicQuestions: 'Demographic Questions',
      fillDemographicQuestions: 'Please fill the demographic questions below.',
      answersSavedAnonymously: 'Your answers will be saved anonymously.',
      enterName: 'Enter your name',
      playNow: 'Play now',
      reflectOnAssociations: 'Play MAT, the Memory Association Test, to reflect on unconscious associations.',
      instructions: 'Instructions',
      part1: 'Part 1: Memorization',
      part1Description: 'During this part of the test, you will be shown cards that describe children. Your goal is to memorize as many details about each child as possible (icons and phrase). Once you feel confident that you have memorized all the information, you may proceed to the next child. Please note that you are not allowed to take any notes during this part of the test, as the purpose is to test your memory only.',
      part2: 'Part 2: Recall',
      part2Description: 'After you have completed the memorization part of the test, you will be asked to recall all the icons you have memorized about each child. You will need to provide as much detail as possible.',
      videoInstructions: 'Video Instructions',
      videoInstructionsDescription: 'Watch the video instructions below for a detailed explanation of the recall card process.',
      consentRead: 'I have read and understood the consent.',
      continue: 'Continue',
      termsConfirmation: 'By playing this game you\'re confirming that you agree with our Terms and Conditions.',
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
      cookiesSettings: 'Cookies Settings',
    },
    IT: {
      playMat: 'Gioca a MAT',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      demographicQuestions: 'Domande Demografiche',
      fillDemographicQuestions: 'Si prega di compilare le domande demografiche di seguito.',
      answersSavedAnonymously: 'Le tue risposte saranno salvate in modo anonimo.',
      enterName: 'Inserisci il tuo nome',
      playNow: 'Gioca ora',
      reflectOnAssociations: 'Gioca a MAT, il Test di Associazione di Memoria, per riflettere sulle associazioni inconsce.',
      instructions: 'Istruzioni',
      part1: 'Parte 1: Memorizzazione',
      part1Description: 'Durante questa parte del test, ti verranno mostrate delle carte che descrivono i bambini. Il tuo obiettivo è memorizzare quanti più dettagli possibili su ogni bambino (icone e frase). Una volta che ti senti sicuro di aver memorizzato tutte le informazioni, puoi procedere al bambino successivo. Si prega di notare che non è consentito prendere appunti durante questa parte del test, poiché lo scopo è testare solo la tua memoria.',
      part2: 'Parte 2: Richiamo',
      part2Description: 'Dopo aver completato la parte di memorizzazione del test, ti verrà chiesto di ricordare tutte le icone che hai memorizzato su ogni bambino. Dovrai fornire quanti più dettagli possibili.',
      videoInstructions: 'Istruzioni Video',
      videoInstructionsDescription: 'Guarda le istruzioni video di seguito per una spiegazione dettagliata del processo della carta di richiamo.',
      consentRead: 'Ho letto e compreso il consenso.',
      continue: 'Continua',
      termsConfirmation: 'Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.',
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
      cookiesSettings: 'Impostazioni dei cookie',
    }
  };

  const selectedContent = content[selectedLanguage];

  return (
    <div className="flex flex-col pt-4" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
      <div className="flex flex-col justify-center px-16 w-full border-0 border-solid leading-[150%] max-md:px-5 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)', borderColor: 'rgb(34, 72, 73)' }}>
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
            {selectedContent.instructions}
          </div>
          <div className="flex flex-col px-16 mt-16 mb-5 text-lg leading-7 max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ color: 'rgb(251, 238, 239)' }}>
            <div className="font-medium leading-7 max-md:max-w-full">
              <span className="font-bold">{selectedContent.part1}</span>: {selectedContent.part1Description}
            </div>
            <div className=" font-medium mt-10 leading-7 max-md:max-w-full">
              <span className="font-bold">{selectedContent.part2}</span>: {selectedContent.part2Description}
            </div>
            <div className=" font-medium mt-12 max-md:mt-10 max-md:max-w-full">
              <span className="font-bold">{selectedContent.videoInstructions}</span>: {selectedContent.videoInstructionsDescription}
            </div>
            <div className="flex justify-center mt-8">
              {selectedLanguage === 'EN' ? (
                <video key="EN" width="560" height="315" controls autoPlay loop muted className="rounded-lg border-2 border-gray-800">
                  <source src="/RecallVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <video key="IT" width="560" height="315" controls autoPlay loop muted className="rounded-lg border-2 border-gray-800">
                  <source src="/RecallVideoIT.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="flex gap-4 self-start mt-6 font-semibold">
              <div className={`shrink-0 rounded border border-solid h-[30px] w-[30px] cursor-pointer ${isConsentChecked ? 'bg-green-500' : 'bg-red-50'}`} style={{ borderColor: 'rgb(34, 72, 73)' }} onClick={() => setIsConsentChecked(!isConsentChecked)} />
              <div className="flex-auto my-auto">
                {selectedContent.consentRead}
              </div>
            </div>
            <button
              className="justify-center self-start px-8 py-3 mt-9 font-semibold whitespace-nowrap rounded-[500px] max-md:px-5"
              style={{ backgroundColor: isConsentChecked ? 'rgb(212, 114, 62)' : 'rgb(212, 114, 62, 0.5)', color: 'rgb(24, 37, 39)' }}
              disabled={!isConsentChecked}
              onClick={() => router.push('/memcard1')}
            >
              {selectedContent.continue}
            </button>
          </div>
        </div>
        <div className="self-start mt-4 ml-3 text-base font-medium leading-6 max-md:max-w-full" style={{ color: 'rgb(24, 37, 39)' }}>
          {selectedContent.termsConfirmation}
        </div>
      </div>
      <div className="flex flex-col px-16 py-20 mt-48 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
        <div className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
                <div onClick={() => router.push('/')} className="text-5xl font-bold cursor-pointer" style={{ color: 'rgb(212, 114, 62)' }}>MAT</div>
                <div className="mt-3 text-base max-md:max-w-full" style={{ color: 'rgb(24, 37, 39)' }}>
                  Memory Association Test
                </div>
                <div className="mt-4 text-xs max-md:max-w-full" style={{ color: 'rgb(24, 37, 39)' }}>
                  {selectedContent.termsConfirmation}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grow justify-end max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pb-3.5 text-sm leading-5 max-md:mt-10" style={{ color: 'rgb(24, 37, 39)' }}>
                      <div className="text-base font-semibold leading-6">
                        {selectedContent.explore}
                      </div>
                      <div className="mt-11 max-md:mt-10" onClick={() => router.push('/demographicquestions')} style={{ cursor: 'pointer' }}>{selectedContent.howToPlay}</div>
                      <div className="mt-4" onClick={() => router.push('/about')} style={{ cursor: 'pointer' }}>{selectedContent.about}</div>
                      <div className="mt-4" onClick={() => router.push('/contact')} style={{ cursor: 'pointer' }}>{selectedContent.contactUs}</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm leading-5 max-md:mt-10" style={{ color: 'rgb(24, 37, 39)' }}>
                      <div className="text-base font-semibold">{selectedContent.followUs}</div>
                      <div className="flex gap-3 py-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db89a569778b15c4aa61c674caed32698eaf7b4d1b416d4aa6e0f0fae91b4b9?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.facebook}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58671d1ed1b8b73c97bdd1bb68b7388cf20a33cbe223580af997c77102de1684?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.instagram}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6d48d09bc5bdb94f9c228d0529bd3452f253312fb5200e90a903f7f20f9e642?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.twitter}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0981531995fd24da32e4cc59256eac5a7c55e117e557805940736f1e83128ce?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
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
        <div className="shrink-0 mt-10 h-px max-md:max-w-full" style={{ backgroundColor: 'rgb(24, 37, 39)' }} />
        <div className="flex gap-5 justify-between mt-8 w-full text-sm leading-5 max-md:flex-wrap max-md:max-w-full" style={{ color: 'rgb(24, 37, 39)' }}>
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

export default InstructionPage;
