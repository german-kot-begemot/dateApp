// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import type { DateProps } from '../types';
// import { useDate } from '../hooks/useDate';

// export const DatePage = ({ onNext, onSelect }: DateProps) => {
//   const { selectedDate, handleSelect } = useDate({
//     onNext,
//     onSelect,
//   });

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6">
//       <div className="w-full max-w-xl rounded-3xl bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
//         <div className="flex flex-col items-center gap-4 p-4 pt-0 ">
//           <div className="text-6xl ">📅</div>

//           <h2 className="text-4xl font-bold text-pink-600">
//             Выбери дату кутежа
//           </h2>
//         </div>

//         <div className="flex justify-center">
//           <DatePicker
//             selected={selectedDate}
//             onChange={handleSelect}
//             showTimeSelect
//             dateFormat="dd.MM.yyyy HH:mm"
//             minDate={new Date()}
//             maxDate={new Date('2026-08-01')}
//             inline
//             filterDate={(date) => {
//               const day = date.getDay();
//               return ![1, 2, 3, 0].includes(day);
//             }}
//           />
//         </div>

//         {selectedDate && (
//           <p className="text-center mt-6 text-pink-600 font-semibold">
//             Отличный выбор ❤️
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays, Clock3 } from 'lucide-react';

import type { DateProps } from '../types';
import { useDate } from '../hooks/useDate';

export const DatePage = ({ onNext, onSelect }: DateProps) => {
  const { selectedDate, handleSelect } = useDate({
    onNext,
    onSelect,
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white/70 p-8 shadow-2xl backdrop-blur-xl flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 p-4 pt-0 ">
          <div className="text-6xl ">📅</div>

          <h2 className="text-4xl font-bold text-pink-600">
            Выбери дату кутежа
          </h2>
        </div>

        <div className="flex justify-center gap-8">
          <DatePicker
            selected={selectedDate}
            onChange={handleSelect}
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
                <span className="flex items-center gap-3">
                  <CalendarDays size={22} className="text-pink-500" />
                  {selectedDate
                    ? selectedDate.toLocaleDateString('ru-RU')
                    : 'Дата'}
                </span>
              </button>
            }
          />
          <DatePicker
            selected={selectedDate}
            onChange={handleSelect}
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
                shadow-lg  bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100"
              >
                <span className="flex items-center gap-3">
                  <Clock3 size={22} className="text-pink-500" />
                  {selectedDate
                    ? selectedDate.toLocaleTimeString('ru-RU', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Время'}
                </span>
              </button>
            }
          />
        </div>

        {selectedDate && (
          <p className="text-center text-2xl text-pink-600 font-semibold">
            Отличный выбор ❤️
          </p>
        )}
      </div>
    </section>
  );
};
