import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="lang-btn flex gap-6 bg-[#490C1B]! text-2xl text-[#fdf1e8] rounded-lg p-2 absolute top-4 right-4">
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>

      <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
    </div>
  );
};
