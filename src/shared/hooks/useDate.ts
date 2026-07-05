import { useState } from 'react';

type Props = {
  onNext: (date: Date) => void;
  onSelect?: (date: Date) => void;
};

export const useDate = ({ onNext, onSelect }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    if (date) setSelectedDate(date);
  };

  const handleTimeChange = (time: Date | null) => {
    if (time) setSelectedTime(time);
  };

  const handleContinue = () => {
    if (!selectedDate || !selectedTime) return;

    const result = new Date(selectedDate);

    result.setHours(selectedTime.getHours(), selectedTime.getMinutes(), 0, 0);

    onSelect?.(result);
    onNext(result);
  };

  return {
    selectedDate,
    selectedTime,
    handleDateChange,
    handleTimeChange,
    handleContinue,
    canContinue: !!selectedDate && !!selectedTime,
  };
};
