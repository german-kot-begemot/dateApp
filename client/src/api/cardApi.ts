import type { Card, WizardData } from '../shared/types';
import type { RecipientAnswers } from '../shared/types';

const API = import.meta.env.VITE_API_URL;

/////////////////////////////////////////////////////////////////////
//for creating a card (creator side)
export const createCard = async (cardData: WizardData) => {
  const url = `${API}/cards`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cardData),
  });

  const rawText = await response.text();

  if (!response.ok) {
    throw new Error(rawText || `Request failed with status ${response.status}`);
  }
  if (!rawText) {
    throw new Error('Сервер вернул пустой ответ');
  }
  return JSON.parse(rawText);
};

/////////////////////////////////////////////////////////////////////
//for getting a card by id (recipiennt side)
export const getCard = async (cardId: string): Promise<Card> => {
  const response = await fetch(`${API}/cards/${cardId}`);
  const rawText = await response.text();

  if (!response.ok) {
    throw new Error(rawText || `Request failed with status ${response.status}`);
  }
  if (!rawText) {
    throw new Error('Сервер вернул пустой ответ');
  }
  return JSON.parse(rawText);
};

/////////////////////////////////////////////////////////////////////
//for sending recipient's answers to backend
export const sendAnswersResponse = async (
  cardId: string,
  answers: RecipientAnswers,
) => {
  const url = `${API}/answers`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...answers,
      cardId,
    }),
  });

  const rawText = await response.text();

  if (!response.ok) {
    throw new Error(rawText || `Request failed with status ${response.status}`);
  }

  if (!rawText) {
    throw new Error('Сервер вернул пустой ответ');
  }

  return JSON.parse(rawText);
};
