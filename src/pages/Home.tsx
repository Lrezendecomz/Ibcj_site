import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Church, Users, Calendar, Video, Radio } from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();

    return (
      <div className="space-y-12">
  <section className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
    {/* Imagem de fundo */}
    <img
      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920"
      alt="Árvore de folhas verdes cercada por neblina"
      className="w-full h-full object-cover"
    />

    {/* Sobreposição escura com gradiente */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-center justify-center">
      <div className="text-center text-white px-4">
        {/* Título principal */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Igreja Batista Carvalhos de Justiça
        </h1>
        {/* Subtítulo */}
        <p className="text-lg md:text-xl font-bold">
          Venha fazer parte da nossa família
        </p>
      </div>
    </div>
  </section>
  
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link
            to="/membros"
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Users className="w-12 h-12 mb-4 text-blue-600" />
            <h2 className="text-xl font-semibold mb-2">Nossos Membros</h2>
            <p className="text-gray-600">Conheça nossa comunidade</p>
          </Link>
  
          <Link
            to="/horarios"
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Calendar className="w-12 h-12 mb-4 text-green-600" />
            <h2 className="text-xl font-semibold mb-2">Horários</h2>
            <p className="text-gray-600">Horários dos cultos e eventos</p>
          </Link>
  
          <Link
            to="/videos"
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Video className="w-12 h-12 mb-4 text-red-600" />
            <h2 className="text-xl font-semibold mb-2">Vídeos</h2>
            <p className="text-gray-600">Assista nossas pregações</p>
          </Link>
  
          <Link
            to="/aovivo"
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Radio className="w-12 h-12 mb-4 text-purple-600" />
            <h2 className="text-xl font-semibold mb-2">Ao Vivo</h2>
            <p className="text-gray-600">Assista nosso culto ao vivo</p>
          </Link>
        </section>
  
        <section className="bg-white rounded-2xl shadow-sm p-8">
    <div className="flex items-center space-x-3 mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Versículo do Dia</h2>
      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
        Novo
      </span>
    </div>
    <div className="space-y-4">
    <div className="border-l-4 border-purple-500 pl-4 py-2">
        <p className="font-semibold text-gray-800">Is 41:10</p>
        <p className="text-gray-600"> Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus.</p>
        <p className="text-gray-600">Eu o fortalecerei e o ajudarei; Eu o segurarei com a minha mão direita vitoriosa.</p>
      </div>
    </div>
  </section>
        
        <section className="bg-white rounded-2xl shadow-sm p-8">
    <div className="flex items-center space-x-3 mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Mural de Avisos</h2>
      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
        Novo
      </span>
    </div>
    
    <div className="space-y-4">
      <div className="border-l-4 border-blue-500 pl-4 py-2">
        <p className="font-semibold text-gray-800">Retiro de Jovens</p>
        <p className="text-gray-600">Inscrições abertas para o retiro de jovens que acontecerá nos dias 15-17 de abril.</p>
      </div>
  
      <div className="border-l-4 border-green-500 pl-4 py-2">
        <p className="font-semibold text-gray-800">Escola Bíblica Dominical</p>
        <p className="text-gray-600">Nossa segunda aula do ano, no próximo domingo, não perca</p>
      </div>
  
      <div className="border-l-4 border-purple-500 pl-4 py-2">
        <p className="font-semibold text-gray-800">Culto de Santa Ceia</p>
        <p className="text-gray-600">Neste domingo teremos nosso culto especial de Santa Ceia às 18h.</p>
      </div>
    </div>
  </section>
  
  <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Calendário de Atividades 2025</h2>
            <p className="text-gray-600 mt-2">Confira os próximos eventos e atividades da nossa igreja</p>
          </div>
          
          <div className="grid gap-6">
            {[
              {
                date: '15 Março 2025',
                time: '19:00',
                title: 'Culto de Jovens Especial',
                description: 'Uma noite especial de louvor e adoração com a participação do ministério de jovens.',
                location: 'Templo Principal'
              },
              {
                date: '17 Março 2025',
                time: '09:00',
                title: 'Escola Bíblica Dominical',
                description: 'Estudo bíblico especial sobre o livro de Apocalipse.',
                location: 'Salas de Estudo'
              },
              {
                date: '20 Março 2025',
                time: '19:30',
                title: 'Culto de Oração',
                description: 'Momento especial de intercessão pela igreja e famílias.',
                location: 'Templo Principal'
              },
              {
                date: '23 Março 2025',
                time: '15:00',
                title: 'Ensaio do Coral',
                description: 'Preparação para a cantata de Páscoa.',
                location: 'Sala de Música'
              }
            ].map((event, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="min-w-[120px] text-center">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="block text-blue-600 font-semibold">{event.date}</span>
                    <span className="text-sm text-blue-500">{event.time}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 mt-1">{event.description}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate('/calendario')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Calendário Completo
              <Calendar className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
   
  <section className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-sm p-8 text-white">
    <h2 className="text-2xl font-bold mb-6 text-center">Siga-nos nas Redes Sociais</h2>
    
    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      <a
        href="https://instagram.com/ibcj.dd"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <span className="font-medium">Instagram</span>
      </a>
  
      <a
        href="https://youtube.com/@carvalhosdejustica_dd"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
        <span className="font-medium">YouTube</span>
      </a>
  
      <a
        href="https://facebook.com/ibcjdd"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        <span className="font-medium">Facebook</span>
      </a>
    </div>
  </section>
      </div>
    );
  }
