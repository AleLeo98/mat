import * as React from "react";
import LanguageSelector from '../components/LanguageSelector'; // Ensure the path is correct
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBook, faFemale } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons
import { useRouter } from 'next/router';
import Icon from '@mdi/react';
import { mdiHumanFemaleDance } from '@mdi/js';

function MemCard2() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      memorization: 'Memorization',
      memorizationInstruction: 'Memorize the information about the child below. When you are ready, click the button to proceed.',
      child: 'Child 2',
      aboutMe: 'About me.',
      interests: 'Interests',
      next: 'Next',
      termsConfirmation: "By playing this game you're confirming that you agree with our Terms and Conditions.",
      enterName: 'Enter your name',
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
      cookiesSettings: 'Cookies Settings',
      memoryAssociationTest: 'Memory Association Test',
      reflectOnAssociations: 'Play MAT, the Memory Association Test, to reflect on unconscious associations.',
      childDetails: [
        "I am responsible, studious, serious, and disciplined. I need the courage to cope with my desires.",
        "I am a girl.",
        "Music",
        "Books",
        "Dance"
      ],
      cardsToGo: '4 cards to go'
    },
    IT: {
      playMat: 'Gioca a MAT',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      memorization: 'Memorizzazione',
      memorizationInstruction: 'Memorizza le informazioni sul bambino qui sotto. Quando sei pronto, clicca il pulsante per procedere.',
      child: 'Carta 2',
      aboutMe: 'Su di me.',
      interests: 'Interessi',
      next: 'Prossimo',
      termsConfirmation: "Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.",
      enterName: 'Inserisci il tuo nome',
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
      cookiesSettings: 'Impostazioni dei cookie',
      memoryAssociationTest: 'Test di Associazione di Memoria',
      reflectOnAssociations: 'Gioca a MAT, il Test di Associazione della Memoria, per riflettere sulle associazioni inconsce.',
      childDetails: [
        "Sono responsabile, studio molto, e ho molta disciplina e serietà. Ho bisogno del coraggio per far fronte ai miei desideri.",
        "Sono una ragazza.",
        "Musica",
        "Libri",
        "Danza"
      ],
      cardsToGo: '4 carte rimanenti'
    }
  };

  const router = useRouter();

  const handleNextClick = () => {
    router.push('/memcard3');
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
            {selectedContent.memorization}
          </div>
          <div className="flex flex-col px-20 mt-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-lg font-medium leading-7" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.memorizationInstruction}
            </div>
            <div className="mt-14 mx-auto w-full max-md:mt-10">
              <div className="flex gap-5 justify-center max-md:flex-col max-md:gap-0">
                <div className="relative flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                  <div className="absolute transform -rotate-6 top-4 left-2 h-[376px] w-[282px] bg-gray-200 rounded-3xl" />
                  <div className="absolute transform rotate-6 top-0 left-0 h-[376px] w-[282px] bg-white rounded-3xl flex justify-center items-center" style={{ color: 'rgb(212, 114, 62)', backgroundColor: 'rgb(251, 238, 239)' }}>
                    <div className="text-center">
                      <div className="text-3xl font-bold">MAT</div>
                      <div className="mt-2 text-xl">{selectedContent.cardsToGo}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-8 w-[60%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-7 pr-14 pl-6 mx-auto w-full text-lg leading-7 bg-white rounded-3xl max-md:px-5 max-md:mt-10" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
                    <div className="self-center text-4xl font-bold leading-10 text-gray-800">
                      {selectedContent.child}
                    </div>
                    <div className="mt-7 font-medium leading-7 text-gray-800">
                      {selectedContent.childDetails[0]}
                    </div>
                    <div className="mt-8 font-bold text-black">{selectedContent.aboutMe}</div>
                    <div className="flex gap-3 mt-3.5">
                      <div className="flex justify-center items-center font-bold text-black bg-orange-400 rounded-md h-[35px] w-[35px] text-2xl">
                        <FontAwesomeIcon icon={faFemale} />
                      </div>
                      <div className="flex-auto my-auto font-medium text-gray-800">
                        {selectedContent.childDetails[1]}
                      </div>
                    </div>
                    <div className="mt-6 font-bold text-black">{selectedContent.interests}</div>
                    <div className="flex gap-3 mt-3.5">
                      <div className="flex justify-center items-center font-bold text-black bg-orange-400 rounded-md h-[35px] w-[35px] text-2xl">
                        <FontAwesomeIcon icon={faMusic} />
                      </div>
                      <div className="flex-auto my-auto font-medium text-gray-800">
                        {selectedContent.childDetails[2]}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-3.5">
                      <div className="flex justify-center items-center font-bold text-black bg-orange-400 rounded-md h-[35px] w-[35px] text-2xl">
                        <FontAwesomeIcon icon={faBook} />
                      </div>
                      <div className="flex-auto my-auto font-medium text-gray-800">
                        {selectedContent.childDetails[3]}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-3.5">
                      <div className="flex justify-center items-center font-bold text-black bg-orange-400 rounded-md h-[35px] w-[35px] text-2xl">
                        <Icon path={mdiHumanFemaleDance} size={1.5} />
                      </div>
                      <div className="flex-auto my-auto font-medium text-gray-800">
                        {selectedContent.childDetails[4]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={handleNextClick} className="justify-center self-end px-8 py-3 mt-2.5 text-lg font-semibold leading-7 text-gray-800 whitespace-nowrap bg-orange-400 rounded-[500px] max-md:px-6 cursor-pointer">
              {selectedContent.next}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start mt-7 bg-white max-md:pr-5 max-md:max-w-full">
            <div className="shrink-0 h-3.5 bg-orange-400 w-[158px]" />
          </div>
        </div>
        <div className="self-start mt-4 ml-3 text-base font-medium leading-6 text-gray-800 max-md:max-w-full">
          {selectedContent.termsConfirmation}
        </div>
      </div>
      <div className="flex flex-col px-16 py-20 mt-48 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
        <div className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
                <div onClick={() => router.push('/')} className="text-5xl font-bold cursor-pointer" style={{ color: 'rgb(212, 114, 62)' }}>MAT</div>
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a5bde1b07cab819b3ceacc2b28eed9aac2407bc88c145a03c968ce58212a54a?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.facebook}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/130f782770b89bc7ab4f09bda52952fe21674c5c1e9e54058f11a4e95ab5d637?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.instagram}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3baabc822e405367a48a67a929730603883d9a079dd7fda39efcec660c65d69?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>Twitter</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/92cd6db696ed3caa434075e2eeba252d7e70566f8db049d8973b7405bf86c050?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
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

export default MemCard2;
