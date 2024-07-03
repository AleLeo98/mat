import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFemale, faMale, faFutbol, faGamepad, faFlask, faMusic, faBook,
  faComputer, faCalculator, faPuzzlePiece, faBicycle, faPaintBrush,
  faRunning, faSlash
} from '@fortawesome/free-solid-svg-icons';
import { MdOutlinePiano } from 'react-icons/md';
import Icon from '@mdi/react';
import { mdiHumanFemaleDance } from '@mdi/js';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelections } from '../context/SelectionsContext';
import LanguageSelector from '../components/LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const iconMapping: { [key: string]: JSX.Element } = {
  Football: <FontAwesomeIcon icon={faFutbol} size="2x" color="black" />,
  Gaming: <FontAwesomeIcon icon={faGamepad} size="2x" color="black" />,
  Science: <FontAwesomeIcon icon={faFlask} size="2x" color="black" />,
  Music: <FontAwesomeIcon icon={faMusic} size="2x" color="black" />,
  Reading: <FontAwesomeIcon icon={faBook} size="2x" color="black" />,
  Computing: <FontAwesomeIcon icon={faComputer} size="2x" color="black" />,
  Math: <FontAwesomeIcon icon={faCalculator} size="2x" color="black" />,
  Puzzles: <FontAwesomeIcon icon={faPuzzlePiece} size="2x" color="black" />,
  Cycling: <FontAwesomeIcon icon={faBicycle} size="2x" color="black" />,
  Painting: <FontAwesomeIcon icon={faPaintBrush} size="2x" color="black" />,
  Running: <FontAwesomeIcon icon={faRunning} size="2x" color="black" />,
  Piano: <MdOutlinePiano size="2.4em" color="black" />,
  Dancing: <Icon path={mdiHumanFemaleDance} size={1.9} color="black" />,
  Other: <FontAwesomeIcon icon={faSlash} size="2x" color="black" />,
};

const GraphPage: React.FC = () => {
  const { selectedAnswers } = useSelections();
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState<'Female' | 'Male'>('Female');

  // Translation content
  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      reflectOnAssociations: 'Play MAT, the Memory Association Test, to reflect on unconscious associations.',
      graph: 'Graph',
      graphDescription: 'This graph represents the most associated items with the selected gender.',
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
      termsConfirmation: "By playing this game you're confirming that you agree with our Terms and Conditions.",
      memoryAssociationTest: 'Memory Association Test',
      backToResults: 'Back to the Results',
      Football: 'Football',
      Gaming: 'Gaming',
      Science: 'Science',
      Music: 'Music',
      Reading: 'Reading',
      Piano: 'Piano',
      Computing: 'Computing',
      Math: 'Math',
      Puzzles: 'Puzzles',
      Cycling: 'Cycling',
      Painting: 'Painting',
      Running: 'Running',
      Dancing: 'Dancing',
      Other: 'Other',
    },
    IT: {
      playMat: 'Gioca a MAT',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      reflectOnAssociations: 'Gioca a MAT, il Test di Associazione della Memoria, per riflettere sulle associazioni inconsce.',
      graph: 'Grafico',
      graphDescription: 'Questo grafico rappresenta gli oggetti più associati con il genere selezionato.',
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
      termsConfirmation: "Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.",
      memoryAssociationTest: 'Test di Associazione di Memoria',
      backToResults: 'Torna ai Risultati',
      Football: 'Calcio',
      Gaming: 'Videogiochi',
      Science: 'Scienza',
      Music: 'Musica',
      Reading: 'Libri',
      Piano: 'Pianoforte',
      Computing: 'Computer',
      Math: 'Matematica',
      Puzzles: 'Puzzle',
      Cycling: 'Bicicletta',
      Painting: 'Arte',
      Running: 'Corsa',
      Dancing: 'Danza',
      Other: 'Altro',
    },
  };

  const selectedContent = content[selectedLanguage];

  // Filter answers based on selected gender
  const filteredAnswers = selectedAnswers.filter(answer => answer.gender === selectedGender);

  // Count the occurrences of each interest
  const interestCounts: { [key: string]: number } = {};
  filteredAnswers.forEach(answer => {
    answer.interests.forEach(interest => {
      if (!interestCounts[interest]) {
        interestCounts[interest] = 0;
      }
      interestCounts[interest]++;
    });
  });

  // Sort interests by their counts in descending order and take the top 4
  const sortedInterests = Object.entries(interestCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 4);

  // Prepare data for the donut chart
  const pieData = {
    labels: sortedInterests.map(([interest]) => interest),
    datasets: [
      {
        data: sortedInterests.map(([, count]) => count),
        backgroundColor: ['#D36E33', '#F19941','#F4AD67', '#F1C453', ],
      },
    ],
  };

  const pieOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col pt-4 bg-red-50">
      <header className="flex flex-col justify-center px-16 w-full border-0 border-solid border-sky-950 leading-[150%] max-md:px-5 max-md:max-w-full">
        <nav className="flex justify-center items-center px-16 max-md:px-5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1089px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
              <div className="text-5xl font-bold max-md:text-4xl cursor-pointer"style={{ color: 'rgb(212, 114, 62)' }}  onClick={() => router.push('/')}>MAT</div>
              <div className="flex justify-center items-center px-16 my-auto text-base font-medium text-slate-950 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between">
                  <div className="cursor-pointer" onClick={() => router.push('/demographicquestions')}>{selectedContent.playMat}</div>
                  <div className="cursor-pointer" onClick={() => router.push('/about')}>{selectedContent.about}</div>
                  <div className="cursor-pointer" onClick={() => router.push('/contact')}>{selectedContent.contactUs}</div>
                </div>
              </div>
            </div>
            <div onClick={() => router.push('/demographicquestions')} className="justify-center px-8 py-3 my-auto text-lg font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)', cursor: 'pointer' }}>
              {selectedContent.playMat}
            </div>
            <LanguageSelector selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
          </div>
        </nav>
      </header>
      <main className="flex flex-col self-center px-5 mt-24 w-full text-gray-800 leading-[150%] max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <h1 className="self-center text-6xl font-bold max-md:text-4xl">
          {selectedLanguage === 'EN' ? (
            <>
              <span className="text-gray-800">Play </span>
              <span className="text-6xl text-gray-800 leading-[96px]">MAT</span>
            </>
          ) : (
            <>
              <span className="text-gray-800">Gioca a </span>
              <span className="text-6xl text-gray-800 leading-[96px]">MAT</span>
            </>
          )}
        </h1>
        <p className="self-center mt-8 text-xl font-medium text-slate-950 max-md:max-w-full">
          {selectedContent.reflectOnAssociations}
        </p>
        <section className="flex flex-col items-center px-20 py-16 mt-16 text-5xl text-red-50 bg-cyan-900 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl relative" style={{ backgroundColor: 'rgb(34, 72, 73)' }}>
          <h2 className="font-bold leading-[120%] max-md:text-4xl">{selectedContent.graph}</h2>
          <p className="self-center mt-2 text-lg font-medium text-slate-50 max-md:max-w-full">
            {selectedContent.graphDescription}
          </p>
          <div className="flex justify-center mt-8 w-full">
            <button
              onClick={() => setSelectedGender('Female')}
              className={`px-4 py-2 mx-2 rounded-full ${selectedGender === 'Female' ? 'bg-orange-400' : 'bg-gray-300'}`}
            >
              <FontAwesomeIcon icon={faFemale} className="text-white" />
            </button>
            <button
              onClick={() => setSelectedGender('Male')}
              className={`px-4 py-2 mx-2 rounded-full ${selectedGender === 'Male' ? 'bg-orange-400' : 'bg-gray-300'}`}
            >
              <FontAwesomeIcon icon={faMale} className="text-white" />
            </button>
          </div>
          <div className="relative flex justify-center mt-8 w-full h-[500px] bg-[#FBEEE9] rounded-[30px] mb-8">
            <div className="absolute left-0 flex flex-col items-start justify-center p-4">
              {sortedInterests.map(([interest, count], index) => (
                <div key={interest} className="flex items-center mb-4 text-lg font-medium text-black">
                  <div className="w-8 h-8 mr-2" style={{ backgroundColor: pieData.datasets[0].backgroundColor[index] }}></div>
                  {iconMapping[interest]}
                  <span className="ml-2">{`${selectedContent[interest as keyof typeof selectedContent]} (${count})`}</span>
                </div>
              ))}
            </div>
            <Pie data={pieData} options={pieOptions} />
          </div>
          <button
            onClick={() => router.push('/recallresult')}
            className="absolute bottom-4 right-4 mb-4 px-8 py-3 text-lg font-semibold rounded-[500px] max-md:px-5  cursor-pointer bg-orange-400 text-gray-800"
          >
            {selectedContent.backToResults}
          </button>
        </section>
        <p className="self-start mt-4 ml-3 text-base font-medium max-md:max-w-full">
          {selectedContent.termsConfirmation}
        </p>
      </main>
      <footer className="flex flex-col px-16 py-20 mt-48 w-full bg-red-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl cursor-pointer"style={{ color: 'rgb(212, 114, 62)' }} onClick={() => router.push('/')}>MAT</div>
                <div className="mt-3 text-base text-gray-800 max-md:max-w-full">{selectedContent.memoryAssociationTest}</div>
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
                      <div className="mt-11 max-md:mt-10 cursor-pointer" onClick={() => router.push('/demographicquestions')}>{selectedContent.howToPlay}</div>
                      <div className="mt-4 cursor-pointer" onClick={() => router.push('/about')}>{selectedContent.about}</div>
                      <div className="mt-4 cursor-pointer" onClick={() => router.push('/contact')}>{selectedContent.contactUs}</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm leading-5 text-gray-800 max-md:mt-10">
                      <div className="text-base font-semibold">{selectedContent.followUs}</div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/31862d577c1c4217bd30c14752e5d467f5075e6cd3fe3b4a75427669c7ec9538?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.facebook}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/02242ac32b5fdc65a137a2c1e33c5f4ce72d0bec02193926fbf2fb36c3cfc889?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.instagram}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16cf6904b7dc7feb0d8c5fb5fbc0cde339ed82aa2f5de069630be7dc33201c3a?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.twitter}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/772309a4d8a9797b55951dd81c89334b4d4719aafd5c4d94696a14c4956e7941?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
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
            <div className="underline cursor-pointer" onClick={() => router.push('/privacy')}>{selectedContent.privacyPolicy}</div>
            <div className="underline cursor-pointer" onClick={() => router.push('/terms')}>{selectedContent.termsOfService}</div>
            <div className="underline cursor-pointer" onClick={() => router.push('/cookies')}>{selectedContent.cookiesSettings}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GraphPage;
