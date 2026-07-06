import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays, Clock3 } from 'lucide-react';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import { useDate } from '../../shared/hooks/useDate';

export type DateProps = {
  onNext?: () => void;
  onSelect?: (date: Date | null) => void;
};

export const DatePage = ({ onNext, onSelect }: DateProps) => {
  const {
    selectedDate,
    selectedTime,
    handleDateChange,
    handleTimeChange,
    handleContinue,
    canContinue,
  } = useDate({
    onNext,
    onSelect,
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6">
      <FloatingHearts />
      <div className="w-full max-w-xl rounded-3xl bg-pink-100 p-8 shadow-2xl backdrop-blur-xl flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 p-4 pt-0 ">
          <div className="text-6xl ">📅</div>

          <h2 className="text-4xl font-bold text-pink-600">
            Выбери дату кутежа
          </h2>
        </div>

        <div className="flex justify-center gap-8">
          <DatePicker
            selected={selectedDate}
            // onChange={handleSelect}
            onChange={handleDateChange}
            minDate={new Date()}
            dateFormat="dd.MM.yyyy"
            placeholderText="Выбери дату"
            portalId="datepicker-portal"
            filterDate={(date) => ![0, 1, 2, 3].includes(date.getDay())}
            customInput={
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl border border-pink-200
                 bg-white px-5 py-4 transition hover:border-pink-400 shadow-lg  bg-linear-to-br
                  from-pink-100 via-rose-50 to-fuchsia-100 active:scale-100 focus:outline-none"
              >
                <span className=" text-3xl flex items-center gap-3">
                  <CalendarDays size={22} className="text-pink-500" />
                  {selectedDate
                    ? selectedDate.toLocaleDateString('ru-RU')
                    : 'Дата'}
                </span>
              </button>
            }
          />
          <DatePicker
            selected={selectedTime}
            // onChange={handleSelect}
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
                className="flex w-full items-center justify-between rounded-2xl border 
                border-pink-200 bg-white px-5 py-4 transition hover:border-pink-400
                shadow-lg bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100"
              >
                <span className="text-3xl flex items-center gap-3">
                  <Clock3 size={22} className="text-pink-500" />
                  {selectedTime
                    ? selectedTime.toLocaleTimeString('ru-RU', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Время'}
                </span>
              </button>
            }
          />
        </div>

        <div className="mt-8 flex flex-col justify-center items-center gap-4">
          <p className="text-3xl text-pink-600">
            Хочу пойти &nbsp;
            {selectedDate
              ? selectedDate.toLocaleDateString('ru-RU')
              : 'Дата не выбрана'}{' '}
            &nbsp; в &nbsp;
            {selectedTime
              ? selectedTime.toLocaleTimeString('ru-RU', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : 'Время не выбрано'}
          </p>
          {selectedDate && (
            <p className="text-center text-2xl text-pink-600 font-semibold">
              Отличный выбор ❤️
            </p>
          )}
          <button
            type="button"
            disabled={!canContinue}
            onClick={handleContinue}
            className="rounded-2xl bg-pink-500 px-8 py-4 text-2xl font-semibold 
            text-white shadow-lg transition hover:scale-105 disabled:cursor-not-allowed 
            disabled:bg-pink-200 disabled:hover:scale-100"
          >
            Далее ❤️
          </button>
        </div>
      </div>
    </section>
  );
};
