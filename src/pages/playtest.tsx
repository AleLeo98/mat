import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LanguageSelector from '../components/LanguageSelector'; // Ensure the path is correct
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct

const PlaytestLanguage: React.FC = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [name, setName] = useState('');
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const router = useRouter();

  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      enterName: 'Enter your name',
      playNow: 'Play now',
      objective: 'Objective',
      objectiveDescription: 'The purpose of the study is to test an online application to improve the design of reflection-centered technologies. The included memory self-reflection test is educational, not diagnostic, and aims to encourage awareness of one\'s memory, without assessing its performance. Because memory is a broad concept, the test does not explore every aspect of it, and medical advice is recommended for memory problems. If you decide to participate, keep in mind that the results may not exactly match your personal perceptions.',
      consent: 'Consent',
      consentDescription: 'You are cordially invited to participate in a research study conducted by Irene Zanardi and Monica Landoni of the University of Lugano (USI), together with student Alessio Leoncini. If you agree to participate, you will be asked to use a web platform and fill out a questionnaire. The risks associated with participating in this study are minimal and center around the sensitive topic of implicit associations. In addition to contributing to research, the main benefit of the activity may be personal growth and reflection. Your responses will be anonymous. Please do not include personal information in the questionnaire. All data collected during the study will be kept strictly confidential. The data will be stored securely and only the research team will have access to it. Participation in this study is entirely voluntary, and you have the right to withdraw at any time without consequence.',
      contact: 'For any questions or concerns about the study, you can contact Alessio Leoncini at leoncaa@usi.ch.',
      readConsent: 'I have read and understood the consent.',
      continue: 'Continue',
      termsConfirmation: 'By playing this game you\'re confirming that you agree with our Terms and Conditions.',
      explore: 'Explore',
      howToPlay: 'How to Play',
      followUs: 'Follow Us',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedIn: 'LinkedIn',
      allRightsReserved: '© 2022 Gender Bias Memory Game. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiesSettings: 'Cookies Settings',
      reflectOnAssociations: 'Play MAT, the Memory Association Test, to reflect on unconscious associations.',
      preliminaryInformation: 'Preliminary Information'
    },
    IT: {
      playMat: 'Gioca a MAT',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      enterName: 'Inserisci il tuo nome',
      playNow: 'Gioca ora',
      objective: 'Obiettivo',
      objectiveDescription: 'Lo scopo dello studio è testare un\'applicazione online per migliorare la progettazione di tecnologie incentrate sulla riflessione. Il test di autoriflessione della memoria incluso è educativo, non diagnostico, e mira a incoraggiare la consapevolezza della propria memoria, senza valutarne le prestazioni. Poiché la memoria è un concetto ampio, il test non esplora ogni suo aspetto, e si raccomanda un consiglio medico per problemi di memoria. Se decidi di partecipare, tieni presente che i risultati potrebbero non corrispondere esattamente alle tue percezioni personali.',
      consent: 'Consenso',
      consentDescription: 'Sei cordialmente invitato a partecipare a uno studio di ricerca condotto da Irene Zanardi e Monica Landoni dell\'Università di Lugano (USI), insieme allo studente Alessio Leoncini. Se accetti di partecipare, ti verrà chiesto di utilizzare una piattaforma web e compilare un questionario. I rischi associati alla partecipazione a questo studio sono minimi e ruotano attorno al tema sensibile delle associazioni implicite. Oltre a contribuire alla ricerca, il principale beneficio dell\'attività potrebbe essere la crescita personale e la riflessione. Le tue risposte saranno anonime. Si prega di non includere informazioni personali nel questionario. Tutti i dati raccolti durante lo studio saranno mantenuti strettamente confidenziali. I dati saranno conservati in modo sicuro e solo il team di ricerca avrà accesso ad essi. La partecipazione a questo studio è completamente volontaria e hai il diritto di ritirarti in qualsiasi momento senza conseguenze.',
      contact: 'Per qualsiasi domanda o dubbio sullo studio, puoi contattare Alessio Leoncini all\'indirizzo leoncaa@usi.ch.',
      readConsent: 'Ho letto e compreso il consenso.',
      continue: 'Continua',
      termsConfirmation: 'Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.',
      explore: 'Esplora',
      howToPlay: 'Come giocare',
      followUs: 'Seguici su',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedIn: 'LinkedIn',
      allRightsReserved: '© 2022 Gioco di Memoria sui Pregiudizi di Genere. Tutti i diritti riservati.',
      privacyPolicy: 'Politica sulla privacy',
      termsOfService: 'Termini di servizio',
      cookiesSettings: 'Impostazioni dei cookie',
      reflectOnAssociations: 'Gioca a MAT, il Test di Associazione della Memoria, per riflettere sulle associazioni inconsce.',
      preliminaryInformation: 'Informazioni Preliminari'
    }
  };

  const selectedContent = content[selectedLanguage];

  const handlePlayNow = () => {
    if (!name) {
      alert('Please enter your name before proceeding.');
    } else {
      router.push('/playtest');
    }
  };

  return (
    <div className="flex flex-col pt-4" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
      <div className="flex flex-col justify-center px-16 w-full border-0 border-solid leading-[150%] max-md:px-5 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)', borderColor: 'rgb(34, 72, 73)' }}>
        <div className="flex justify-center items-center px-16 max-md:px-5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1089px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
              <div onClick={() => router.push('/')} className="text-5xl font-bold cursor-pointer" style={{ color: 'rgb(212, 114, 62)' }}>MAT</div>
              <div className="flex justify-center items-center px-16 my-auto text-base font-medium" style={{ color: 'rgb(24, 37, 39)' }}>
                <div className="flex gap-5 justify-between">
                  <div onClick={handlePlayNow} style={{ cursor: 'pointer' }}>{selectedContent.playMat}</div>
                  <div onClick={() => router.push('/about')} style={{ cursor: 'pointer' }}>{selectedContent.about}</div>
                  <div onClick={() => router.push('/contact')} style={{ cursor: 'pointer' }}>{selectedContent.contactUs}</div>
                </div>
              </div>
            </div>
            <div className="justify-center px-8 py-3 my-auto text-lg font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)', cursor: 'pointer' }} onClick={handlePlayNow}>
              {selectedContent.playMat}
            </div>
            <LanguageSelector selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center px-5 mt-24 w-full font-bold text-gray-800 max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center text-6xl leading-[90px] max-md:text-4xl">
          {selectedLanguage === 'IT' ? (
            <>
              <span className="text-gray-800">Gioca a </span>
              <span className="text-6xl text-gray-800 leading-[96px]">MAT</span>
            </>
          ) : (
            <>
              <span className="text-gray-800">Play </span>
              <span className="text-6xl text-gray-800 leading-[96px]">MAT</span>
            </>
          )}
        </div>
        <div className="self-center mt-8 text-xl font-medium leading-8" style={{ color: 'rgb(24, 37, 39)' }}>
          {selectedContent.reflectOnAssociations}
        </div>
        <div className="flex flex-col py-16 mt-16 rounded-[30px] max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(34, 72, 73)' }}>
          <div className="self-center text-5xl leading-[57.6px] max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(251, 238, 239)' }}>
            {selectedContent.preliminaryInformation}
          </div>
          <div className="flex flex-col px-16 mt-16 mb-5 text-lg leading-7 max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ color: 'rgb(251, 238, 239)' }}>
            <div className="font-medium leading-7 max-md:max-w-full">
              <span className="font-bold">{selectedContent.objective}</span>: {selectedContent.objectiveDescription}
            </div>
            <div className="mt-10 leading-7 max-md:max-w-full">
              {selectedContent.consent}:{" "}
              <span className="font-medium">
                {selectedContent.consentDescription}
              </span>
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              <span className="font-medium">
                {selectedContent.contact}
              </span>
            </div>
            <div className="flex gap-4 self-start mt-6 font-semibold">
              <div
                className={`shrink-0 rounded border border-solid h-[30px] w-[30px] cursor-pointer ${isConsentChecked ? 'bg-green-500' : 'bg-red-50'}`}
                style={{ borderColor: 'rgb(34, 72, 73)' }}
                onClick={() => setIsConsentChecked(!isConsentChecked)}
              />
              <div className="flex-auto my-auto">
                {selectedContent.readConsent}
              </div>
            </div>
            <button
              className="justify-center self-start px-8 py-3 mt-9 font-semibold whitespace-nowrap rounded-[500px] max-md:px-5"
              style={{ backgroundColor: isConsentChecked ? 'rgb(212, 114, 62)' : 'rgb(212, 114, 62, 0.5)', color: 'rgb(24, 37, 39)' }}
              disabled={!isConsentChecked}
              onClick={() => router.push('/demographicquestions')}
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
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(212, 114, 62)' }}>
                  MAT
                </div>
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
                      <div className="mt-11 max-md:mt-10" onClick={handlePlayNow} style={{ cursor: 'pointer' }}>{selectedContent.playMat}</div>
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

export default PlaytestLanguage;
