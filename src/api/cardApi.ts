import type { WizardData } from '../shared/types';

// export const createCard = async (cardData: WizardData) => {
//   const response = await fetch(`${API}/cards`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(cardData),
//   });

//   if (!response.ok) {
//     throw new Error('Не удалось создать открытку');
//   }

//   return response.json();
// };

const API = import.meta.env.VITE_API_URL;

export const createCard = async (cardData: WizardData) => {
  console.log('🔧 API URL from env:', API); // если undefined — вот и причина

  const url = `${API}/cards`;
  console.log('🌍 Request URL:', url);
  console.log(`${API}/cards`);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cardData),
  });

  console.log('📥 Status:', response.status);
  console.log('📥 Headers:', [...response.headers.entries()]);

  const rawText = await response.text(); // читаем как текст, не как json
  console.log('📦 Raw response body:', JSON.stringify(rawText));

  if (!response.ok) {
    throw new Error(rawText || `Request failed with status ${response.status}`);
  }

  if (!rawText) {
    throw new Error('Сервер вернул пустой ответ');
  }

  return JSON.parse(rawText);
};
