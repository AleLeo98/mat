import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import LanguageSelector from '../components/LanguageSelector'; // Ensure the path is correct
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct

function DemographicQuestions() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const router = useRouter(); // Initialize useRouter

  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      gender: 'GENDER',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      age: 'AGE',
      selectAge: 'Select the age',
      education: 'Highest level of education:',
      highSchool: 'High School',
      bachelorsDegree: 'Bachelor’s Degree',
      mastersDegree: 'Master’s Degree',
      doctorateDegree: 'Doctorate Degree',
      otherEducation: 'Other',
      teachingExperience: 'Years of experience teaching:',
      notATeacher: 'I am not a teacher',
      confirm: 'Confirm',
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
      demographicQuestions: 'Demographic Questions',
      fillDemographicQuestions: 'Please fill the demographic questions below.',
      answersSavedAnonymously: 'Your answers will be saved anonymously.',
      enterName: 'Enter your name',
      playNow: 'Play now',
      reflectOnAssociations: 'Play MAT, the Memory Association Test, to reflect on unconscious associations.',
      years_0_2: '0-2 years',
      years_3_5: '3-5 years',
      years_6_10: '6-10 years',
      years_10_plus: '10+ years'
    },
    IT: {
      playMat: 'Gioca a MAT',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      gender: 'GENERE',
      male: 'Maschio',
      female: 'Femmina',
      other: 'Altro',
      age: 'ETÀ',
      selectAge: 'Seleziona l\'età',
      education: 'Livello di istruzione più alto:',
      highSchool: 'Scuola Superiore',
      bachelorsDegree: 'Laurea Triennale',
      mastersDegree: 'Laurea Magistrale',
      doctorateDegree: 'Dottorato di Ricerca',
      otherEducation: 'Altro',
      teachingExperience: 'Anni di esperienza nell\'insegnamento:',
      notATeacher: 'Non sono un insegnante',
      confirm: 'Conferma',
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
      demographicQuestions: 'Domande Demografiche',
      fillDemographicQuestions: 'Si prega di compilare le domande demografiche di seguito.',
      answersSavedAnonymously: 'Le tue risposte saranno salvate in modo anonimo.',
      enterName: 'Inserisci il tuo nome',
      playNow: 'Gioca ora',
      reflectOnAssociations: 'Gioca a MAT, il Test di Associazione di Memoria, per riflettere sulle associazioni inconsce.',
      years_0_2: '0-2 anni',
      years_3_5: '3-5 anni',
      years_6_10: '6-10 anni',
      years_10_plus: '10+ anni'
    }
  };

  const selectedContent = content[selectedLanguage];

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEducation(event.target.value);
  };

  const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedExperience(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAge(event.target.value);
  };

  const isFormValid = selectedGender && selectedEducation && selectedExperience && selectedAge;

  const handleConfirmClick = () => {
    if (isFormValid) {
      router.push('/instruction'); // Navigate to instruction page
    }
  };

  return (
    <div className="flex flex-col pt-4" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
      <div className="flex flex-col justify-center px-16 w-full border-0 border-solid leading-[150%] max-md:px-5 max-md:max-w-full" style={{ borderColor: 'rgb(34, 72, 73)' }}>
        <div className="flex justify-center items-center px-16 max-md:px-5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1089px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div onClick={() => router.push('/')} className="text-5xl font-bold cursor-pointer" style={{ color: 'rgb(212, 114, 62)' }}>MAT</div>
              <div className="flex justify-center items-center px-16 my-auto text-base font-medium text-slate-950 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between">
                  <div onClick={() => router.push('/playtest')} style={{ cursor: 'pointer' }}>{selectedContent.playMat}</div>
                  <div onClick={() => router.push('/about')} style={{ cursor: 'pointer' }}>{selectedContent.about}</div>
                  <div onClick={() => router.push('/contact')} style={{ cursor: 'pointer' }}>{selectedContent.contactUs}</div>
                </div>
              </div>
            </div>
            <div onClick={() => router.push('/playtest')} className="justify-center px-8 py-3 my-auto text-lg font-semibold rounded-[500px] text-slate-950 max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', cursor: 'pointer' }}>
              {selectedContent.playMat}
            </div>
            <LanguageSelector selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center px-5 mt-24 w-full font-bold text-gray-800 leading-[150%] max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center text-6xl max-md:text-4xl">
          <span className="text-gray-800">{selectedContent.playMat.split(' ')[0]} </span>
          <span className="text-6xl text-gray-800 leading-[96px]">{selectedContent.playMat.split(' ')[1]} {selectedContent.playMat.split(' ')[2]} </span>
        </div>
        <div className="self-center mt-8 text-xl font-medium text-slate-950 max-md:max-w-full">
          {selectedContent.reflectOnAssociations}
        </div>
        <div className="flex flex-col px-20 py-16 mt-16 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(34, 72, 73)' }}>
          <div className="self-center text-5xl leading-[57.6px] max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(251, 238, 239)' }}>
            {selectedContent.demographicQuestions}
          </div>
          <div className="mx-4 mt-14 text-lg max-md:mt-10 max-md:mr-2.5 max-md:max-w-full" style={{ color: 'rgb(251, 238, 239)' }}>
            {selectedContent.fillDemographicQuestions}
          </div>
          <div className="mx-4 mt-5 text-lg font-medium max-md:mr-2.5 max-md:max-w-full" style={{ color: 'rgb(251, 238, 239)' }}>
            {selectedContent.answersSavedAnonymously}
          </div>
          <div className="flex flex-wrap justify-between mx-4 mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex flex-col w-full max-w-[45%] text-xl mb-6">
              <div style={{ color: 'rgb(251, 238, 239)' }}>{selectedContent.gender}</div>
              <div className="flex flex-col gap-2 mt-4 text-lg font-medium whitespace-nowrap" style={{ color: 'rgb(251, 238, 239)' }}>
                <label className="flex items-center">
                  <input type="radio" value="Male" checked={selectedGender === 'Male'} onChange={handleGenderChange} className="mr-2" />
                  {selectedContent.male}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="Female" checked={selectedGender === 'Female'} onChange={handleGenderChange} className="mr-2" />
                  {selectedContent.female}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="Other" checked={selectedGender === 'Other'} onChange={handleGenderChange} className="mr-2" />
                  {selectedContent.other}
                </label>
              </div>
              <div className="mt-8" style={{ color: 'rgb(251, 238, 239)' }}>{selectedContent.age}</div>
              <div className="flex gap-2 px-3 py-2.5 mt-4 text-base bg-white rounded-lg border border-gray-800 border-solid text-gray-800 text-opacity-70 w-1/2">
                <select value={selectedAge} onChange={handleAgeChange} className="w-full bg-transparent focus:outline-none">
                  <option value="">{selectedContent.selectAge}</option>
                  {Array.from({ length: 82 }, (_, i) => i + 18).map(age => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[45%] text-xl">
              <div className="uppercase" style={{ color: 'rgb(251, 238, 239)' }}>
                {selectedContent.education}
              </div>
              <div className="flex flex-col gap-2 mt-4 text-lg font-medium" style={{ color: 'rgb(251, 238, 239)' }}>
                <label className="flex items-center">
                  <input type="radio" value="High School" checked={selectedEducation === 'High School'} onChange={handleEducationChange} className="mr-2" />
                  {selectedContent.highSchool}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="Bachelor’s Degree" checked={selectedEducation === 'Bachelor’s Degree'} onChange={handleEducationChange} className="mr-2" />
                  {selectedContent.bachelorsDegree}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="Master’s Degree" checked={selectedEducation === 'Master’s Degree'} onChange={handleEducationChange} className="mr-2" />
                  {selectedContent.mastersDegree}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="Doctorate Degree" checked={selectedEducation === 'Doctorate Degree'} onChange={handleEducationChange} className="mr-2" />
                  {selectedContent.doctorateDegree}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="Other" checked={selectedEducation === 'Other'} onChange={handleEducationChange} className="mr-2" />
                  {selectedContent.otherEducation}
                </label>
              </div>
              <div className="mt-8 uppercase" style={{ color: 'rgb(251, 238, 239)' }}>
                {selectedContent.teachingExperience}
              </div>
              <div className="flex flex-col gap-2 mt-4 text-lg font-medium" style={{ color: 'rgb(251, 238, 239)' }}>
                <label className="flex items-center">
                  <input type="radio" value="0-2 years" checked={selectedExperience === '0-2 years'} onChange={handleExperienceChange} className="mr-2" />
                  {selectedContent.years_0_2}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="3-5 years" checked={selectedExperience === '3-5 years'} onChange={handleExperienceChange} className="mr-2" />
                  {selectedContent.years_3_5}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="6-10 years" checked={selectedExperience === '6-10 years'} onChange={handleExperienceChange} className="mr-2" />
                  {selectedContent.years_6_10}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="10+ years" checked={selectedExperience === '10+ years'} onChange={handleExperienceChange} className="mr-2" />
                  {selectedContent.years_10_plus}
                </label>
                <label className="flex items-center">
                  <input type="radio" value="I am not a teacher" checked={selectedExperience === 'I am not a teacher'} onChange={handleExperienceChange} className="mr-2" />
                  {selectedContent.notATeacher}
                </label>
              </div>
              <button
                className="justify-center self-start px-8 py-3 mt-8 font-semibold text-gray-800 whitespace-nowrap rounded-[500px] max-md:px-5 max-md:mt-10"
                style={{ backgroundColor: isFormValid ? 'rgb(212, 114, 62)' : 'rgb(212, 114, 62, 0.5)' }}
                disabled={!isFormValid}
                onClick={handleConfirmClick} // Add click handler
              >
                {selectedContent.confirm}
              </button>
            </div>
          </div>
        </div>
        <div className="self-start mt-4 ml-3 text-base font-medium max-md:max-w-full" style={{ color: 'rgb(24, 37, 39)' }}>
          {selectedContent.termsConfirmation}
        </div>
      </div>
      <div className="flex flex-col px-16 py-20 mt-48 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
        <div className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold" style={{ color: 'rgb(212, 114, 62)' }}>
                  MAT
                </div>
                <div className="mt-3 text-base text-gray-800 max-md:max-w-full">
                  Memory Association Test
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
                      <div className="mt-11 max-md:mt-10" onClick={() => router.push('/playtest')} style={{ cursor: 'pointer' }}>{selectedContent.playMat}</div>
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/03976b707b4056877658fe192bb4ff791fed1df9a6f07718710a123bf8a2faff?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.facebook}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55bf09e01a7a1c23045a18953544b69844019970b12e738a8d560621f80e79a9?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.instagram}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c91f3cf0eaf442bc702e0da1500da055a47edb9ee9c0eecb0e679f6e936b09cc?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>{selectedContent.twitter}</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5e6aaf11859d21e1e0eda7e7f6ea09951db29de9829f465d7ad9745fdbf969c?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
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

export default DemographicQuestions;
