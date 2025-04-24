
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <Card className="w-full max-w-xl shadow-lg border-0">
        <CardContent className="p-8 md:p-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-1 bg-gray-300 rounded mb-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Vores butik er lukket
            </h1>
            <div className="w-16 h-1 bg-gray-300 rounded" />
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Tak for mange års støtte. Hvis du har spørgsmål eller problemer, så skriv til
            </p>
            <a 
              href="mailto:info@freja-kobenhavn.dk" 
              className="text-blue-600 hover:text-blue-800 underline transition-colors text-lg"
            >
              info@freja-kobenhavn.dk
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
