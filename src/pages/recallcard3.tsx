import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct
import LanguageSelector from '../components/LanguageSelector'; // Ensure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faGamepad, faFlask, faMusic, faBook, faFemale, faMale, faComputer, faCalculator, faPuzzlePiece, faBicycle, faPaintBrush, faRunning, faSlash } from '@fortawesome/free-solid-svg-icons';
import Icon from '@mdi/react';
import { mdiHumanFemaleDance } from '@mdi/js';
import { MdOutlinePiano } from 'react-icons/md';
import { useSelections } from '../context/SelectionsContext'; // Ensure the path is correct
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { IconType } from 'react-icons';

function RecallCard3() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const { selectedAnswers, updateSelectedAnswers } = useSelections();

  const router = useRouter();
  const cardIndex = 2;

  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      recallInstructions: 'Recall Instructions',
      recallInstructionDetail: 'Select all icons that apply for each child. For some options, you may need to select more than one icon.',
      startRecall: 'Continue',
      termsConfirmation: "By playing this game you're confirming that you agree with our Terms and Conditions.",
      reflectOnAssociations: 'Play MAT, the Memory Association Test, to reflect on unconscious associations.',
      memoryTest: 'Memory Association Test',
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
      aboutMe: 'About me.',
      interests: 'Interests',
      gender: 'Gender',
      age: 'Age',
      child1: 'Child 3',
      child1Description: 'I am energetic and outgoing. I am impulsive and easily distracted. I am a natural leader.',
      selectIcons: 'Select icons:',
    },
    IT: {
      playMat: 'Gioca a MAT',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      recallInstructions: 'Istruzioni di Richiamo',
      recallInstructionDetail: 'Seleziona tutte le icone che si applicano a ciascun bambino. Per alcune opzioni, potrebbe essere necessario selezionare più di un\'icona.',
      startRecall: 'Continua',
      termsConfirmation: "Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.",
      reflectOnAssociations: 'Gioca a MAT, il Test di Associazione della Memoria, per riflettere sulle associazioni inconsce.',
      memoryTest: 'Test di Associazione della Memoria',
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
      aboutMe: 'Chi sono.',
      interests: 'Interessi',
      gender: 'Genere',
      age: 'Età',
      child1: 'Carta 3',
      child1Description: 'Ho un carattere energetico ed estroverso. Ho molta impulsività, e la mia mente si distrae.',
      selectIcons: 'Seleziona le icone:',
    }
  };

  const selectedContent = content[selectedLanguage] || content.EN;

  const ages = ['7', '8', '9', '10', '11', '/'];
  const genders = [
    { icon: faFemale, label: 'Female' },
    { icon: faMale, label: 'Male' },
    { icon: faSlash, label: 'Other' },
  ];
  const interests = [
    { icon: faFutbol, label: 'Football' },
    { icon: faGamepad, label: 'Gaming' },
    { icon: faFlask, label: 'Science' },
    { icon: faMusic, label: 'Music' },
    { icon: faBook, label: 'Reading' },
    { icon: MdOutlinePiano, label: 'Piano' },
    { icon: faComputer, label: 'Computing' },
    { icon: faCalculator, label: 'Math' },
    { icon: faPuzzlePiece, label: 'Puzzles' },
    { icon: faBicycle, label: 'Cycling' },
    { icon: faPaintBrush, label: 'Painting' },
    { icon: faRunning, label: 'Running' },
    { icon: mdiHumanFemaleDance, label: 'Dancing' },
    { icon: faSlash, label: 'Other' },
  ];

  const handleAgeSelect = (value: string) => {
    const newValue = selectedAnswers[cardIndex].age === value ? null : value;
    const newAnswer = { ...selectedAnswers[cardIndex], age: newValue };
    updateSelectedAnswers(cardIndex, newAnswer);
  };

  const handleGenderSelect = (value: string) => {
    const newValue = selectedAnswers[cardIndex].gender === value ? null : value;
    const newAnswer = { ...selectedAnswers[cardIndex], gender: newValue };
    updateSelectedAnswers(cardIndex, newAnswer);
  };

  const handleInterestSelect = (value: string) => {
    const currentInterests = selectedAnswers[cardIndex].interests;
    let newInterests;
    if (currentInterests.includes(value)) {
      newInterests = currentInterests.filter((item) => item !== value);
    } else if (currentInterests.length < 4) {
      newInterests = [...currentInterests, value];
    } else {
      newInterests = currentInterests;
    }
    const newAnswer = { ...selectedAnswers[cardIndex], interests: newInterests };
    updateSelectedAnswers(cardIndex, newAnswer);
  };

  const handleContinue = () => {
    console.log('Selections:', selectedAnswers[cardIndex]);
    router.push('/recallcard4');
  };

  const renderIcon = (icon: IconDefinition | IconType | string) => {
    if (typeof icon === 'object' && 'iconName' in icon) {
      return <FontAwesomeIcon icon={icon as IconDefinition} />;
    } else if (typeof icon === 'string') {
      return <Icon path={icon} size={1.5} />;
    } else {
      const IconComponent = icon as IconType;
      return <IconComponent />;
    }
  };

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
            {selectedContent.recallInstructions}
          </div>
          <div className="flex flex-col px-20 mt-16 text-lg leading-7 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="font-medium" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.recallInstructionDetail}
            </div>
            <div className="self-center mt-16 max-w-full w-[951px] max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-8 pt-5 pb-10 w-full text-lg font-bold leading-7 text-gray-800 bg-red-50 rounded-3xl max-md:px-5 max-md:mt-10">
                    <div className="self-center text-4xl leading-10">
                      {selectedContent.child1}
                    </div>
                    <div className="mt-5 font-medium leading-7">
                      {selectedContent.child1Description}
                    </div>
                    <div className="flex mt-5 text-black">
                      <div className="mr-5">
                        {selectedContent.age}
                        {selectedAnswers[cardIndex].age && (
                          <div className="mt-2 text-black">
                            <div className="shrink-0 w-10 h-10 bg-orange-400 text-black rounded-md flex items-center justify-center" style={{ fontSize: '1.8rem' }}>
                              {selectedAnswers[cardIndex].age === '/' ? (
                                <FontAwesomeIcon icon={faSlash} />
                              ) : (
                                selectedAnswers[cardIndex].age
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        {selectedContent.gender}
                        {selectedAnswers[cardIndex].gender && (
                          <div className="mt-2 text-black">
                            <div className="shrink-0 w-10 h-10 bg-orange-400 text-black rounded-md flex items-center justify-center" style={{ fontSize: '1.8rem' }}>
                              <FontAwesomeIcon icon={genders.find(g => g.label === selectedAnswers[cardIndex].gender)?.icon!} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-10 text-black">
                      {selectedContent.interests}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedAnswers[cardIndex].interests.map((interestLabel) => (
                          <div key={interestLabel} className="shrink-0 w-10 h-10 bg-orange-400 text-black rounded-md flex items-center justify-center" style={{ fontSize: '1.8rem' }}>
                            {renderIcon(interests.find(interest => interest.label === interestLabel)?.icon!)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-7 max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow max-md:mt-10">
                            <div className="text-4xl font-bold leading-10 text-red-50">
                              {selectedContent.selectIcons}
                            </div>
                            <div className="flex items-start gap-5 mt-7 text-lg font-bold leading-7 text-red-50 uppercase">
                              <div className="flex flex-col">
                                {selectedContent.age}
                                <div className="flex gap-2 mt-5">
                                  {ages.map((age) => (
                                    <div
                                      key={age}
                                      className={`shrink-0 w-10 h-10 rounded-md flex items-center justify-center cursor-pointer ${selectedAnswers[cardIndex].age === age ? 'bg-orange-500' : 'bg-orange-400'}`}
                                      style={{ fontSize: '1.8rem', color: 'black' }}
                                      onClick={() => handleAgeSelect(age)}
                                    >
                                      {age === '/' ? <FontAwesomeIcon icon={faSlash} /> : age}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="flex flex-col ml-10">
                                {selectedContent.gender}
                                <div className="flex gap-2 mt-5">
                                  {genders.map((gender) => (
                                    <div
                                      key={gender.label}
                                      className={`shrink-0 w-10 h-10 rounded-md flex items-center justify-center cursor-pointer ${selectedAnswers[cardIndex].gender === gender.label ? 'bg-orange-500' : 'bg-orange-400'}`}
                                      style={{ fontSize: '1.8rem', color: 'black' }}
                                      onClick={() => handleGenderSelect(gender.label)}
                                    >
                                      <FontAwesomeIcon icon={gender.icon} />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 text-lg font-bold leading-7 text-red-50 uppercase max-md:mt-10 max-md:max-w-full">
                      {selectedContent.interests}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-5 max-md:flex-wrap max-md:pr-5">
                      {interests.slice(0, 10).map((interest) => (
                        <div
                          key={interest.label}
                          className={`shrink-0 w-10 h-10 text-black rounded-md flex items-center justify-center cursor-pointer ${selectedAnswers[cardIndex].interests.includes(interest.label) ? 'bg-orange-500' : 'bg-orange-400'}`}
                          style={{ fontSize: '1.8rem', color: 'black' }}
                          onClick={() => handleInterestSelect(interest.label)}
                        >
                          {renderIcon(interest.icon)}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 max-md:flex-wrap max-md:pr-5">
                      {interests.slice(10).map((interest) => (
                        <div
                          key={interest.label}
                          className={`shrink-0 w-10 h-10 text-black rounded-md flex items-center justify-center cursor-pointer ${selectedAnswers[cardIndex].interests.includes(interest.label) ? 'bg-orange-500' : 'bg-orange-400'}`}
                          style={{ fontSize: '1.8rem', color: 'black' }}
                          onClick={() => handleInterestSelect(interest.label)}
                        >
                          {renderIcon(interest.icon)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleContinue} className="justify-center self-end px-5 py-3 mt-1 text-lg font-semibold leading-7 text-gray-800 bg-orange-400 rounded-[500px]">
              {selectedContent.startRecall}
            </button>
          </div>
          <div className="flex flex-col justify-center items-start mt-7 bg-red-50 max-md:pr-5 max-md:max-w-full">
            <div className="shrink-0 max-w-full h-3.5 bg-orange-400 w-3/6" />
          </div>
        </div>
        <div className="self-start mt-4 ml-3 text-base font-medium leading-6 text-gray-800 max-md:max-w-full">
          {selectedContent.termsConfirmation}
        </div>
      </div>
      <div className="flex flex-col px-16 py-20 mt-48 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
        <div className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
              <div onClick={() => router.push('/')} className="text-5xl font-bold cursor-pointer" style={{ color: 'rgb(212, 114, 62)' }}>MAT</div>
                <div className="mt-3 text-base text-gray-800 max-md:max-w-full">
                  {selectedContent.memoryTest}
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

export default RecallCard3;
