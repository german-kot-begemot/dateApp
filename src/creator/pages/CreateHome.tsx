import { useNavigate } from 'react-router-dom';

export const CreateHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-pink-50">
      <h1 className="text-4xl font-bold text-[#F93C96]">Create your card 💌</h1>

      <button
        onClick={() => navigate('/create/config')}
        className="rounded-2xl bg-pink-500 px-8 py-4 text-white"
      >
        Start creating
      </button>
    </div>
  );
};
