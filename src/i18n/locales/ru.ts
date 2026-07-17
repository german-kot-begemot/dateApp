export const ru = {
  home: {
    title: 'Moment Cards',
    description:
      'Создавайте персонализированные интерактивные открытки для особенных моментов.',
    createCard: 'Создать открытку',
    openCard: 'Открыть открытку',
    enterCardCode: 'Введите код открытки',
  },

  wizard: {
    chooseType: 'Выбери тип открытки',
    invitation: 'Шаг 1 - Приглашение',
    chooseGif: 'Выбери GIF для приглашения',
    writeTitle: 'Напиши заголовок',
    placeholderTitle: 'Хочешь пойти со мной на свидание?',

    food: 'Шаг 2 - Еда',
    foodOptions: 'Выбери варианты еды, из которых получатель будет выбирать',
    placeholderFoodOption: 'Что ты хочешь?',

    date: 'Шаг 3 - Дата и время',
    datePlaceholder: 'Когда тебе будет удобно встретиться? ❤️',
    dateDescription:
      'Этот текст будет виден получателю при выборе даты и времени.',

    question: 'Шаг 4 - Дополнительный вопрос',
    questionOption: 'Выбери свой ответ ❤️',
    questionDescription:
      'Задай вопрос с ответом да/нет, на который хочешь получить ответ. Например: "Ты меня любишь?"',
    placeholderQuestion: 'Ты меня любишь?',
    noAnswer: 'Нет 😢',
    greatPhrase: 'Отлично! 💖',

    preview: 'Предпросмотр',
    final: 'Финальные настройки',

    checkData: 'Проверь введенные данные',
    createHint: 'Если всё правильно, нажми Создать для генерации открытки.',
    createdCard: 'Открытка создана!',
    sharingHint: 'Ссылка готова и доступна для отправки',
    linkCopy: 'Скопировать ссылку',
    telegramNotification: 'Получить ответ в Telegram',
  },

  buttons: {
    next: 'Далее',
    back: 'Назад',
    create: 'Создать',
    open: 'Открыть',
    save: 'Сохранить',
    send: 'Отправить ответ',
    copy: 'Скопировать ссылку',
    telegram: 'Получать уведомления в Telegram',
    mainMenu: 'Главное меню',
    invite: 'Приглашение на свидание ❤️',
    birthday: 'Поздравление с днем рождения',
    custom: 'Пользовательская открытка',
  },

  invite: {
    yes: 'Да',
    yesHeart: 'Да ❤️',
    yesDoubleHeart: 'Да 💕',
    no: 'Нет',
    promise: 'Обещаю, будет вкусно, весело и без скучных разговоров 😌',
  },

  food: {
    title: 'Выбери еду',
    pizza: 'Пицца',
    pizzaDescription:
      'Классика. Неловкое молчание лучше всего сочетается с пиццей.',
    sushi: 'Суши',
    sushiDescription:
      'Если палочки упадут, мы сделаем вид, что это было намеренно.',
    burgers: 'Бургеры',
    burgersDescription: 'Романтика — это прекрасно, но картошка фри священна.',
    pasta: 'Паста',
    pastaDescription: 'Паста — это любовь, паста — это жизнь.',
    steak: 'Стейк',
    steakDescription: 'Хорошо приготовленный стейк может растопить сердца.',
    cocktail: 'Коктейль',
    cocktailDescription: 'За ночь веселья и смеха.',
    surprise: 'Сюрприз',
    surpriseDescription: 'Вас ждет неожиданный сюрприз.',
  },

  date: {
    chooseDate: 'Выбери дату',
    chooseTime: 'Выбери время',
    dateCaption: 'Дата',
    timeCaption: 'Время',
    datePhrase: 'Я хочу пойти ',
    timePhrase: 'в',
    greatChoice: 'Отличный выбор ❤️',
  },

  final: {
    title: 'Твоя открытка готова!',
    share: 'Поделись открыткой с любимым человеком',
    finalHint: 'Вот и чудненько!',
    finalHint2: 'Свиданию быть!',
    finalHint3: 'До встречи ',
  },

  errors: {
    fillAllFields: 'Пожалуйста, заполните все поля.',
    cardNotFound: 'Открытка не найдена.',
    serverError: 'Ошибка сервера. Попробуйте позже.',
  },

  common: {
    loading: 'Загрузка...',
    error: 'Что-то пошло не так',
  },

  //   noPhrases: {
  //     no: 'Нет 😢',
  //     nope: 'Не-а 🙈',
  //     sure: 'Ты уверен? 😅',
  //     try: 'Попробуй 😎',
  //     catch: 'Не поймаешь 😂',
  //     give: 'Сдавайся ❤️',
  //   },
  noPhrases: {
    btnNo: [
      'Нет 😢',
      'Не-а 🙈',
      'Ты уверен? 😅',
      'Попробуй 😎',
      'Не поймаешь 😂',
      'Сдавайся ❤️',
    ],
  },
} as const;
