import React from 'react';
import { Radio } from 'lucide-react';

export default function Live() {
  const isLive = true; // This should be controlled by your actual live status
  const liveVideoId = 'btWwBTTGmwQ'; // Replace with actual YouTube live video ID

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <h1 className="text-3xl font-bold">Ao Vivo</h1>
        {isLive && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <Radio className="w-4 h-4 mr-1 animate-pulse" />
            AO VIVO
          </span>
        )}
      </div>

      {isLive ? (
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1`}
            title="Transmissão ao vivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Não estamos ao vivo no momento</h2>
          <p className="text-gray-600">
            Fique atento às nossas redes sociais para saber quando começará a próxima transmissão.
          </p>
        </div>
      )}
    </div>
  );
}