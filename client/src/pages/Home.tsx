import { useNavigate } from 'react-router-dom';
import './Home.css';
import { AppBtn } from '../shared/ui/AppBtn';
import { motion } from 'framer-motion';
import { fadeInContainer, fadeInUp } from '../shared/animations/variants';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <main className="wrapper flex-1 px-4">
      <motion.div
        variants={fadeInContainer()}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-5xl flex-col items-center gap-6 px-4 text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#F93C96]"
        >
          Moment Cards
        </motion.h1>

        <p className="text-[#F76D6D] text-lg sm:text-xl lg:text-3xl max-w-3xl">
          {t('home.description')}
        </p>

        <motion.div
          variants={fadeInUp}
          className="flex w-full flex-col sm:flex-row gap-4 justify-center mt-[40px]!"
        >
          <AppBtn onClick={() => navigate('/create')}>
            {t('home.createCard')}
          </AppBtn>

          <AppBtn
            onClick={() => {
              const id = prompt(t('home.enterCardCode'));
              if (id) navigate(`/card/${id}`);
            }}
          >
            {t('home.openCard')}
          </AppBtn>
        </motion.div>
      </motion.div>
    </main>
  );
};
