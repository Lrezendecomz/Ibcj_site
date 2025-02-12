import React from 'react';

const videos = [
  {
    title: 'Culto de Domingo - 09/02/2025 às 18h',
    description: 'Culto de Louvor e Adoração',
    videoId: 'btWwBTTGmwQ', // Replace with actual YouTube video IDs
  },
  {
    title: 'Culto - 02/01/2025',
    description: 'Estudo bíblico sobre fé',
    videoId: 'Ol-LV33mcfs',
  },
  // Add more videos as needed
];

export default function Videos() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Vídeos</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}