import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import BackButton from "../components/BackButton"; // Corrigi o caminho da importação

const events = [
  { date: '15 Abril 2024', time: '19:00', title: 'Culto de Jovens Especial', description: 'Uma noite especial...', location: 'Templo Principal', category: 'culto' },
  { date: '17 Março 2024', time: '09:00', title: 'Escola Bíblica Dominical', description: 'Estudo bíblico...', location: 'Salas de Estudo', category: 'culto' },
  { date: '20 Março 2024', time: '19:30', title: 'Culto de Oração', description: 'Momento especial...', location: 'Templo Principal', category: 'culto' },
  { date: '23 Março 2024', time: '15:00', title: 'Ensaio do Coral', description: 'Preparação para...', location: 'Sala de Música', category: 'ensaio' },
  { date: '25 Março 2024', time: '20:00', title: 'Reunião de Líderes', description: 'Planejamento...', location: 'Sala de Reuniões', category: 'reuniao' },
  { date: '27 Março 2024', time: '19:00', title: 'Culto de Missões', description: 'Apresentação...', location: 'Templo Principal', category: 'culto' },
  { date: '30 Março 2024', time: '16:00', title: 'Ensaio Geral da Páscoa', description: 'Preparação final...', location: 'Templo Principal', category: 'ensaio' },
  { date: '31 Março 2024', time: '18:00', title: 'Celebração de Páscoa', description: 'Culto especial...', location: 'Templo Principal', category: 'culto' },
  { date: '02 Janeiro 2025', time: '09:00', title: 'Aula Inaugural', description: 'Nossa EBD', location: 'Templo Principal', category: 'aula' }
];

export default function CalendarPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);// Executa apenas quando a página carregar
   
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('Março 2024');
// Função para filtrar eventos
  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
    const matchesMonth = selectedMonth ? event.date.includes(selectedMonth) : true;
    return matchesCategory && matchesMonth;
  });

  return (
    <div className="space-y-8 p-4">
      <BackButton /> {/* Adicionado o botão aqui */}

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Calendário Completo</h1>
          <p className="text-gray-600 mt-2">Todos os eventos e atividades da nossa igreja</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
          <select
            className="px-3 py-2 md:px-4 md:py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todos os Eventos</option>
            <option value="culto">Cultos</option>
            <option value="ensaio">Ensaios</option>
            <option value="reuniao">Reuniões</option>
            <option value="aula">Ebd</option>
          </select>

          <select
            className="px-3 py-2 md:px-4 md:py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="Março 2024">Março 2024</option>
            <option value="Abril 2024">Abril 2024</option>
            <option value="Maio 2024">Maio 2024</option>
            <option value="Janeiro 2025">Janeiro 2025</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="grid gap-6 p-4 md:p-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className="min-w-[120px] text-center">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="block text-blue-600 font-semibold">{event.date}</span>
                    <span className="text-sm text-blue-500">{event.time}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 mt-1">{event.description}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Nenhum evento encontrado para este filtro.</p>
          )}
        </div>
      </div>
    </div>
  );
}

