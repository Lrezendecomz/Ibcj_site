import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md transition-all flex items-center gap-2"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
}
