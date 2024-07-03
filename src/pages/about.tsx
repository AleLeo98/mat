import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LanguageSelector from '../components/LanguageSelector'; // Adjust the path based on your directory structure
import { useLanguage } from '../context/LanguageContext'; // Adjust the path based on your directory structure

const About: React.FC = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [name, setName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

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
      howToPlay: 'Play MAT',
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
      howMatWorks: 'How does MAT work?',
      challengeAssumptions: 'Challenge Your Assumptions',
      reflectAssociations: 'Reflect on the unconscious associations you may hold between gender and various characteristics or attributes.',
      morbiSedImperdiet: 'Engage in an interactive memory game to challenge gender biases and reflect on unconscious associations.',
      whatAreGenderBiases: 'What are gender biases?',
      genderBiasesDescription: 'Gender biases are preconceived notions or stereotypes about individuals based on their gender. These biases can influence behavior, expectations, and interactions in various aspects of life.',
      questionsContact: 'For any questions or concerns about the study, you can contact us.',
      contactUsButton: 'Contact us',
      enterYourName: 'Enter your name',
      playNow: 'Play now',
      termsConfirmation: "By playing this game you're confirming that you agree with our Terms and Conditions.",
      allRightsReserved: '© 2022 Gender Bias Memory Game. All rights reserved.',
      aboutGenderBiasInEducation: 'About Gender Bias in Education',
      promotingAwareness: 'Promoting Awareness Through an Engaging Game',
      addressGenderBiases: 'One effective way to address gender biases among teachers is through an engaging and interactive memory game. By presenting descriptions of children without revealing their associated genders, the game prompts reflection on unconscious gender associations. This blog section explores how the Memory Association Test (MAT) aims to promote awareness of gender biases in education.',
      nameRequired: 'Please enter your name or nickname before playing.'
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
      howToPlay: 'Gioca a MAT',
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
      howMatWorks: 'Come funziona MAT?',
      challengeAssumptions: 'Sfida i tuoi pregiudizi',
      reflectAssociations: 'Rifletti sulle associazioni inconsce che potresti avere tra genere e varie caratteristiche o attributi.',
      morbiSedImperdiet: 'Partecipa a un gioco di memoria interattivo per sfidare i pregiudizi di genere e riflettere sulle associazioni inconsce.',
      whatAreGenderBiases: 'Cosa sono i pregiudizi di genere?',
      genderBiasesDescription: 'I pregiudizi di genere sono nozioni preconcette o stereotipi sugli individui basati sul loro genere. Questi pregiudizi possono influenzare il comportamento, le aspettative e le interazioni in vari aspetti della vita.',
      questionsContact: 'Per qualsiasi domanda o dubbio sullo studio, puoi contattarci.',
      contactUsButton: 'Contattaci',
      enterYourName: 'Inserisci il tuo nome',
      playNow: 'Gioca ora',
      termsConfirmation: 'Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.',
      allRightsReserved: '© 2022 Gioco di Memoria sui Pregiudizi di Genere. Tutti i diritti riservati.',
      aboutGenderBiasInEducation: 'Informazioni sui pregiudizi di genere nell\'istruzione',
      promotingAwareness: 'Promuovere la consapevolezza attraverso un gioco coinvolgente',
      addressGenderBiases: 'Un modo efficace per affrontare i pregiudizi di genere tra gli insegnanti è attraverso un gioco di memoria coinvolgente e interattivo. Presentando descrizioni di bambini senza rivelare i loro generi associati, il gioco invita a riflettere sulle associazioni di genere inconsce. Questa sezione del blog esplora come il Test di Associazione di Memoria (MAT) mira a promuovere la consapevolezza sui pregiudizi di genere nell\'istruzione.',
      nameRequired: 'Inserisci il tuo nome o nickname prima di giocare.'
    }
  };

  const selectedContent = content[selectedLanguage];

  const handlePlayNow = () => {
    if (!name) {
      setShowPopup(true);
    } else {
      router.push('/demographicquestions');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center pt-4" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <p>{selectedContent.nameRequired}</p>
            <div className="flex gap-4 mt-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 justify-center p-3 bg-white rounded-lg border border-solid text-neutral-600"
                style={{ borderColor: 'rgb(34, 72, 73)' }}
                placeholder={selectedContent.enterYourName}
              />
              <button onClick={handlePlayNow} className="px-4 py-2 bg-orange-400 text-white rounded">
                {selectedContent.playMat}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center self-stretch px-16 w-full border-0 border-solid leading-[150%] max-md:px-5 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)', borderColor: 'rgb(34, 72, 73)' }}>
        <div className="flex justify-between items-center px-16 max-md:px-5 max-md:mr-1 max-md:max-w-full">
          <div className="flex items-center gap-5">
            <div onClick={() => router.push('/')} className="text-5xl font-bold cursor-pointer" style={{ color: 'rgb(212, 114, 62)' }}>MAT</div>
            <div className="flex gap-5 justify-between my-auto text-base font-medium" style={{ color: 'rgb(24, 37, 39)' }}>
              <div onClick={handlePlayNow} style={{ cursor: 'pointer', color: 'rgb(24, 37, 39)' }}>{selectedContent.playMat}</div>
              <div onClick={() => router.push('/about')} style={{ cursor: 'pointer', color: 'rgb(24, 37, 39)' }}>{selectedContent.about}</div>
              <div onClick={() => router.push('/contact')} style={{ cursor: 'pointer', color: 'rgb(24, 37, 39)' }}>{selectedContent.contactUs}</div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div onClick={handlePlayNow} className="justify-center px-8 py-3 text-base font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'white', cursor: 'pointer' }}>{selectedContent.playMat}</div>
            <LanguageSelector selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
          </div>
        </div>
      </div>
      <div className="mt-24 text-xl font-semibold leading-8 text-center text-gray-800 max-md:mt-10">
        {selectedContent.aboutGenderBiasInEducation}
      </div>
      <div className="mt-6 mb-2 text-6xl font-bold text-center text-gray-800 leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        {selectedContent.promotingAwareness}
      </div>
      <div className="mt-6 mb-2 ml-14 mr-14 text-lg font-medium leading-7 max-md:max-w-full">
        {selectedContent.addressGenderBiases}
      </div>
      <div className="flex flex-col self-stretch px-16 py-20 mt-20 w-full text-red-50 bg-cyan-900 max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(34, 72, 73)' }}>
        <div className="text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          {selectedContent.whatIsMat}
        </div>
        <div className="mt-6 mb-2 text-lg font-medium leading-7 max-md:max-w-full">
          {selectedContent.matDescription}
        </div>
      </div>
      <div className="mt-20 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/54728eb895911bfc5ba64e987ef2efba9a67c12f919bf95de60fbcbda2780c85?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/54728eb895911bfc5ba64e987ef2efba9a67c12f919bf95de60fbcbda2780c85?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54728eb895911bfc5ba64e987ef2efba9a67c12f919bf95de60fbcbda2780c85?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/54728eb895911bfc5ba64e987ef2efba9a67c12f919bf95de60fbcbda2780c85?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/54728eb895911bfc5ba64e987ef2efba9a67c12f919bf95de60fbcbda2780c85?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54728eb895911bfc5ba64e987ef2efba9a67c12f919bf95de60fbcbda2780c85?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/54728eb895911bfc5ba64e987ef2efba9a67c12f919bf95de60fbcbda2780c85?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/54728eb895911bfc5ba64e987ef2efba9a67c12f919bf95de60fbcbda2780c85?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
              className="grow w-full aspect-[1.67] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-4xl font-bold leading-10 text-gray-800 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">{selectedContent.howMatWorks}</div>
              <div className="mt-2.5 text-lg font-medium leading-7 max-md:max-w-full">
                {selectedContent.matDescription}
              </div>
              <div className="mt-10 max-md:max-w-full">
                {selectedContent.challengeAssumptions}
              </div>
              <div className="mt-2.5 text-lg font-medium leading-7 max-md:max-w-full">
                {selectedContent.reflectAssociations}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-lg font-medium leading-7 text-center text-gray-800 max-md:mt-10 max-md:max-w-full">
        {selectedContent.morbiSedImperdiet}
      </div>
      <div className="mt-9 text-4xl font-bold leading-10 text-center text-gray-800 max-md:max-w-full">
        {selectedContent.whatAreGenderBiases}
      </div>
      <div className="mt-2.5 text-lg font-medium leading-7 text-center text-gray-800 max-md:max-w-full">
        {selectedContent.genderBiasesDescription}
      </div>
      <div className="mt-64 text-lg font-medium leading-7 text-center text-gray-800 max-md:mt-10 max-md:max-w-full">
        {selectedContent.questionsContact}
      </div>
      <div onClick={() => router.push('/contact')} className="justify-center px-8 py-3 mt-6 text-lg font-semibold leading-7 rounded-[500px] max-md:px-5 max-w-[200px] mx-auto cursor-pointer" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'rgb(24, 37, 39)' }}>
        {selectedContent.contactUsButton}
      </div>
      <div className="flex flex-col self-stretch px-16 py-20 mt-16 w-full bg-red-50 max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundColor: 'rgb(251, 238, 239)' }}>
        <div className="py-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
                <div onClick={() => router.push('/')} className="text-5xl font-bold cursor-pointer max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(212, 114, 62)'}}>
                  MAT
                </div>
                <div className="mt-3 text-base text-gray-800 max-md:max-w-full">
                  Memory Association Test
                </div>
                <div className="flex gap-4 mt-3 max-md:flex-wrap">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 justify-center p-3 bg-white rounded-lg border border-solid text-neutral-600"
                    style={{ borderColor: 'rgb(34, 72, 73)' }}
                    placeholder={selectedContent.enterYourName}
                  />
                  <div onClick={handlePlayNow} className="justify-center px-8 py-3 font-semibold rounded-[500px] max-md:px-5" style={{ backgroundColor: 'rgb(212, 114, 62)', color: 'white', cursor: 'pointer' }}>{selectedContent.playNow}</div>
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
                      <div onClick={handlePlayNow} className="mt-11 max-md:mt-10 cursor-pointer">{selectedContent.howToPlay}</div>
                      <div onClick={() => router.push('/about')} className="mt-4 cursor-pointer">{selectedContent.about}</div>
                      <div onClick={() => router.push('/contact')} className="mt-4 cursor-pointer">{selectedContent.contactUs}</div>
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

export default About;
