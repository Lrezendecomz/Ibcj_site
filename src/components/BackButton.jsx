import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-gray-600 hover:text-blue-600 flex items-center"
      aria-label="Voltar"
    >
      <ArrowLeft className="w-6 h-6" />
    </button>
  );
}
