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
    <main className="wrapper min-h-screen flex flex-col items-center justify-center">
      <motion.div
        variants={fadeInContainer()}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6 text-center min-w-100"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-8xl font-bold text-[#F93C96]"
        >
          Moment Cards
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-[#F76D6D] text-3xl! max-w-3xl w-full"
        >
          {t('home.description')}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
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
