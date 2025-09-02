"use client"

import Header from "@/components/Header";
import { api } from "@/lib/api";
import CharacterCard from "@/components/CharacterCard";
import { useEffect, useState } from "react";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("characters")
      .then(res => setCharacters(res.data.data))
      .catch(() => setError("Erro ao carregar personagens."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <main className="relative max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute -top-20 -left-20 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-300 opacity-30 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-400 opacity-25 rounded-full blur-2xl z-0 animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 bg-blue-200 opacity-40 rounded-full blur-2xl z-0 animate-bounce" style={{animationDuration: '3s'}} />
        
        <div className="relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
              👥 Personagens de South Park
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-600 font-medium mb-6 sm:mb-8">Explore o incrível mundo criado por Trey Parker e Matt Stone</p>
            
            <div className="flex justify-center mb-8 sm:mb-12">
              <a href="/" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full shadow-xl hover:from-blue-800 hover:to-blue-600 hover:scale-105 transition-all font-bold text-sm sm:text-base md:text-lg flex items-center gap-2">
                🏠 Voltar à Home
              </a>
            </div>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
              <p className="text-center text-xl text-blue-700 font-semibold">Carregando personagens...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg mx-auto max-w-md text-center">
              <div className="text-4xl mb-2">❌</div>
              <p className="font-semibold">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {characters.map((char) => (
                  <CharacterCard key={char.id} character={char} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
