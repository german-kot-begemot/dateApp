import { WizardStep } from './WizardStep';
import { WizardCardEventType } from './WizardCardEventType';
import { useWizard, type WizardData } from '../../shared/hooks/useWizard';
import { ProgressBar } from '../../shared/ui/ProgressBar';
import { WizardGifPicker } from './WizardGifPicker';
import { PhoneFrame } from './PhoneFrame';
import { Invite } from '../../recipient/pages/Invite';
import { Food } from '../../recipient/pages/Food';
import { DatePage } from '../../recipient/pages/DatePage';
import { Question } from '../../recipient/pages/Question';
import { useNavigate } from 'react-router-dom';

export const CreateConfig = () => {
  const { step, data, update, next, back } = useWizard();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6">
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl flex flex-col gap-8">
        <ProgressBar step={step} total={8} />

        <WizardStep step={step}>
          {step === 0 && (
            <div className="flex flex-col gap-10">
              <h2 className="text-4xl">Выбери, что хотел бы создать</h2>

              <WizardCardEventType
                selected={data.type}
                onSelect={(v) => update({ type: v as WizardData['type'] })}
              />
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl text-pink-500">Экран 1 — приглашение</h1>
              <div className="flex flex-col gap-4">
                <p className="text-3xl">Выбери картинку для приглашения</p>
                <WizardGifPicker
                  selected={data.inviteGif}
                  onSelect={(gif) => update({ inviteGif: gif })}
                />
              </div>
              <p className="text-3xl">Напиши заголовок</p>
              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Ты пойдешь со мной на свидание?"
                value={data.inviteTitle}
                onChange={(e) => update({ inviteTitle: e.target.value })}
              />
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl text-pink-500">Экран 2 — Еда</h1>
              <p className="text-3xl ">Заголовок</p>
              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Чего тебе хочется? "
                value={data.foodTitle}
                onChange={(e) => update({ foodTitle: e.target.value })}
              />
              <p className="text-3xl ">
                Выбери, из каких опций будет выбирать получатель
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold text-pink-500">
                Экран 3 — дата и время
              </h1>

              <div className="flex flex-col gap-2">
                <label>
                  <p className="text-3xl ">Заголовок</p>
                </label>

                <input
                  className="w-full rounded-2xl border border-pink-200 p-4 text-lg
                   focus:border-pink-400 focus:outline-none"
                  placeholder="Когда тебе будет удобно встретиться? ❤️"
                  value={data.dateTitle}
                  onChange={(e) =>
                    update({
                      dateTitle: e.target.value,
                    })
                  }
                />

                <p className="text-xl">
                  Этот текст увидит получатель над выбором даты и времени.
                </p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold text-pink-500">
                Экран 4 — Дополнительный вопрос
              </h1>
              <label>
                <p className="text-3xl ">Введи свой вопрос или пожелание</p>
              </label>
              <input
                className="w-full rounded-2xl border border-pink-200 p-4 text-lg
                 focus:border-pink-400 focus:outline-none"
                placeholder="Напиши что-то, что получатель увидит перед выбором даты и времени"
                value={data.questionTitle}
                onChange={(e) =>
                  update({
                    questionTitle: e.target.value,
                  })
                }
              />
            </div>
          )}

          {step === 5 && (
            <>
              <h2 className="text-3xl text-pink-500 ">Превью</h2>
              <PhoneFrame>
                <Invite />
                <Food />
                <DatePage />
                <Question />
              </PhoneFrame>

              {/* <div className="p-4 rounded-xl bg-pink-50">
                {data.inviteGif && (
                  <img
                    src={data.inviteGif}
                    alt="Invite"
                    className="rounded-xl"
                  />
                )}
                <p className="text-3xl">{data.inviteTitle}</p>
                <p className="text-3xl">{data.foodTitle}</p>
                <p className="text-3xl">{data.dateTitle}</p>
              </div> */}
            </>
          )}

          {step === 6 && (
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold text-pink-500">
                Экран 6 — Финальные штрихи
              </h1>

              <p className="text-3xl ">Проверь введенные данные</p>
              <div className="p-4 rounded-xl bg-pink-50">
                {data.inviteGif && (
                  <img
                    src={data.inviteGif}
                    alt="Invite"
                    className="rounded-xl"
                  />
                )}
                <p className="text-3xl">{data.inviteTitle}</p>
                <p className="text-3xl">{data.foodTitle}</p>
                <p className="text-3xl">{data.dateTitle}</p>
                <p className="text-3xl">{data.questionTitle}</p>
              </div>
              <p className="text-3xl ">
                Если всё верно, нажми "Создать", чтобы сгенерировать ссылку на
                открытку.
              </p>
            </div>
          )}

          {step === 7 && (
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="text-7xl">🎉</div>

              <h1 className="text-4xl font-bold text-pink-500">
                Открытка создана!
              </h1>

              <p className="text-gray-600">
                Ссылка готова и доступна для отправки
              </p>
              <button
                onClick={() => navigator.clipboard.writeText(data.link || '')}
                className="px-6 py-3 rounded-xl bg-gray-100"
              >
                Копировать ссылку
              </button>

              <div className="w-full p-4 rounded-xl bg-pink-50 break-all">
                {data.link}
              </div>

              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 rounded-xl bg-pink-500 text-white"
              >
                Главное меню
              </button>
            </div>
          )}
        </WizardStep>

        <div className="flex justify-between mt-6">
          {step > 0 && step < 7 && (
            <button onClick={back} className="px-4 py-2 rounded-xl bg-gray-100">
              Назад
            </button>
          )}

          {step < 6 && (
            <button
              onClick={next}
              className="px-4 py-2 rounded-xl bg-pink-500 text-white"
            >
              Далее
            </button>
          )}

          {step === 6 && (
            <button
              onClick={async () => {
                const fakeId = crypto.randomUUID();
                const link = `${window.location.origin}/card/${fakeId}`;

                update({ link });
                next();
              }}
              className="px-4 py-2 rounded-xl bg-green-500 text-white"
            >
              Создать
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
