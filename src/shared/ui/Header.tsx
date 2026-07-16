import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  return (
    <header className="header-layout bg-linear-to-br bg-wrapper p-10">
      <LanguageSwitcher />
    </header>
  );
};
