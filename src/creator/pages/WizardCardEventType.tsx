import { wizardOptions } from '../../data/wizardOptions';
import { OptionCardBtn } from '../../shared/ui/OptionCardBtn';

type Props = {
  selected: string | null;
  onSelect: (v: string) => void;
};

export const WizardCardEventType = ({ selected, onSelect }: Props) => {
  return (
    <div className="wiz-btns-holder flex items-center justify-between mt-6 w-full">
      {wizardOptions.map((opt) => (
        <OptionCardBtn
          key={opt.id}
          selected={selected === opt.id}
          onClick={() => onSelect(opt.id)}
        >
          {opt.title}
        </OptionCardBtn>
      ))}
    </div>
  );
};
