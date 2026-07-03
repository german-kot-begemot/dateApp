import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import type { DateProps } from '../types';
import { useDate } from '../hooks/useDate';

export const DatePage = ({ onNext, onSelect }: DateProps) => {
  const { selectedDate, handleSelect } = useDate({
    onNext,
    onSelect,
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col items-center gap-4 p-4 pt-0 ">
          <div className="text-6xl ">📅</div>

          <h2 className="text-4xl font-bold text-pink-600">
            Выбери дату кутежа
          </h2>
        </div>

        <div className="flex justify-center">
          <DatePicker
            selected={selectedDate}
            onChange={handleSelect}
            showTimeSelect
            dateFormat="dd.MM.yyyy HH:mm"
            minDate={new Date()}
            maxDate={new Date('2026-08-01')}
            inline
            filterDate={(date) => {
              const day = date.getDay();
              return ![1, 2, 3, 0].includes(day);
            }}
          />
        </div>

        {selectedDate && (
          <p className="text-center mt-6 text-pink-600 font-semibold">
            Отличный выбор ❤️
          </p>
        )}
      </div>
    </section>
  );
};
