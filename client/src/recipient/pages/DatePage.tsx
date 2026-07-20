import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays, Clock3 } from 'lucide-react';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import type { Card } from '../../shared/types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export type DateProps = {
  card: Card;
  selectedDate: Date | null;
  selectedTime: Date | null;
  onDateSelect?: (date: Date) => void;
  onTimeSelect?: (time: Date) => void;
};

export const DatePage = ({
  card,
  selectedDate,
  selectedTime,
  onDateSelect: onSelect,
  onTimeSelect,
}: DateProps) => {
  const { t } = useTranslation();

  const [selectedTimeState, setSelectedTimeState] = useState<Date | null>(
    selectedTime,
  );

  const handleDateChange = (date: Date | null) => {
    if (date) onSelect?.(date);
  };

  const handleTimeChange = (time: Date | null) => {
    if (time) {
      setSelectedTimeState(time);
      onTimeSelect?.(time);
    }
  };

  return (
    <section className="content-block flex w-full flex-col items-center justify-center gap-5 rounded-3xl p-5 text-center sm:gap-8 sm:p-8 in-[.is-preview]:gap-3 in-[.is-preview]:rounded-xl in-[.is-preview]:p-2">
      <FloatingHearts />

      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl font-bold text-[#fdf1e8] sm:text-5xl in-[.is-preview]:text-xl in-[.is-preview]:text-[#531A2A]">
          {card.dateTitle}
        </h2>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6 in-[.is-preview]:gap-2">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          dateFormat="dd.MM.yyyy"
          placeholderText={t('date.dateCaption')}
          portalId="datepicker-portal"
          filterDate={(date) => ![0, 1, 2, 3].includes(date.getDay())}
          customInput={
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-2xl border-2 border-pink-200 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-4 py-3 text-[#531A2A] shadow-lg transition-all hover:border-pink-400 active:scale-95 sm:px-5 sm:py-4"
            >
              <span className="flex items-center gap-3 text-base sm:text-2xl">
                <CalendarDays size={24} className="text-[#BC2860] sm:size-7" />
                {selectedDate
                  ? selectedDate.toLocaleDateString('ru-RU')
                  : t('date.dateCaption')}
              </span>
            </button>
          }
        />

        <DatePicker
          selected={selectedTimeState}
          onChange={handleTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption={t('date.timeCaption')}
          timeFormat="HH:mm"
          dateFormat="HH:mm"
          placeholderText={t('date.timeCaption')}
          portalId="datepicker-portal"
          filterTime={(time) => {
            const hours = time.getHours();
            return hours >= 17 && hours <= 23;
          }}
          customInput={
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-2xl border-2 border-pink-200 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-4 py-3 text-[#531A2A] shadow-lg transition-all hover:border-pink-400 active:scale-95 sm:px-5 sm:py-4"
            >
              <span className="flex items-center gap-3 text-base sm:text-2xl">
                <Clock3 size={24} className="text-[#BC2860] sm:size-7" />
                {selectedTime
                  ? selectedTime.toLocaleTimeString('ru-RU', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : t('date.timeCaption')}
              </span>
            </button>
          }
        />
      </div>

      <div className="mt-2 flex flex-col items-center gap-3 sm:mt-6 sm:gap-4 in-[.is-preview]:gap-2">
        <p className="text-center text-lg text-[#F93C96] sm:text-3xl in-[.is-preview]:text-sm in-[.is-preview]:text-[#531A2A]!">
          {t('date.datePhrase')}&nbsp;
          {selectedDate ? selectedDate.toLocaleDateString('ru-RU') : '-----'}
          &nbsp;{t('date.timePhrase')}&nbsp;
          {selectedTime
            ? selectedTime.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
              })
            : '-----'}
        </p>

        {selectedDate && selectedTime && (
          <p className="text-center text-base font-semibold text-[#F93C96] sm:text-2xl in-[.is-preview]:text-xs">
            {t('date.greatChoice')}
          </p>
        )}
      </div>
    </section>
  );
};
