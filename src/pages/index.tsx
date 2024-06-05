import React, { useState } from 'react';
import LanguageSelector from '../components/LanguageSelector'; // Adjust the path based on your directory structure

const Homepage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'IT'>('EN');

  const content = {
    EN: {
      playMat: 'Play MAT',
      promoteAwareness: 'Promote Awareness on Gender Biases',
      moreInclusive: 'Engage teachers in an interactive memory game that prompts reflection on unconscious gender associations.',
      memoryTest: 'Memory association test',
      joinMovement: 'Join the Movement',
      playNow: 'Play now',
      about: 'About',
      contactUs: 'Contact us',
      enterName: 'Enter your name or nickname...',
      howItWorks: 'How it Works',
      challengeAssumptions: 'Challenge Your Assumptions',
      learnMore: 'Learn more',
      explore: 'Explore',
      followUs: 'Follow Us',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedIn: 'LinkedIn',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiesSettings: 'Cookies Settings',
      whatIsMat: 'What is MAT?',
      matDescription: 'MAT is a Memory Association Test, to promote awareness of gender biases among teachers through an engaging and interactive memory game. By presenting teachers with descriptions of children, while concealing the associated genders, MAT prompts reflection on the unconscious associations individuals may hold between gender and various characteristics or attributes.',
      testMemory: 'Test your memory and challenge gender biases.',
      genderBiasMemoryGame: 'Gender Bias Memory Game',
      getInvolved: 'Get Involved',
      aboutGenderBias: 'About Gender Bias',
      memoryGamePrompt: 'Play an engaging and interactive memory game to challenge your gender biases.',
      helpSpreadAwareness: 'Help spread awareness and create a more inclusive environment.',
      termsConfirmation: 'By playing this game you\'re confirming that you agree with our Terms and Conditions.',
      allRightsReserved: '© 2022 Gender Bias Memory Game. All rights reserved.'
    },
    IT: {
      playMat: 'Gioca a MAT',
      promoteAwareness: 'Promuovi la consapevolezza sui pregiudizi di genere',
      moreInclusive: 'Coinvolgi gli insegnanti in un gioco di memoria interattivo che invita a riflettere sulle associazioni di genere inconsce.',
      memoryTest: 'Test di associazione della memoria',
      joinMovement: 'Unisciti al Movimento',
      playNow: 'Gioca ora',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      enterName: 'Inserisci il tuo nome o nickname...',
      howItWorks: 'Come Funziona',
      challengeAssumptions: 'Sfida i tuoi pregiudizi',
      learnMore: 'Scopri di più',
      explore: 'Esplora',
      followUs: 'Seguici su',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedIn: 'LinkedIn',
      privacyPolicy: 'Politica sulla privacy',
      termsOfService: 'Termini di servizio',
      cookiesSettings: 'Impostazioni dei cookie',
      whatIsMat: 'Cos\'è MAT?',
      matDescription: 'MAT è un Test di Associazione di Memoria, per promuovere la consapevolezza sui pregiudizi di genere tra gli insegnanti attraverso un gioco di memoria coinvolgente e interattivo. Presentando agli insegnanti descrizioni di bambini, nascondendo i generi associati, MAT invita a riflettere sulle associazioni inconsce che gli individui possono avere tra genere e varie caratteristiche o attributi.',
      testMemory: 'Metti alla prova la tua memoria e sfida i pregiudizi di genere.',
      genderBiasMemoryGame: 'Gioco di Memoria sui Pregiudizi di Genere',
      getInvolved: 'Partecipa',
      aboutGenderBias: 'Informazioni sui Pregiudizi di Genere',
      memoryGamePrompt: 'Gioca a un gioco di memoria coinvolgente e interattivo per sfidare i tuoi pregiudizi di genere.',
      helpSpreadAwareness: 'Aiuta a diffondere la consapevolezza e creare un ambiente più inclusivo.',
      termsConfirmation: 'Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.',
      allRightsReserved: '© 2022 Gioco di Memoria sui Pregiudizi di Genere. Tutti i diritti riservati.'
    }
  };

  const selectedContent = content[selectedLanguage];

  return (
    <div className="flex flex-col pt-4" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
      <div className="flex flex-col justify-center px-16 w-full border-0 border-solid leading-[150%] max-md:px-5 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)', borderColor: 'rgb(34, 72, 73)' }}>
        <div className="flex justify-between items-center px-16 max-md:px-5 max-md:mr-1 max-md:max-w-full">
          <div className="flex items-center gap-5">
            <div className="text-5xl font-bold" style={{ color: 'rgb(212, 114, 62)' }}>MAT</div>
            <div className="flex gap-5 justify-between my-auto text-base font-medium" style={{ color: 'rgb(24, 37, 39)' }}>
              <a href="/playtest_language" style={{ color: 'rgb(24, 37, 39)' }}>{selectedContent.playMat}</a>
              <a href="/about" style={{ color: 'rgb(24, 37, 39)' }}>{selectedContent.about}</a>
              <div>{selectedContent.contactUs}</div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="justify-center px-8 py-3 text-base font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'white' }}><a href="/playtest_language">{selectedContent.playMat}</a></div>
            <LanguageSelector selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
          </div>
        </div>
      </div>
      <div className="self-center mt-28 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 pb-20 mt-1 max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]" style={{ color: 'rgb(24, 37, 39)' }}>{selectedContent.promoteAwareness}</div>
              <div className="mt-6 text-xl font-medium leading-8 max-md:max-w-full" style={{ color: 'rgb(24, 37, 39)' }}>{selectedContent.moreInclusive}</div>
              <div className="flex gap-4 mt-8 text-base leading-6 max-md:flex-wrap">
                <div className="flex-1 justify-center p-3 bg-white rounded-lg border border-solid text-neutral-600" style={{ borderColor: 'rgb(34, 72, 73)' }}>{selectedContent.enterName}</div>
                <div className="justify-center px-8 py-3 font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'white' }}><a href="/playtest_language">{selectedContent.playNow}</a></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/663fc4ec1501c93fa5331be64d2c83f53a61e34cb417c1969ea49a40305939aa?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
              className="grow w-full aspect-[1.3] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div id="about" className="flex flex-col items-start px-16 py-20 mt-20 w-full text-lg leading-7 max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(34, 72, 73)' }}>
        <div className="text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl" style={{ color: 'white' }}>{selectedContent.whatIsMat}</div>
        <div className="mt-6 font-medium max-md:max-w-full" style={{ color: 'white' }}>
          {selectedContent.matDescription}
        </div>
        <div className="mt-9 max-md:max-w-full" style={{ color: 'white' }}>
          {selectedContent.testMemory}
        </div>
        <div className="flex gap-4 pr-20 mt-4 text-base leading-6 max-md:flex-wrap max-md:pr-5">
          <div className="justify-center px-8 py-3 font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'gray-800' }}><a href="/playtest_language">{selectedContent.playNow}</a></div>
          <div className="flex gap-2 justify-center my-auto" style={{ color: 'white' }}>
            <div className="underline">{selectedContent.learnMore}</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e944f5fe055f1dea958cec7ef0bcbce7e91b6b3def12a373874dc6cd95ecaf45?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="self-center mt-24 w-full max-w-[1306px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bebbfe47e3db54ff00a27e455f9aacf6fe43b4a860bb00171014825a5d31a1e0?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
              className="w-full aspect-[1.3] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-px max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-semibold leading-6 text-center max-md:max-w-full" style={{ color: 'rgb(24, 37, 39)' }}>
                {selectedContent.genderBiasMemoryGame}
              </div>
              <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]" style={{ color: 'rgb(24, 37, 39)' }}>
                {selectedContent.promoteAwareness}
              </div>
              <div className="mt-6 text-lg leading-7 max-md:max-w-full" style={{ color: 'rgb(24, 37, 39)' }}>
                {selectedContent.moreInclusive}
              </div>
              <div className="pt-2 mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-8" style={{ color: 'rgb(24, 37, 39)' }}>
                      <div className="text-xl font-bold leading-7">{selectedContent.howItWorks}</div>
                      <div className="mt-4 text-base leading-6">Gli insegnanti vengono presentati con descrizioni di bambini senza rivelare i generi associati.</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-8" style={{ color: 'rgb(24, 37, 39)' }}>
                      <div className="text-xl font-bold leading-7">{selectedContent.challengeAssumptions}</div>
                      <div className="mt-4 text-base leading-6">Rifletti sulle associazioni inconsce che potresti avere tra genere e varie caratteristiche o attributi.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center self-start px-8 py-3 mt-7 text-base font-semibold leading-6 rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)' }}>
                {selectedContent.learnMore}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(34, 72, 73)' }}>
        <div className="px-px mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bef98c917f1c01fb9d1e56f2c5d5c978d8904a19f1721924637301298b32e6f0?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                  className="self-center w-12 aspect-square"
                />
                <div className="mt-6 text-4xl font-bold leading-10 text-center" style={{ color: 'white' }}>{selectedContent.memoryTest}</div>
                <div className="mt-6 text-lg font-medium leading-7 text-center" style={{ color: 'white' }}>
                  {selectedContent.memoryGamePrompt}
                </div>
                <div className="flex gap-5 justify-between items-start self-center pt-4 mt-6 text-base leading-6">
                  <a href="/playtest_language" className="justify-center px-8 py-3 font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)' }}>{selectedContent.playMat}</a>
                  <div className="flex gap-2 justify-center mt-3 font-medium" style={{ color: 'white' }}>
                    <div className="underline">{selectedContent.learnMore}</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc32a6ad1122ace1237369eb8378326e0f36cf8ee0dabd793625558c408fe816?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pb-8 font-medium max-md:mt-10" style={{ color: 'white' }}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b2c3480596276a71a99a5d97a9aa019b0e397cb4b50d391fe7d9959ae8b204a?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                  className="self-center w-12 aspect-square"
                />
                <div className="mt-6 text-4xl font-bold leading-10 text-center">{selectedContent.promoteAwareness}</div>
                <div className="mt-6 text-lg leading-7 text-center">{selectedContent.moreInclusive}</div>
                <div className="flex gap-2 justify-center self-center mt-7 text-base leading-6">
                  <div className="underline">{selectedContent.aboutGenderBias}</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/94a330ae7d679f3f938a6856ff743704837b4a9d7703ac3185fd7d5c3183a6a9?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/19715051c7a38d6ea2df9015bda4740e643fd793591620b39b8e3aa2c3486bb9?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                  className="self-center w-12 aspect-square"
                />
                <div className="mt-6 text-4xl font-bold leading-10 text-center" style={{ color: 'white' }}>{selectedContent.joinMovement}</div>
                <div className="mt-6 text-lg font-medium leading-7 text-center" style={{ color: 'white' }}>
                  {selectedContent.helpSpreadAwareness}
                </div>
                <div className="flex gap-5 justify-between self-center pt-4 mt-6 text-base leading-6">
                  <div className="justify-center px-8 py-3 font-semibold border border-solid rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)', borderColor: 'rgb(212, 114, 62)' }}>{selectedContent.getInvolved}</div>
                  <div className="flex gap-2 justify-center self-start mt-3 font-medium" style={{ color: 'white' }}>
                    <div className="underline">{selectedContent.contactUs}</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e30ced968d3ea7ae79476b5fdb5c5560017144de2b684316da4f77daa13f1f1?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-16 py-20 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
        <div className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base leading-6 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(212, 114, 62)' }}>MAT</div>
                <div className="mt-3" style={{ color: 'rgb(24, 37, 39)' }}>Memory Association Test</div>
                <div className="flex gap-4 mt-3 max-md:flex-wrap">
                  <div className="flex-1 justify-center p-3 bg-white rounded-lg border border-solid text-neutral-600" style={{ borderColor: 'rgb(24, 37, 39)' }}>{selectedContent.enterName}</div>
                  <div className="justify-center px-8 py-3 font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)' }}><a href="/playtest_language">{selectedContent.playNow}</a></div>
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
                      <div className="text-base font-semibold leading-6">{selectedContent.explore}</div>
                      <div className="mt-4"><a href="/playtest_language">{selectedContent.playMat}</a></div>
                      <div className="mt-4">{selectedContent.about}</div>
                      <div className="mt-4">{selectedContent.contactUs}</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm leading-5 max-md:mt-10" style={{ color: 'rgb(24, 37, 39)' }}>
                      <div className="text-base font-semibold">{selectedContent.followUs}</div>
                      <div className="flex gap-3 py-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d71d75b3d00ccec9613c8fe997ece1b1b710400c49d07683f1face222eacf1f9?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.facebook}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20b5e880895c4a650c3a34baa96f0e3e182ef11e4819ea5f33eb6b24510cafce?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.instagram}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c2601de0a7e37eccae762786165a7cff234fe3fc4de1caf5b4c2ac372111d7f?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.twitter}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c40bf1434f5eaef011110763cd55fc6cff416c7e232222f0b4b955f75e3d16?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
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
        <div className="flex gap-5 justify-between px-px mt-8 w-full text-sm leading-5 max-md:flex-wrap max-md:max-w-full" style={{ color: 'rgb(24, 37, 39)' }}>
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

export default Homepage;
