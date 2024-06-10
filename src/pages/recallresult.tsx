import * as React from 'react';
import { useRouter } from 'next/router';
import LanguageSelector from '../components/LanguageSelector'; // Ensure the path is correct
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct
import { useSelections } from '../context/SelectionsContext'; // Ensure the path is correct

function RecallResult() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const { selectedAnswers } = useSelections();
  const router = useRouter();

  const content = {
    EN: {
      playMat: 'Play MAT',
      about: 'About',
      contactUs: 'Contact us',
      recallResults: 'Test Results',
      recallResultsNote: 'Please note that this test is not a diagnostic tool.',
      recallScore: 'You got {score} out of {totalPossiblePoints} possible points ({percentage}%).',
      recallFeedback: `Good try! There were challenges in recalling specific information about the children. Remember, with continued practice and employing memory strategies, you can work towards improving your detail retention.`,
      recallExplanation: `In addition to assessing memory skills, we would like to share an essential aspect of this test. We included children with varying levels of gender specificity in their descriptions to explore potential gender biases. This test aims to foster self-reflection and increase awareness about our own biases when making choices related to children's interests. Take a moment to reflect on your responses and consider the impact of unconscious biases on your interactions with children.
        It is crucial to acknowledge that biases can inadvertently impact our decision-making, even when we strive to be fair and inclusive. Reflecting on these results allows for personal growth and an opportunity to reassess and challenge preconceived notions or stereotypes that may influence interactions with children. Embrace this as a chance to make more equitable choices moving forward.`,
      thankYou: 'Thank you for participating in this test!',
      termsConfirmation: "By playing this game you're confirming that you agree with our Terms and Conditions.",
      reflectOnAssociations: 'Play MAT, the Memory Association Test, to reflect on unconscious associations.',
      close: 'Close',
      reviewAnswer: 'Review answer',
      memoryAssociationTest: 'Memory Association Test',
      enterYourName: 'Enter your name',
      playNow: 'Play now',
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
      cookiesSettings: 'Cookies Settings'
    },
    IT: {
      playMat: 'Gioca a MAT',
      about: 'Chi siamo',
      contactUs: 'Contattaci',
      recallResults: 'Risultati del test',
      recallResultsNote: 'Si prega di notare che questo test non è uno strumento diagnostico.',
      recallScore: 'Hai ottenuto {score} punti su {totalPossiblePoints} possibili ({percentage}%).',
      recallFeedback: `Buon tentativo! Ci sono state difficoltà nel ricordare informazioni specifiche sui bambini. Ricorda, con la pratica continua e l'uso di strategie di memoria, puoi lavorare per migliorare la tua capacità di memorizzare i dettagli.`,
      recallExplanation: `Oltre a valutare le abilità mnemoniche, vorremmo condividere un aspetto essenziale di questo test. Abbiamo incluso bambini con diversi livelli di specificità di genere nelle loro descrizioni per esplorare potenziali pregiudizi di genere. Questo test mira a promuovere l'auto-riflessione e ad aumentare la consapevolezza sui nostri pregiudizi quando facciamo scelte relative agli interessi dei bambini. Prenditi un momento per riflettere sulle tue risposte e considera l'impatto dei pregiudizi inconsci sulle tue interazioni con i bambini.
        È fondamentale riconoscere che i pregiudizi possono influenzare involontariamente il nostro processo decisionale, anche quando ci sforziamo di essere equi e inclusivi. Riflettere su questi risultati consente una crescita personale e un'opportunità per riconsiderare e sfidare nozioni preconcette o stereotipi che possono influenzare le interazioni con i bambini. Abbraccia questo momento come un'opportunità per fare scelte più eque in futuro.`,
      thankYou: 'Grazie per aver partecipato a questo test!',
      termsConfirmation: "Giocando a questo gioco confermi di accettare i nostri Termini e Condizioni.",
      reflectOnAssociations: 'Gioca a MAT, il Test di Associazione della Memoria, per riflettere sulle associazioni inconsce.',
      close: 'Chiudi',
      reviewAnswer: 'Rivedi la risposta',
      memoryAssociationTest: 'Test di Associazione di Memoria',
      enterYourName: 'Inserisci il tuo nome',
      playNow: 'Gioca ora',
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
      cookiesSettings: 'Impostazioni dei cookie'
    }
  };

  const selectedContent = content[selectedLanguage];

  const correctAnswers = [
    { age: '8', gender: 'Other', interests: ['Football', 'Gaming', 'Science'] },
    { age: '/', gender: 'Female', interests: ['Music', 'Reading', 'Dancing'] },
    { age: '10', gender: 'Other', interests: ['Football', 'Gaming', 'Computing'] },
    { age: '9', gender: 'Other', interests: ['Music', 'Reading', 'Piano'] },
    { age: '/', gender: 'Female', interests: ['Math', 'Puzzles', 'Computing'] },
    { age: '/', gender: 'Male', interests: ['Math', 'Cycling', 'Painting', 'Science'] }
  ];

  const calculateScore = () => {
    let score = 0;

    correctAnswers.forEach((answer, index) => {
      if (answer.age === selectedAnswers[index].age || (answer.age === '/' && selectedAnswers[index].age === '/')) {
        score++;
      }
      if (answer.gender === selectedAnswers[index].gender || (answer.gender === 'Other' && selectedAnswers[index].gender === 'Other')) {
        score++;
      }
      answer.interests.forEach(interest => {
        if (selectedAnswers[index].interests.includes(interest)) {
          score++;
        }
      });
    });

    return score;
  };

  const score = calculateScore();
  const totalPossiblePoints = correctAnswers.reduce((acc, answer) => acc + 1 + 1 + answer.interests.length, 0);
  const percentage = ((score / totalPossiblePoints) * 100).toFixed(2);

  console.log('Selected Answers:', selectedAnswers);
  console.log('Score:', score);
  console.log('Total Possible Points:', totalPossiblePoints);
  console.log('Percentage:', percentage);

  const handleClose = () => {
    router.push('/finalpage');
  };

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
                  <div>{selectedContent.playMat}</div>
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
            {selectedContent.recallResults}
          </div>
          <div className="flex flex-col px-20 mt-16 text-lg leading-7 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="font-bold" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.recallResultsNote}
            </div>
            <div className="mt-5" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.recallScore
                .replace('{score}', score.toString())
                .replace('{totalPossiblePoints}', totalPossiblePoints.toString())
                .replace('{percentage}', percentage)}
            </div>
            <div className="mt-5 leading-7" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.recallFeedback}
            </div>
            <div className="mt-20 leading-7 max-md:mt-10 max-md:max-w-full" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.recallExplanation}
            </div>
            <div className="mt-14 font-bold max-md:mt-10 max-md:max-w-full" style={{ color: 'rgb(251, 238, 239)' }}>
              {selectedContent.thankYou}
            </div>
            <div className="flex gap-3.5 self-end mt-20 mr-10 font-semibold text-gray-800 max-md:mt-10 max-md:mr-2.5">
              <div
                className="justify-center px-8 py-3 whitespace-nowrap bg-orange-400 rounded-[500px] max-md:pr-6 max-md:pl-6 cursor-pointer"
                onClick={handleClose}
              >
                {selectedContent.close}
              </div>
              <div className="justify-center px-5 py-3 bg-orange-400 rounded-[500px] cursor-pointer">
                {selectedContent.reviewAnswer}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start mt-7 bg-red-50 max-md:pr-5 max-md:max-w-full">
            <div className="shrink-0 max-w-full h-3.5 w-full" style={{ backgroundColor: 'rgb(212, 114, 62)'}}/>
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
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl" style={{ color: 'rgb(212, 114, 62)' }}>
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

export default RecallResult;
