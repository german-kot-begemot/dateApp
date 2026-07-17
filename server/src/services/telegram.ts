import { Answer } from '../models/Answer.js';

export const sendTelegramNotification = async (
  targetChatId: string,
  data: Answer,
) => {
  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  if (!TOKEN) {
    console.error('❌ Telegram Bot Token is missing in .env');
    return;
  }

  if (!targetChatId) {
    console.error('❌ Telegram chat ID is missing');
    return;
  }

  if (
    !data.selectedFood ||
    !data.selectedDate ||
    !data.selectedTime ||
    !data.answer
  ) {
    console.error('❌ Incomplete data for Telegram notification:', data);
    return;
  }

  const formattedDate = new Date(data.selectedDate).toLocaleDateString(
    'ru-RU',
    {
      day: 'numeric',
      month: 'long',
    },
  );

  const formattedTime = new Date(data.selectedTime).toLocaleTimeString(
    'ru-RU',
    {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    },
  );

  const text = `
<b>❤️ На твое приглашение ответили!</b>
<b>🍣 Еда:</b>
${data.selectedFood.map((f) => `${f.emoji} ${f.title}`).join(', ')}
<b>📅 Дата:</b> ${formattedDate}
<b>⏰ Время:</b> ${formattedTime}
<b>Ответ:</b>
<i>${data.answer} 😘</i>
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: targetChatId,
          text,
          parse_mode: 'HTML',
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(`Telegram API error: ${errorText}`);
    }
  } catch (error) {
    console.error('❌ Failed to send Telegram notification:', error);
  }
};
