const TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export const setTelegramWebhook = async () => {
  const url = `${process.env.SERVER_URL}/api/telegram/webhook`;
  console.log('Webhook URL:', url);

  const response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/setWebhook`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    },
  );

  const data = await response.json();

  console.log('Webhook:', data);
};
