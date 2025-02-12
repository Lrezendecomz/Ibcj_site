import React from 'react';

const schedule = [
  {
    day: 'Domingo',
    services: [
      {name: 'Escola Dominical', time: '09:00' },
      {name: 'Culto de Celebração', time: '19:00' },
    ],
  },
  {
    day: 'Quinta-feira',
    services: [
      { time: '19:00', name: 'Culto de Oração' },
    ],
  },
  {
    day: 'Sexta-feira',
    services: [
      { time: '20:00', name: 'Culto de Jovens' },
    ],
  },
];

export default function Schedule() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Horários dos Cultos</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schedule.map((day, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">{day.day}</h2>
            <div className="space-y-3">
              {day.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="flex justify-between items-center">
                  <span className="text-gray-600">{service.time}</span>
                  <span className="font-medium">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}