import { useNavigate } from 'react-router-dom';
import './Home.css';
import { AppBtn } from '../shared/ui/AppBtn';
import { motion } from 'framer-motion';
import { fadeInContainer, fadeInUp } from '../shared/animations/variants';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main
      className="wrapper min-h-screen flex flex-col items-center justify-center bg-linear-to-br
     from-pink-100 via-rose-50 to-fuchsia-100 px-6"
    >
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
          className="text-[#F76D6D] text-3xl! max-w-md w-full"
        >
          Create personalized interactive cards for every special moment.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <AppBtn onClick={() => navigate('/create')}>Create Card</AppBtn>
          <AppBtn
            onClick={() => {
              const id = prompt('Вставь код открытки');
              if (id) navigate(`/card/${id}`);
            }}
          >
            Open Card
          </AppBtn>
        </motion.div>
      </motion.div>
    </main>
  );
};
