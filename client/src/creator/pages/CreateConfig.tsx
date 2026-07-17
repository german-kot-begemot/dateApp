import { WizardStep } from './WizardStep';
import { motion } from 'framer-motion';
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
import { getInviteGif } from '../../shared/lib/getInviteGif';
import { WizardSection } from '../components/WizardSection';
import { useTranslation } from 'react-i18next';

export const CreateConfig = () => {
  const { t } = useTranslation();
  const { step, data, update, next, back } = useWizard();
  const navigate = useNavigate();

  const isNextDisabled =
    (step === 0 && !data.type) ||
    (step === 1 && (!data.inviteGif || !data.inviteTitle.trim())) ||
    (step === 2 && data.foodOptions.length === 0) ||
    (step === 3 && !data.dateTitle.trim()) ||
    (step === 4 && !data.questionTitle.trim());

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
      <div className="content-block rounded-3xl p-8 shadow-xl flex flex-col gap-8 ">
        <ProgressBar step={step} total={8} />

        <WizardStep step={step}>
          {step === 0 && (
            <WizardSection className="flex flex-col gap-10">
              <motion.h2
                id="step-0-title"
                className="step-header text-center text-4xl mb-7.5!"
              >
                {t('wizard.chooseType')}
              </motion.h2>
              <WizardCardEventType
                selected={data.type}
                onSelect={(v) => update({ type: v as WizardData['type'] })}
              />
            </WizardSection>
          )}

          {step === 1 && (
            <WizardSection className="flex flex-col gap-4">
              <motion.h2
                className="text-4xl text-center mb-7.5!"
                id="step-1-title"
              >
                {t('wizard.invitation')}
              </motion.h2>
              <motion.p className="text-2xl">{t('wizard.chooseGif')}</motion.p>
              <WizardGifPicker
                selected={data.inviteGif}
                onSelect={(gif) =>
                  update({
                    inviteGif: gif,
                  })
                }
              />
              <motion.label htmlFor="inviteTitle" className="text-2xl">
                {t('wizard.writeTitle')}
              </motion.label>
              <motion.input
                id="inviteTitle"
                className="w-full p-3 border rounded-xl border-pink-200 placeholder:text-[#fdf1e8]!"
                placeholder={t('wizard.placeholderTitle')}
                value={data.inviteTitle}
                onChange={(e) =>
                  update({
                    inviteTitle: e.target.value,
                  })
                }
              />
            </WizardSection>
          )}

          {step === 2 && (
            <WizardSection className="flex flex-col gap-4">
              <motion.h2 className="text-4xl text-center mb-7.5!">
                {t('wizard.food')}
              </motion.h2>
              <motion.label htmlFor="foodTitle" className="text-2xl">
                {t('wizard.writeTitle')}
              </motion.label>
              <motion.input
                id="foodTitle"
                className="w-full p-3 border rounded-xl border-pink-200 placeholder:text-[#fdf1e8]!"
                placeholder={t('wizard.placeholderFoodOption')}
                value={data.foodTitle}
                onChange={(e) => update({ foodTitle: e.target.value })}
              />
              <motion.p className="text-2xl">
                {t('wizard.foodOptions')}
              </motion.p>
              <FoodSelector
                selected={data.foodOptions}
                onChange={(foodOptions) => update({ foodOptions })}
              />
            </WizardSection>
          )}

          {step === 3 && (
            <WizardSection className="flex flex-col gap-5">
              <motion.h2 className="text-4xl text-center mb-7.5!">
                {t('wizard.date')}
              </motion.h2>
              <motion.label htmlFor="dateTitle" className="text-2xl">
                {t('wizard.writeTitle')}
              </motion.label>
              <motion.input
                id="dateTitle"
                className="w-full rounded-2xl border border-pink-200 p-4 text-lg placeholder:text-[#fdf1e8]!"
                placeholder={t('wizard.datePlaceholder')}
                value={data.dateTitle}
                onChange={(e) =>
                  update({
                    dateTitle: e.target.value,
                  })
                }
              />
              <motion.p className="text-2xl">
                {t('wizard.dateDescription')}
              </motion.p>
            </WizardSection>
          )}

          {step === 4 && (
            <WizardSection className="flex flex-col gap-4">
              <motion.h2 className="text-4xl text-center mb-7.5!">
                {t('wizard.question')}
              </motion.h2>
              <motion.label htmlFor="questionTitle" className="text-2xl">
                {t('wizard.questionDescription')}
              </motion.label>
              <motion.input
                id="questionTitle"
                className="w-full rounded-2xl border border-pink-200 p-4 text-lg placeholder:text-[#fdf1e8]!"
                placeholder={t('wizard.placeholderQuestion')}
                value={data.questionTitle}
                onChange={(e) =>
                  update({
                    questionTitle: e.target.value,
                  })
                }
              />
            </WizardSection>
          )}

          {step === 5 && (
            <WizardSection className="flex flex-col gap-4 text-[14px]">
              <motion.h2 className="text-4xl text-center mb-7.5!">
                {t('wizard.preview')}
              </motion.h2>
              <PhoneFrame>
                <motion.div className="is-preview flex flex-col gap-6 h-full w-full">
                  <Invite card={previewCard} />
                  <Food
                    card={previewCard}
                    selectedFood={data.foodOptions}
                    // mode="preview"
                  />
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
                </motion.div>
              </PhoneFrame>
            </WizardSection>
          )}

          {step === 6 && (
            <WizardSection className="flex flex-col gap-4">
              <motion.h2 className="text-4xl text-center mb-7.5!">
                {t('wizard.final')}
              </motion.h2>
              <motion.p className="text-2xl ">Check the entered data</motion.p>
              <motion.div className="p-4 rounded-xl bg-pink-50">
                {data.inviteGif && (
                  <img
                    src={getInviteGif(data.inviteGif)}
                    alt="Invite"
                    className="rounded-xl"
                  />
                )}
                <motion.p className="text-2xl text-[#531A2A]!">
                  {data.inviteTitle}
                </motion.p>
                <motion.p className="text-2xl text-[#531A2A]!">
                  {data.foodTitle}
                </motion.p>
                <motion.p className="text-2xl text-[#531A2A]!">
                  {data.dateTitle}
                </motion.p>
                <motion.p className="text-2xl text-[#531A2A]!">
                  {data.questionTitle}
                </motion.p>
              </motion.div>
              <motion.p className="text-2xl text-[#fdf1e8]!">
                {t('wizard.createHint')}
              </motion.p>
            </WizardSection>
          )}

          {step === 7 && (
            <WizardSection className="flex flex-col items-center gap-6 text-center">
              <div className="text-7xl">🎉</div>
              <h2 className="text-4xl font-bold">{t('wizard.createdCard')}</h2>
              <p className="text-[#fdf1e8]! text-2xl">
                {t('wizard.sharingHint')}
              </p>
              <AppBtn
                onClick={() => navigator.clipboard.writeText(data.link || '')}
              >
                {t('wizard.linkCopy')}
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
                  {t('wizard.telegramNotification')}
                </AppBtn>
                <AppBtn onClick={() => navigate('/')}>
                  {t('buttons.mainMenu')}
                </AppBtn>
              </div>
            </WizardSection>
          )}
        </WizardStep>

        <div className="flex items-center justify-between mt-6 w-full">
          {step > 0 && step < 7 ? (
            <AppBtn onClick={back} active={false}>
              {t('buttons.back')}
            </AppBtn>
          ) : (
            <div />
          )}

          {step < 6 && (
            <AppBtn onClick={next} disabled={isNextDisabled}>
              {t('buttons.next')}
            </AppBtn>
          )}

          {step === 6 && (
            <AppBtn onClick={handleCreate}>{t('buttons.create')}</AppBtn>
          )}
        </div>
      </div>
    </div>
  );
};
