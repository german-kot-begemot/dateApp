export const en = {
  home: {
    title: 'Moment Cards',
    description:
      'Create personalized interactive cards for every special moment.',
    createCard: 'Create Card',
    openCard: 'Open Card',
    enterCardCode: 'Enter card code',
  },

  wizard: {
    chooseType: 'Choose the type of card',
    invitation: 'Step 1 - Invitation',
    chooseGif: 'Choose a GIF for the invitation',
    writeTitle: 'Write a title',
    placeholderTitle: 'Would you like to go on a date with me?',

    food: 'Step 2 - Food',
    foodOptions: 'Choose from which options the recipient will choose',
    placeholderFoodOption: 'What do you want?',

    date: 'Step 3 - Date and Time',
    datePlaceholder: 'When would it be convenient for you to meet? ❤️',
    dateDescription:
      'This text will be seen by the recipient during date and time selection.',

    question: 'Step 4 - Additional Question',
    questionDescription:
      'Ask a yes/no question you want an answer to. For example: "Do you love me?"',
    placeholderQuestion: 'Do you love me?',

    preview: 'Preview',
    final: 'Final touches',

    checkData: 'Check entered data',
    createHint: 'If everything is correct, click Create to generate your card.',
    createdCard: 'The card has been created!',
    sharingHint: 'The link is ready and available for sharing',
    linkCopy: 'Copy link',
    telegramNotification: 'Get a response in Telegram',
  },

  buttons: {
    next: 'Next',
    back: 'Back',
    create: 'Create',
    open: 'Open',
    save: 'Save',
    send: 'Send answers',
    copy: 'Copy link',
    telegram: 'Get Telegram notifications',
    mainMenu: 'Main menu',
    invite: 'Date invitation ❤️',
    birthday: 'Birthday greeting',
    custom: 'Custom card',
  },

  invite: {
    yes: 'Yes ❤️',
    no: 'No',
    promise:
      'I promise it will be delicious, fun, and free of boring conversations 😌',
  },

  food: {
    title: 'Choose your food',
    pizza: 'Pizza',
    pizzaDescription: 'Classic. Awkward silence is best accompanied by pizza.',
    sushi: 'Sushi',
    sushiDescription:
      'If the chopsticks fall, we will pretend it was intentional.',
    burgers: 'Burgers',
    burgersDescription: 'Romance is great, but fries are sacred.',
    pasta: 'Pasta',
    pastaDescription: 'Pasta is love, pasta is life.',
    steak: 'Steak',
    steakDescription: 'A well-cooked steak can melt hearts.',
    cocktail: 'Cocktail',
    cocktailDescription: 'Cheers to a night of fun and laughter.',
    surprise: 'Surprise',
    surpriseDescription: 'An unexpected delight awaits you.',
  },

  date: {
    chooseDate: 'Choose date',
    chooseTime: 'Choose time',
    date: 'Date',
    time: 'Time',
  },

  final: {
    title: 'Your card is ready!',
    share: 'Share this card with your loved one',
  },

  errors: {
    fillAllFields: 'Please fill in all fields.',
    cardNotFound: 'Card not found.',
    serverError: 'Server error. Please try again later.',
  },

  common: {
    loading: 'Loading...',
    error: 'Something went wrong',
  },

  //   noPhrases: {
  //     no: 'No 😢',
  //     nope: 'Nope 🙈',
  //     sure: 'Are you sure? 😅',
  //     try: 'Try it 😎',
  //     catch: "You won't catch me 😂",
  //     give: 'Give up ❤️',
  //   },

  noPhrases: {
    btnNo: [
      'No 😢',
      'No 🙈',
      'Are you sure? 😅',
      'Try it 😎',
      "You won't catch me 😂",
      'Give up ❤️',
    ],
  },
} as const;
