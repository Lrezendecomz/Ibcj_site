import React from 'react';

const members = [
  {
    name: 'Jamisson',
    role: 'Pastor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300',
  },
  {
    name: 'Maria Santos',
    role: 'Líder de Louvor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300',
  },
  // Add more members as needed
];

export default function Members() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Nossos Membros</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-gray-600 text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}