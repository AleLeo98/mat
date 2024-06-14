import * as React from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faMale, faFutbol, faGamepad, faFlask, faMusic, faBook, faComputer, faCalculator, faPuzzlePiece, faBicycle, faPaintBrush, faRunning, faSlash } from '@fortawesome/free-solid-svg-icons';
import { MdOutlinePiano } from 'react-icons/md';
import Icon from '@mdi/react';
import { mdiHumanFemaleDance } from '@mdi/js';
import LanguageSelector from '../components/LanguageSelector'; // Ensure the path is correct
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct
import { useSelections } from '../context/SelectionsContext'; // Ensure the path is correct

type ChildInfo = {
  id: number;
  description: string;
  about: string;
  age: number | 'Female' | 'Male' | '/';
  interests: string[];
};

const iconStyle = { fontSize: '1.8rem' };

const interestIcons: { [key: string]: React.ReactNode } = {
  'Football': <FontAwesomeIcon icon={faFutbol} style={iconStyle} className="text-black" />,
  'Gaming': <FontAwesomeIcon icon={faGamepad} style={iconStyle} className="text-black" />,
  'Science': <FontAwesomeIcon icon={faFlask} style={iconStyle} className="text-black" />,
  'Music': <FontAwesomeIcon icon={faMusic} style={iconStyle} className="text-black" />,
  'Reading': <FontAwesomeIcon icon={faBook} style={iconStyle} className="text-black" />,
  'Piano': <MdOutlinePiano style={{ fontSize: '1.8rem' }} className="text-black" />,
  'Computing': <FontAwesomeIcon icon={faComputer} style={iconStyle} className="text-black" />,
  'Math': <FontAwesomeIcon icon={faCalculator} style={iconStyle} className="text-black" />,
  'Puzzles': <FontAwesomeIcon icon={faPuzzlePiece} style={iconStyle} className="text-black" />,
  'Cycling': <FontAwesomeIcon icon={faBicycle} style={iconStyle} className="text-black" />,
  'Painting': <FontAwesomeIcon icon={faPaintBrush} style={iconStyle} className="text-black" />,
  'Running': <FontAwesomeIcon icon={faRunning} style={iconStyle} className="text-black" />,
  'Dancing': <Icon path={mdiHumanFemaleDance} size={1.8} color="black" />,
  'Other': <FontAwesomeIcon icon={faSlash} style={iconStyle} className="text-black" />,
};

const italianInterestIcons: { [key: string]: string } = {
  'Calcio': 'Football',
  'Videogiochi': 'Gaming',
  'Scienza': 'Science',
  'Musica': 'Music',
  'Libri': 'Reading',
  'Pianoforte': 'Piano',
  'Computer': 'Computing',
  'Matematica': 'Math',
  'Puzzle': 'Puzzles',
  'Bicicletta': 'Cycling',
  'Arte': 'Painting',
  'Corsa': 'Running',
  'Danza': 'Dancing',
  'Altro': 'Other',
};

const content = {
  EN: {
    playMat: 'Play MAT',
    about: 'About',
    contactUs: 'Contact us',
    memoryAssociationTest: 'Memory Association Test',
    reviewAnswers: 'Review Answers',
    selectIcons: 'Select all icons that apply for each child. For some options, you may need to select more than one icon.',
    startRecall: 'Back to RecallResults',
    graphview: 'Graph View',
    explore: 'Explore',
    howToPlay: 'How to Play',
    followUs: 'Follow Us',
    allRightsReserved: '© 2022 Gender Bias Memory Game. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiesSettings: 'Cookies Settings',
    suDiMe: 'About me.',
    interessi: 'Interests',
    leTueRisposte: 'Your answers.',
    eta: 'AGE',
    genere: 'GENDER',
    enterYourName: 'Enter your name',
    playNow: 'Play now',
    termsConfirmation: 'By playing this game you\'re confirming that you agree with our Terms and Conditions.',
  },
  IT: {
    playMat: 'Gioca a MAT',
    about: 'Chi siamo',
    contactUs: 'Contattaci',
    memoryAssociationTest: 'Test di Associazione di Memoria',
    reviewAnswers: 'Rivedi Risposte',
    selectIcons: 'Seleziona tutte le icone che si applicano a ciascun bambino. Per alcune opzioni, potrebbe essere necessario selezionare più di un\'icona.',
    startRecall: 'Torna ai Risultati di Richiamo',
    graphview: 'Visualizzazione Grafo',
    explore: 'Esplora',
    howToPlay: 'Come giocare',
    followUs: 'Seguici su',
    allRightsReserved: '© 2022 Gioco di Memoria sui Pregiudizi di Genere. Tutti i diritti riservati.',
    privacyPolicy: 'Politica sulla privacy',
    termsOfService: 'Termini di servizio',
    cookiesSettings: 'Impostazioni dei cookie',
    suDiMe: 'Su di me.',
    interessi: 'Interessi',
    leTueRisposte: 'Le tue risposte.',
    eta: 'ETÀ',
    genere: 'GENERE',
    enterYourName: 'Inserisci il tuo nome',
    playNow: 'Gioca ora',
    termsConfirmation: 'Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.',
  }
};

const childrenInfo: { [key: string]: ChildInfo[] } = {
  EN: [
    {
      id: 1,
      description: "I struggle to control myself. I get into fights during football matches.",
      about: "I am eight years old.",
      age: 8,
      interests: ["Football", "Gaming", "Science"]
    },
    {
      id: 2,
      description: "I am responsible, studious, serious, and disciplined. I need the courage to cope with my desires.",
      about: "I am a girl.",
      age: 'Female',
      interests: ["Music", "Reading", "Dancing"]
    },
    {
      id: 3,
      description: "I am energetic and outgoing. I am impulsive and easily distracted. I am a natural leader.",
      about: "I am ten years old.",
      age: 10,
      interests: ["Football", "Gaming", "Computing"]
    },
    {
      id: 4,
      description: "I am diligent and careful in my studies. I am quiet and reserved. I am imaginative and creative.",
      about: "I am nine years old.",
      age: 9,
      interests: ["Music", "Reading", "Piano"]
    },
    {
      id: 5,
      description: "I have a well-defined value system. I have a strong personality. I am always attentive to others.",
      about: "I am a girl.",
      age: 'Female',
      interests: ["Math", "Puzzles", "Computing"]
    },
    {
      id: 6,
      description: "I am easily bored. I am sensitive. I have the record for broken bike wheels.",
      about: "I am a boy.",
      age: 'Male',
      interests: ["Math", "Cycling", "Painting", "Science"]
    }
  ],
  IT: [
    {
      id: 1,
      description: "Faccio fatica a controllarmi. Mi metto in rissa durante le partite di calcio.",
      about: "Ho otto anni.",
      age: 8,
      interests: ["Calcio", "Videogiochi", "Scienza"]
    },
    {
      id: 2,
      description: "Sono responsabile, studiosa, seria e disciplinata. Ho bisogno di coraggio per affrontare i miei desideri.",
      about: "Sono una ragazza.",
      age: 'Female',
      interests: ["Musica", "Libri", "Danza"]
    },
    {
      id: 3,
      description: "Sono energico e socievole. Sono impulsivo e facilmente distratto. Sono un leader naturale.",
      about: "Ho dieci anni.",
      age: 10,
      interests: ["Calcio", "Videogiochi", "Computer"]
    },
    {
      id: 4,
      description: "Sono diligente e attento nei miei studi. Sono tranquillo e riservato. Sono immaginativo e creativo.",
      about: "Ho nove anni.",
      age: 9,
      interests: ["Musica", "Libri", "Pianoforte"]
    },
    {
      id: 5,
      description: "Ho un sistema di valori ben definito. Ho una forte personalità. Sono sempre attento agli altri.",
      about: "Sono una ragazza.",
      age: 'Female',
      interests: ["Matematica", "Puzzle", "Computer"]
    },
    {
      id: 6,
      description: "Mi annoio facilmente. Sono sensibile. Ho il record di ruote di bicicletta rotte.",
      about: "Sono un ragazzo.",
      age: 'Male',
      interests: ["Matematica", "Bicicletta", "Arte", "Scienza"]
    }
  ]
};

const correctAnswers = [
    { age: '8', gender: 'Other', interests: ['Football', 'Gaming', 'Science'] },
    { age: '/', gender: 'Female', interests: ['Music', 'Reading', 'Dancing'] },
    { age: '10', gender: 'Other', interests: ['Football', 'Gaming', 'Computing'] },
    { age: '9', gender: 'Other', interests: ['Music', 'Reading', 'Piano'] },
    { age: '/', gender: 'Female', interests: ['Math', 'Puzzles', 'Computing'] },
    { age: '/', gender: 'Male', interests: ['Math', 'Cycling', 'Painting', 'Science'] }
  ];

function ResultShow() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const { selectedAnswers } = useSelections();
  const router = useRouter();

  const selectedContent = content[selectedLanguage];

  const ages = ['7', '8', '9', '10', '11', '/'];
  const genders = [
    { icon: faFemale, label: 'Female' },
    { icon: faMale, label: 'Male' },
    { icon: faSlash, label: 'Other' },
  ];

  const getAgeIcon = (age: number | 'Female' | 'Male' | '/') => {
    if (typeof age === 'number') {
      return <span className="text-black font-bold" style={{ fontSize: '1.8rem' }}>{age}</span>;
    } else if (age === 'Female') {
      return <FontAwesomeIcon icon={faFemale} style={iconStyle} className="text-black" />;
    } else if (age === 'Male') {
      return <FontAwesomeIcon icon={faMale} style={iconStyle} className="text-black" />;
    } else {
      return <FontAwesomeIcon icon={faSlash} style={iconStyle} className="text-black" />;
    }
  };

  const getInterestIcon = (interest: string) => {
    if (selectedLanguage === 'IT') {
      return interestIcons[italianInterestIcons[interest]];
    }
    return interestIcons[interest];
  };

  const isCorrectAnswer = (childId: number, type: string, value: string | number) => {
    const correctAnswer = correctAnswers[childId - 1];
    if (type === 'age') {
      return correctAnswer[type] === value;
    }
    if (type === 'gender') {
      return correctAnswer[type] === value;
    }
    return correctAnswer.interests.includes(value as string);
  };

  const isSelectedAnswer = (childId: number, type: string, value: string | number) => {
    const selectedAnswer = selectedAnswers[childId - 1];
    if (type === 'age') {
      return selectedAnswer[type] === value;
    }
    if (type === 'gender') {
      return selectedAnswer[type] === value;
    }
    return selectedAnswer.interests.includes(value as string);
  };

  return (
    <div className="flex flex-col items-center pt-4 bg-red-50">
      <div className="flex flex-col justify-center self-stretch px-16 w-full border-0 border-solid leading-[150%] max-md:px-5 max-md:max-w-full" style={{ borderColor: 'rgb(34, 72, 73)' }}>
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
      <div className="mt-24 text-6xl font-bold text-gray-800 leading-[90px] max-md:mt-10 max-md:text-4xl">
        <span className="text-gray-800">{selectedLanguage === 'IT' ? 'Gioca a ' : 'Play '}</span>
        <span className="text-6xl text-gray-800 leading-[96px]">MAT</span>
      </div>
      <div className="mt-8 text-xl font-medium leading-8 text-slate-950 max-md:max-w-full">
        {selectedLanguage === 'IT' ? 'Gioca a MAT, il Test di Associazione di Memoria, per riflettere sulle associazioni inconsce.' : 'Play MAT, the Memory Association Test, to reflect on unconscious associations.'}
      </div>
      <div className="flex flex-col px-5 pt-11 pb-20 mt-16 w-full bg-cyan-900 max-w-[1240px] rounded-[30px] max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(34, 72, 73)' }}>
        <div className="self-center text-5xl font-bold text-red-50 leading-[57.6px] max-md:text-4xl">
          {selectedContent.reviewAnswers}
        </div>
        <div className="flex flex-col px-16 mt-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="text-lg font-medium leading-7 text-red-50 max-md:mr-2.5 max-md:max-w-full">
            {selectedContent.selectIcons}
          </div>
          {childrenInfo[selectedLanguage].map((child) => (
            <div key={child.id} className="flex gap-5 max-md:flex-col max-md:gap-0 mt-16 w-full">
              <div className="flex flex-col w-[42%] max-md:w-full">
                <div className="flex flex-col px-8 pt-5 pb-10 w-full bg-red-50 rounded-3xl max-md:px-5">
                  <div className="self-center text-4xl font-bold leading-10 text-gray-800">
                    {selectedLanguage === 'IT' ? `Bambino ${child.id}` : `Child ${child.id}`}
                  </div>
                  <div className="mt-5 font-medium leading-7 text-gray-800">
                    {child.description}
                  </div>
                  <div className="mt-8 font-bold text-black">
                    {selectedContent.suDiMe}
                  </div>
                  <div className="flex gap-3 mt-3.5">
                    <div className={`w-10 h-10 rounded-md flex items-center justify-center ${isSelectedAnswer(child.id, 'age', child.age) && isCorrectAnswer(child.id, 'age', child.age) ? 'bg-green-500' : 'bg-orange-400'}`}>
                      {getAgeIcon(child.age)}
                    </div>
                    <div className="flex-auto my-auto font-medium text-gray-800">
                      {child.about}
                    </div>
                  </div>
                  <div className="mt-6 font-bold text-black">
                    {selectedContent.interessi}
                  </div>
                  {child.interests.map((interest, index) => (
                    <div key={index} className="flex gap-3 mt-3.5 whitespace-nowrap">
                      <div className={`w-10 h-10 rounded-md flex items-center justify-center ${isSelectedAnswer(child.id, 'interests', interest) ? (isCorrectAnswer(child.id, 'interests', interest) ? 'bg-green-500' : 'bg-red-500') : 'bg-orange-400'}`}>
                        {getInterestIcon(interest)}
                      </div>
                      <div className="flex-auto my-auto font-medium text-gray-800">
                        {interest}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-[58%] max-md:w-full" >
                <div className="text-4xl font-bold text-red-50 mb-5">
                  {selectedContent.leTueRisposte}
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-10">
                    <div className="flex flex-col">
                      <div className="text-lg font-bold text-red-50 mb-2">
                        {selectedLanguage === 'IT' ? 'ETÀ' : 'AGE'}
                      </div>
                      <div className="flex gap-2 mb-6">
                        {ages.map((age, index) => (
                          <div key={index} className={`w-10 h-10 rounded-md flex items-center justify-center ${isSelectedAnswer(child.id, 'age', age) ? (isCorrectAnswer(child.id, 'age', age) ? 'bg-green-500' : 'bg-red-500') : (isCorrectAnswer(child.id, 'age', age) ? 'bg-green-500' : 'bg-orange-400')}`}>
                            {age === '/' ? (
                              <FontAwesomeIcon icon={faSlash} style={iconStyle} className="text-black" />
                            ) : (
                              <span className="text-black font-bold" style={{ fontSize: '1.8rem' }}>{age}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-bold text-red-50 mb-2">
                        {selectedLanguage === 'IT' ? 'GENERE' : 'GENDER'}
                      </div>
                      <div className="flex gap-2 mb-6">
                        {genders.map((gender, index) => (
                          <div key={index} className={`w-10 h-10 rounded-md flex items-center justify-center ${isSelectedAnswer(child.id, 'gender', gender.label) ? (isCorrectAnswer(child.id, 'gender', gender.label) ? 'bg-green-500' : 'bg-red-500') : (isCorrectAnswer(child.id, 'gender', gender.label) ? 'bg-green-500' : 'bg-orange-400')}`}>
                            <FontAwesomeIcon icon={gender.icon} style={iconStyle} className="text-black" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-red-50 mb-2">
                    {selectedLanguage === 'IT' ? 'INTERESSI' : 'INTERESTS'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(interestIcons).slice(0, 10).map((interest, index) => (
                      <div key={index} className={`w-10 h-10 rounded-md flex items-center justify-center ${isSelectedAnswer(child.id, 'interests', interest) ? (isCorrectAnswer(child.id, 'interests', interest) ? 'bg-green-500' : 'bg-red-500') : (isCorrectAnswer(child.id, 'interests', interest) ? 'bg-green-500' : 'bg-orange-400')}`}>
                        {interestIcons[interest]}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {Object.keys(interestIcons).slice(10).map((interest, index) => (
                      <div key={index} className={`w-10 h-10 rounded-md flex items-center justify-center ${isSelectedAnswer(child.id, 'interests', interest) ? (isCorrectAnswer(child.id, 'interests', interest) ? 'bg-green-500' : 'bg-red-500') : (isCorrectAnswer(child.id, 'interests', interest) ? 'bg-green-500' : 'bg-orange-400')}`}>
                        {interestIcons[interest]}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-10 w-full">
            <button
              className="justify-center px-5 py-3 bg-orange-400 rounded-[500px] max-md:pl-5 font-bold"
              onClick={() => router.push('/recallresult')}
            >
              {selectedContent.startRecall}
            </button>
            <button
              className="justify-center px-5 py-3 bg-orange-400 rounded-[500px] max-md:pl-5 font-bold"
              onClick={() => router.push('/graphview')}
            >
              {selectedContent.graphview}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch px-16 py-20 mt-10 w-full bg-red-50 max-md:px-5 max-md:max-w-full">
        <div className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(212, 114, 62)'}}>
                  MAT
                </div>
                <div className="mt-3 text-base text-gray-800 max-md:max-w-full">
                  {selectedContent.memoryAssociationTest}
                </div>
                <div className="flex gap-4 mt-3 max-md:flex-wrap">
                  <div className="flex-1 justify-center self-start p-3 text-base bg-white rounded-lg border border-gray-800 border-solid text-neutral-600">
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
                      <div className="text-base font-semibold leading-6">
                        {selectedContent.explore}
                      </div>
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d71d75b3d00ccec9613c8fe997ece1b1b710400c49d07683f1face222eacf1f9?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>Facebook</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20b5e880895c4a650c3a34baa96f0e3e182ef11e4819ea5f33eb6b24510cafce?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>Instagram</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c2601de0a7e37eccae762786165a7cff234fe3fc4de1caf5b4c2ac372111d7f?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>X</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c40bf1434f5eaef011110763cd55fc6cff416c7e232222f0b4b955f75e3d16?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>LinkedIn</div>
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

export default ResultShow;
