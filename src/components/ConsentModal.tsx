import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ConsentModalProps {
  onAccept: () => void;
  onDeny: () => void;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ onAccept, onDeny }) => {
  const { selectedLanguage } = useLanguage();

  const content = {
    EN: {
      title: 'Study Information and Consent',
      objective: '<b>Objective:</b> The purpose of the study is to test an online application to improve the design of reflection-focused technologies. The included memory self-reflection test is educational, not diagnostic, and aims to encourage awareness of your memory without evaluating its performance. Since memory is a broad concept, the test does not explore every aspect, and medical advice is recommended for memory issues. If you decide to participate, please note that the results may not exactly match your personal perceptions.',
      consent: '<b>Consent:</b> You are cordially invited to participate in a research study conducted by Irene Zanardi and Monica Landoni from the University of Lugano (USI), together with student Alessio Leoncini. If you agree to participate, you will be asked to use a web platform and complete a questionnaire. The risks associated with participating in this study are minimal and revolve around the sensitive topic of implicit associations. In addition to contributing to the research, the main benefit of the activity might be personal growth and reflection. Your responses will be anonymous. Please do not include personal information in the questionnaire. All data collected during the study will be kept strictly confidential. The data will be securely stored and only the research team will have access to it. Participation in this study is completely voluntary and you have the right to withdraw at any time without consequences.',
      contact: 'For any questions or concerns about the study, you can contact Alessio Leoncini at <b>leonca@usi.ch</b>.',
      accept: 'Accept',
      deny: 'Deny'
    },
    IT: {
      title: 'Informazioni e Consenso sullo Studio',
      objective: '<b>Obiettivo:</b> Lo scopo dello studio è testare un\'applicazione online per migliorare la progettazione di tecnologie incentrate sulla riflessione. Il test di autoriflessione della memoria incluso è educativo, non diagnostico, e mira a incoraggiare la consapevolezza della propria memoria, senza valutarne le prestazioni. Poiché la memoria è un concetto ampio, il test non esplora ogni suo aspetto, e si raccomanda un consiglio medico per problemi di memoria. Se decidi di partecipare, tieni presente che i risultati potrebbero non corrispondere esattamente alle tue percezioni personali.',
      consent: '<b>Consenso:</b> Sei cordialmente invitato a partecipare a uno studio di ricerca condotto da Irene Zanardi e Monica Landoni dell\'Università di Lugano (USI), insieme allo studente Alessio Leoncini. Se accetti di partecipare, ti verrà chiesto di utilizzare una piattaforma web e compilare un questionario. I rischi associati alla partecipazione a questo studio sono minimi e ruotano attorno al tema sensibile delle associazioni implicite. Oltre a contribuire alla ricerca, il principale beneficio dell\'attività potrebbe essere la crescita personale e la riflessione. Le tue risposte saranno anonime. Si prega di non includere informazioni personali nel questionario. Tutti i dati raccolti durante lo studio saranno mantenuti strettamente confidenziali. I dati saranno conservati in modo sicuro e solo il team di ricerca avrà accesso ad essi. La partecipazione a questo studio è completamente volontaria e hai il diritto di ritirarti in qualsiasi momento senza conseguenze.',
      contact: 'Per qualsiasi domanda o dubbio sullo studio, puoi contattare Alessio Leoncini all\'indirizzo <b>leonca@usi.ch</b>.',
      accept: 'Accetta',
      deny: 'Rifiuta'
    }
  };

  const selectedContent = content[selectedLanguage];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgb(251,238,239)] p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-md max-w-md w-full sm:max-w-lg shadow-lg text-black overflow-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">{selectedContent.title}</h2>
        <p className="mb-4 text-black" dangerouslySetInnerHTML={{ __html: selectedContent.objective }}></p>
        <p className="mb-4 text-black" dangerouslySetInnerHTML={{ __html: selectedContent.consent }}></p>
        <p className="mb-4 text-black" dangerouslySetInnerHTML={{ __html: selectedContent.contact }}></p>
        <div className="flex flex-col sm:flex-row justify-end gap-4">
          <button
            className="bg-red-500 text-black px-4 py-2 rounded"
            onClick={onDeny}
          >
            {selectedContent.deny}
          </button>
          <button
            className="bg-green-500 text-black px-4 py-2 rounded"
            onClick={onAccept}
          >
            {selectedContent.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
