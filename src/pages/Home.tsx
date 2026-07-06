import { useNavigate } from 'react-router-dom';
import './Home.css';

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
          <button
            onClick={() => navigate('/create')}
            className="px-8 py-4 rounded-2xl bg-white text-pink-600 text-2xl! font-semibold shadow-lg hover:bg-pink-100 transition"
          >
            Создать открытку
          </button>
          <button
            onClick={() => {
              const id = prompt('Вставь код открытки');
              if (id) navigate(`/card/${id}`);
            }}
            className="px-8 py-4 rounded-2xl bg-white text-pink-600 text-2xl! font-semibold shadow-lg hover:bg-pink-100 transition"
          >
            Открыть приглашение
          </button>
        </div>
      </div>
    </div>
  );
};
