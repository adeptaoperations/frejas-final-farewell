
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Vores butik er lukket
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Tak for mange års støtte. Hvis du har spørgsmål eller problemer, så skriv til <a 
            href="mailto:info@freja-kobenhavn.dk" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            info@freja-kobenhavn.dk
          </a>
        </p>
      </div>
    </div>
  );
};

export default Index;
