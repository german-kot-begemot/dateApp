import { WizardStep } from './WizardStep';
import { WizardCardEventType } from './WizardCardEventType';
import { useWizard } from '../../shared/hooks/useWizard';
import { ProgressBar } from '../../shared/ui/ProgressBar';
import { WizardGifPicker } from './WizardGifPicker';
import { PhoneFrame } from './PhoneFrame';
import { Invite } from '../../recipient/pages/Invite';
import { Food } from '../../recipient/pages/Food';
import { DatePage } from '../../recipient/pages/DatePage';
import { Question } from '../../recipient/pages/Question';
import { useNavigate } from 'react-router-dom';
import { FoodSelector } from '../components/FoodSelector';
import type { WizardData } from '../../shared/types';
import { createCard } from '../../api/cardApi';
import { Final } from '../../recipient/pages/Final';
import { AppBtn } from '../../shared/ui/AppBtn';

export const CreateConfig = () => {
  const { step, data, update, next, back } = useWizard();
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const result = await createCard(data);
      update({
        id: result.id,
        link: result.link,
      });
      next();
    } catch (error) {
      console.error('❌ Handle create error:', error);
    }
  };

  const previewCard = {
    _id: 'preview',
    type: data.type ?? '',
    inviteGif: data.inviteGif,
    inviteTitle: data.inviteTitle,
    foodTitle: data.foodTitle,
    foodOptions: data.foodOptions,
    dateTitle: data.dateTitle,
    questionTitle: data.questionTitle,
  };

  return (
    <div className="creator-wrapper bg-love-gradient min-h-screen flex items-center justify-center px-6">
      <div className="content-block w-full max-w-2xl rounded-3xl p-8 shadow-xl flex flex-col gap-8 max-h-150 overflow-auto">
        <ProgressBar step={step} total={8} />

        <WizardStep step={step}>
          {step === 0 && (
            <section className="flex flex-col gap-10">
              <h2
                id="step-0-title"
                className="step-header text-center text-4xl"
              >
                Choose the type of card
              </h2>
              <WizardCardEventType
                selected={data.type}
                onSelect={(v) => update({ type: v as WizardData['type'] })}
              />
            </section>
          )}

          {step === 1 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-4xl text-center">Step 1 - Invitation</h2>
              <p className="text-2xl">Choose a GIF for the invitation</p>
              <WizardGifPicker
                selected={data.inviteGif}
                onSelect={(gif) =>
                  update({
                    inviteGif: gif,
                  })
                }
              />
              <label htmlFor="inviteTitle" className="text-2xl">
                Write a title
              </label>
              <input
                id="inviteTitle"
                className="w-full p-3 border rounded-xl"
                placeholder="Ты пойдешь со мной на свидание?"
                value={data.inviteTitle}
                onChange={(e) =>
                  update({
                    inviteTitle: e.target.value,
                  })
                }
              />
            </section>
          )}

          {step === 2 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-4xl text-center">Step 2 - Food</h2>
              <label htmlFor="foodTitle" className="text-2xl">
                Title
              </label>
              <input
                id="foodTitle"
                className="w-full p-3 border rounded-xl"
                placeholder="What do you want?"
                value={data.foodTitle}
                onChange={(e) => update({ foodTitle: e.target.value })}
              />
              <p className="text-2xl">
                Choose from which options the recipient will choose
              </p>
              <FoodSelector
                selected={data.foodOptions}
                onChange={(foodOptions) => update({ foodOptions })}
              />
            </section>
          )}

          {step === 3 && (
            <section className="flex flex-col gap-5">
              <h2 className="text-4xl text-center">Step 3 - Date and Time</h2>
              <label htmlFor="dateTitle" className="text-2xl">
                Title
              </label>
              <input
                id="dateTitle"
                className="w-full rounded-2xl border border-pink-200 p-4 text-lg focus:border-pink-400 focus:outline-none"
                placeholder="When would it be convenient for you to meet? ❤️"
                value={data.dateTitle}
                onChange={(e) =>
                  update({
                    dateTitle: e.target.value,
                  })
                }
              />
              <p className="text-2xl">
                This text will be seen by the recipient above the date and time
                selection.
              </p>
            </section>
          )}

          {step === 4 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-4xl text-center">
                Step 4 - Additional Question
              </h2>
              <label htmlFor="questionTitle" className="text-2xl">
                Enter your question or wish
              </label>
              <input
                id="questionTitle"
                className="w-full rounded-2xl border border-pink-200 p-4 text-lg focus:border-pink-400 focus:outline-none"
                placeholder="Write something nice or ask a question you want an answer to"
                value={data.questionTitle}
                onChange={(e) =>
                  update({
                    questionTitle: e.target.value,
                  })
                }
              />
            </section>
          )}

          {step === 5 && (
            <section className="flex flex-col gap-4 text-[14px]">
              <h2 className="text-4xl text-center">Preview</h2>
              <PhoneFrame>
                <div className="is-preview h-full w-full">
                  <Invite card={previewCard} />
                  <Food card={previewCard} selectedFood={data.foodOptions} />
                  <DatePage
                    card={previewCard}
                    selectedDate={null}
                    selectedTime={null}
                  />
                  <Question card={previewCard} />
                  <Final
                    answers={{
                      cardId: '',
                      selectedFood: [],
                      selectedDate: null,
                      selectedTime: null,
                      answer: '',
                    }}
                  />
                </div>
              </PhoneFrame>
            </section>
          )}

          {step === 6 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-4xl text-center"> Step 6 - Final Touches </h2>
              <p className="text-2xl ">Check the entered data</p>
              <div className="p-4 rounded-xl bg-pink-50">
                {data.inviteGif && (
                  <img
                    src={data.inviteGif}
                    alt="Invite"
                    className="rounded-xl"
                  />
                )}
                <p className="text-2xl text-[#531A2A]!">{data.inviteTitle}</p>
                <p className="text-2xl text-[#531A2A]!">{data.foodTitle}</p>
                <p className="text-2xl text-[#531A2A]!">{data.dateTitle}</p>
                <p className="text-2xl text-[#531A2A]!">{data.questionTitle}</p>
              </div>
              <p className="text-2xl text-[#fdf1e8]!">
                If everything is correct, click "Create" to generate a link to
                the card.
              </p>
            </section>
          )}

          {step === 7 && (
            <section className="flex flex-col items-center gap-6 text-center">
              <div className="text-7xl">🎉</div>
              <h2 className="text-4xl font-bold">The card has been created!</h2>
              <p className="text-[#fdf1e8]! text-2xl">
                The link is ready and available for sharing
              </p>
              <AppBtn
                onClick={() => navigator.clipboard.writeText(data.link || '')}
              >
                Copy link
              </AppBtn>

              <div className="w-full p-4 rounded-xl bg-pink-50 break-all text-[#531A2A] text-2xl">
                {data.link}
              </div>

              <div className="flex justify-center gap-4 w-full items-center">
                <AppBtn
                  onClick={() => {
                    window.open(
                      `https://t.me/myappdating_bot?start=${data.id}`,
                      '_blank',
                    );
                  }}
                >
                  Get a response in Telegram
                </AppBtn>
                <AppBtn onClick={() => navigate('/')}>Main menu</AppBtn>
              </div>
            </section>
          )}
        </WizardStep>

        <div className="flex items-center justify-between mt-6 w-full">
          {step > 0 && step < 7 ? (
            <AppBtn onClick={back} active={false}>
              Back
            </AppBtn>
          ) : (
            <div />
          )}

          {step < 6 && <AppBtn onClick={next}>Next</AppBtn>}

          {step === 6 && <AppBtn onClick={handleCreate}>Create</AppBtn>}
        </div>
      </div>
    </div>
  );
};
