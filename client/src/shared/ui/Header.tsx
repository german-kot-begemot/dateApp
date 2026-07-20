import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  return (
    <header className="header-layout bg-wrapper flex justify-end p-4 sm:p-6">
      <LanguageSwitcher />
    </header>
  );
};
