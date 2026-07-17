import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="absolute top-4 right-4 flex rounded-xl bg-[#490C1B]/80 p-1 backdrop-blur-md shadow-lg">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
          i18n.language === 'en'
            ? 'bg-[#7F1432] text-white shadow-md'
            : 'text-[#fdf1e8] hover:bg-white/10 hover:text-white'
        }`}
      >
        EN
      </button>

      <button
        onClick={() => i18n.changeLanguage('ru')}
        className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
          i18n.language === 'ru'
            ? 'bg-[#7F1432] text-white shadow-md'
            : 'text-[#fdf1e8] hover:bg-white/10 hover:text-white'
        }`}
      >
        RU
      </button>
    </div>
  );
};
