import { useState } from 'react';

type Props = {
  onNext: (date: Date) => void;
  onSelect?: (date: Date) => void;
};

export const useDate = ({ onNext, onSelect }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSelect = (value: Date | null) => {
    if (!value) return;
    setSelectedDate(value);
    onSelect?.(value);
    const hasTime = value.getHours() !== 0 || value.getMinutes() !== 0;

    if (!hasTime) return;

    setTimeout(() => {
      onNext(value);
    }, 600);
  };

  return {
    selectedDate,
    handleSelect,
  };
};
