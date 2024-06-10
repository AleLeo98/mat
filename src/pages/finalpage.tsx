import * as React from "react";
import { useRouter } from 'next/router';
import LanguageSelector from '../components/LanguageSelector'; // Ensure the path is correct
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct

function FinalPage() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const router = useRouter();

  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      memoryAssociationTest: 'Memory Association Test',
      thankYou: 'Thank you for participating in this test!',
      aboutGenderBias: 'About Gender Bias',
      getInvolved: 'Home',
      termsConfirmation: "By playing this game you're confirming that you agree with our Terms and Conditions.",
      enterYourName: 'Enter your name',
      playNow: 'Play now',
      explore: 'Explore',
      howToPlay: 'How to Play',
      followUs: 'Follow Us',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'X',
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
      memoryAssociationTest: 'Test di Associazione di Memoria',
      thankYou: 'Grazie per aver partecipato a questo test!',
      aboutGenderBias: 'Chi siamo',
      getInvolved: 'Home',
      termsConfirmation: "Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.",
      enterYourName: 'Inserisci il tuo nome',
      playNow: 'Gioca ora',
      explore: 'Esplora',
      howToPlay: 'Come giocare',
      followUs: 'Seguici su',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'X',
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
      <div className="flex flex-col justify-center px-16 w-full border-0 border-solid leading-[150%] max-md:px-5 max-md:max-w-full" style={{ borderColor: 'rgb(34, 72, 73)' }}>
        <div className="flex justify-center items-center px-16 max-md:px-5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1089px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
              <div className="text-5xl font-bold" style={{ color: 'rgb(212, 114, 62)' }}>
                MAT
              </div>
              <div className="flex justify-center items-center px-16 my-auto text-base font-medium" style={{ color: 'rgb(24, 37, 39)' }}>
                <div className="flex gap-5 justify-between">
                  <div className="font-bold">{selectedContent.playMat}</div>
                  <div>{selectedContent.about}</div>
                  <div>{selectedContent.contactUs}</div>
                </div>
              </div>
            </div>
            <div className="justify-center px-8 py-3 my-auto text-lg font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)' }}>
              {selectedContent.playMat}
            </div>
            <LanguageSelector selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center px-5 mt-24 w-full leading-[150%] max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center text-6xl font-bold text-gray-800 max-md:text-4xl">
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
        <div className="self-center mt-8 text-xl font-medium" style={{ color: 'rgb(24, 37, 39)' }}>
          Play MAT, the Memory Association Test, to reflect on unconscious associations.
        </div>
        <div className="flex justify-center items-center px-16 py-20 mt-16 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(34, 72, 73)' }}>
          <div className="flex flex-col items-center mt-28 mb-44 max-w-full w-[626px] max-md:my-10">
            <div className="text-5xl font-bold text-center leading-[57.6px] max-md:text-4xl" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.memoryAssociationTest}
            </div>
            <div className="mt-12 text-lg font-bold text-center max-md:mt-10" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.thankYou}
            </div>
            <div className="flex gap-2 justify-center mt-28 text-base font-medium text-center max-md:mt-10" style={{ color: 'rgb(251, 238, 239)' }}>
              <div className="underline">{selectedContent.aboutGenderBias}</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d570984dc7237cc52d53d2c80a79446743170115feff710733311ac737dce055?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between pt-4 mt-6">
              <div
                className="justify-center px-8 py-3 text-lg font-semibold text-gray-800 bg-orange-400 border border-orange-400 border-solid rounded-[500px] max-md:px-5"
                onClick={() => router.push('/')}
                style={{ cursor: 'pointer' }}
              >
                {selectedContent.getInvolved}
              </div>
              <div className="flex gap-2 justify-center self-start mt-3.5 text-base font-medium" style={{ color: 'rgb(251, 238, 239)' }}>
                <div className="underline">{selectedContent.contactUs}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed55b37cdd496350f2acea37707cfa1ab542e7957d1c4b4b17a3d3d015e1a8cd?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-start mt-4 ml-3 text-base font-medium text-gray-800 max-md:max-w-full">
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
                <div className="mt-3 text-base text-gray-800 max-md:max-w-full">
                  {selectedContent.memoryAssociationTest}
                </div>
                <div className="flex gap-4 mt-3 max-md:flex-wrap">
                  <div className="flex-1 justify-center self-start p-3 text-base bg-white rounded-lg border border-solid text-neutral-600" style={{ borderColor: 'rgb(24, 37, 39)' }}>
                    {selectedContent.enterYourName}
                  </div>
                  <div className="justify-center px-8 py-3 text-lg font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)' }}>
                    {selectedContent.playNow}
                  </div>
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
                      <div className="text-base font-semibold leading-6">{selectedContent.explore}</div>
                      <div className="mt-11 max-md:mt-10">{selectedContent.howToPlay}</div>
                      <div className="mt-4">{selectedContent.about}</div>
                      <div className="mt-4">{selectedContent.contactUs}</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm leading-5 text-gray-800 max-md:mt-10">
                      <div className="text-base font-semibold">{selectedContent.followUs}</div>
                      <div className="flex gap-3 py-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9ff82b3938342dd60c74a6a306ad35f3f4ee1fc62108f5a19eb5e3c303c0330?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.facebook}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/11995808e47341aa29294fa90ee757b2cdba74f6ebbdda60d80292f8a09a9750?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.instagram}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73e72f645f2f9cce3aa9ea88f131e81e22aebc0ecf33a31089067b0f71362518?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.twitter}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc262bc44c0ca13674ef7cc06adc4cdaffa74b84a39882a0859ab16491794d03?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
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

export default FinalPage;
