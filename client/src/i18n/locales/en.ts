export const en = {
  home: {
    title: 'Moment Cards',
    description:
      'Create personalized interactive cards for every special moment.',
    createCard: 'Create Card',
    openCard: 'Open Card',
    enterCardCode: 'Enter card code',
    howItWorks: 'How it works',
    howItWorksSteps: {
      create: {
        title: 'Create a card',
        description:
          'Create a card or invitation for a special moment in just a few simple steps.',
      },
      share: {
        title: 'Share the card',
        description:
          'Send a link to your loved one. The recipient will receive a beautiful card or invitation.',
      },
      response: {
        title: 'Get a response',
        description: 'Get a response directly in Telegram.',
      },
    },
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
    questionOption: 'Choose your answer ❤️',
    questionDescription:
      'Ask a yes/no question you want an answer to. For example: "Do you love me?"',
    placeholderQuestion: 'Do you love me?',
    noAnswer: 'No 😢',
    greatPhrase: 'Great! 💖',

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
    invite: 'Date invitation',
    birthday: 'Birthday greeting',
    custom: 'Custom card',
  },

  invite: {
    yes: 'Yes',
    yesHeart: 'Yes ❤️',
    yesDoubleHeart: 'Yes 💕',
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
    dessert: 'Dessert',
    dessertDescription: 'Skip dinner and go straight to the good stuff.',
    iceCream: 'IceCream',
    iceCreamDescription: "Because ice cream doesn't need a special occasion.",
    coffee: 'Coffee',
    coffeeDescription: 'Coffee, conversation, and see where it leads.',
    wine: 'Wine',
    wineDescription: 'Chill evening, good conversation, and no rush.',
    tacos: 'Tacos',
    tacosDescription: 'A little spice never hurt anyone.',
    ramen: 'Ramen',
    ramenDescription: 'Warm evening, big bowl, and no complicated decisions.',
    surprise: 'Surprise',
    surpriseDescription: 'An unexpected delight awaits you.',
  },

  date: {
    chooseDate: 'Choose date',
    chooseTime: 'Choose time',
    dateCaption: 'Date',
    timeCaption: 'Time',
    datePhrase: 'I want to go ',
    timePhrase: 'at',
    greatChoice: 'Great choice ❤️',
  },

  final: {
    title: 'Your card is ready!',
    share: 'Share this card with your loved one',
    finalHint: "That's just great!",
    finalHint2: 'The date is on!',
    finalHint3: 'See you ',
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
