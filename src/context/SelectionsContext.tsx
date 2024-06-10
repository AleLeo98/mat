import React, { createContext, useState, useContext, ReactNode } from 'react';

type Answer = {
  age: string | null;
  gender: string | null;
  interests: string[];
};

type SelectionsContextType = {
  selectedAnswers: Answer[];
  updateSelectedAnswers: (cardIndex: number, answer: Answer) => void;
};

const SelectionsContext = createContext<SelectionsContextType | undefined>(undefined);

export const SelectionsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([
    { age: null, gender: null, interests: [] },
    { age: null, gender: null, interests: [] },
    { age: null, gender: null, interests: [] },
    { age: null, gender: null, interests: [] },
    { age: null, gender: null, interests: [] },
    { age: null, gender: null, interests: [] },
  ]);

  const updateSelectedAnswers = (cardIndex: number, answer: Answer) => {
    setSelectedAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[cardIndex] = answer;
      return newAnswers;
    });
  };

  return (
    <SelectionsContext.Provider value={{ selectedAnswers, updateSelectedAnswers }}>
      {children}
    </SelectionsContext.Provider>
  );
};

export const useSelections = () => {
  const context = useContext(SelectionsContext);
  if (context === undefined) {
    throw new Error('useSelections must be used within a SelectionsProvider');
  }
  return context;
};
