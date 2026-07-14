import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays, Clock3 } from 'lucide-react';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import type { Card } from '../../shared/types';
import { useState } from 'react';

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
  const [selectedTimeState, setSelectedTimeState] = useState<Date | null>(
    selectedTime,
  );

  const handleDateChange = (date: Date | null) => {
    if (date) {
      onSelect?.(date);
    }
  };

  const handleTimeChange = (time: Date | null) => {
    if (time) {
      setSelectedTimeState(time);
      onTimeSelect?.(time);
    }
  };

  return (
    <section className="content-block flex rounded-4xl flex-col items-center justify-center gap-8 shadow-2xl backdrop-blur-xl">
      <FloatingHearts />
      <div className="flex flex-col items-center gap-4 p-4 pt-0 ">
        <h2 className="text-center text-5xl font-bold">{card.dateTitle}</h2>
      </div>

      <div className="flex justify-center gap-8">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          dateFormat="dd.MM.yyyy"
          placeholderText="Выбери дату"
          portalId="datepicker-portal"
          filterDate={(date) => ![0, 1, 2, 3].includes(date.getDay())}
          customInput={
            <button
              type="button"
              className=" flex w-full items-center justify-between rounded-2xl 
              border-2 border-pink-200 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-5 py-4
              text-[#531A2A] shadow-lg transition-all duration-300 hover:border-pink-400 hover:shadow-pink-200/50 
              active:scale-95 focus:outline-none "
            >
              <span className="flex items-center gap-3 text-2xl font-semibold">
                <CalendarDays size={28} className="text-[#BC2860]" />

                {selectedDate
                  ? selectedDate.toLocaleDateString('ru-RU')
                  : 'Date'}
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
          timeCaption="Время"
          timeFormat="HH:mm"
          dateFormat="HH:mm"
          placeholderText="Выбери время"
          portalId="datepicker-portal"
          filterTime={(time) => {
            const hours = time.getHours();
            return hours >= 17 && hours <= 23;
          }}
          customInput={
            <button
              type="button"
              className=" flex w-full items-center justify-between rounded-2xl 
              border-2 border-pink-200 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-5 py-4
              text-[#531A2A] shadow-lg transition-all duration-300 hover:border-pink-400 hover:shadow-pink-200/50 
              active:scale-95 focus:outline-none "
            >
              <span className="flex items-center gap-3 text-2xl font-semibold">
                <Clock3 size={28} className="text-[#BC2860]" />

                {selectedTime
                  ? selectedTime.toLocaleTimeString('ru-RU', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : 'Time'}
              </span>
            </button>
          }
        />
      </div>

      <div className="mt-8 flex flex-col justify-center items-center gap-4">
        <p className="text-3xl text-[#F93C96] in-[.is-preview]:text-[#F93C96]!">
          I want to go &nbsp;
          {selectedDate
            ? selectedDate.toLocaleDateString('ru-RU')
            : '-----'}{' '}
          &nbsp; at &nbsp;
          {selectedTime
            ? selectedTime.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
              })
            : '-----'}
        </p>
        {selectedDate && selectedTime && (
          <p className="text-center text-2xl text-[#F93C96] font-semibold in-[.is-preview]:text-[#F93C96]!">
            Great choice ❤️
          </p>
        )}
      </div>
    </section>
  );
};
