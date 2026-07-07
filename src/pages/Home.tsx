import { useNavigate } from 'react-router-dom';
import './Home.css';
import { motion } from 'framer-motion';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" wrapper min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6">
      <div className="flex flex-col items-center gap-6 text-center min-w-100">
        <h1 className="text-7xl font-bold text-pink-600">Love Cards</h1>
        <p className="text-[#5F6B85] text-3xl max-w-md w-full">
          Создавай интерактивные открытки и отправляй их как ссылку.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -6,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
            }}
            onClick={() => navigate('/create')}
            className="px-8 py-4 rounded-2xl bg-white text-pink-600 text-2xl! font-semibold shadow-lg hover:bg-pink-100 transition"
          >
            Создать открытку
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -6,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
            }}
            onClick={() => {
              const id = prompt('Вставь код открытки');
              if (id) navigate(`/card/${id}`);
            }}
            className="px-8 py-4 rounded-2xl bg-white text-pink-600 text-2xl! font-semibold shadow-lg hover:bg-pink-100 transition"
          >
            Открыть приглашение
          </motion.button>
        </div>
      </div>
    </div>
  );
};
