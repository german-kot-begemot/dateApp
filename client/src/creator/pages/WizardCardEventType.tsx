import { useTranslation } from 'react-i18next';
import { wizardOptions } from '../../data/wizardOptions';
import { OptionCardBtn } from '../../shared/ui/OptionCardBtn';

type Props = {
  selected: string | null;
  onSelect: (v: string) => void;
};

export const WizardCardEventType = ({ selected, onSelect }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="wiz-btns-holder flex items-center gap-3 justify-between mt-6 w-full">
      {wizardOptions.map((opt) => (
        <OptionCardBtn
          key={opt.id}
          selected={selected === opt.id}
          onClick={() => onSelect(opt.id)}
          className=""
        >
          {t(`buttons.${opt.id}`)}
        </OptionCardBtn>
      ))}
    </div>
  );
};
