"use client"

import Header from "@/components/Header";
import { api } from "@/lib/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter, useParams } from "next/navigation";

export default function DeleteCharacterPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  // Buscar dados do personagem ao carregar a página
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await api.get(`characters/${id}`);
        setCharacter(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar personagem:", error);
        toast.error("Erro ao carregar dados do personagem");
        router.push("/characters");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id, router]);

  const handleDelete = async () => {
    setDeleting(true);
    
    try {
      await api.delete(`characters/${id}`);
      
      toast.success("Personagem excluído com sucesso!");
      
      // Aguarda um pouco para mostrar o toast e depois redireciona
      setTimeout(() => {
        router.push("/characters");
      }, 1500);
      
    } catch (error) {
      console.error("Erro ao excluir personagem:", error);
      
      if (error.response?.data?.message) {
        toast.error(`Erro: ${error.response.data.message}`);
      } else {
        toast.error("Erro ao excluir personagem. Tente novamente.");
      }
    } finally {
      setDeleting(false);
    }
  };

  const handleCancel = () => {
    router.push("/characters");
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="relative max-w-4xl mx-auto py-8 px-4 min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mb-4"></div>
            <p className="text-center text-xl text-red-700 font-semibold">Carregando dados do personagem...</p>
          </div>
        </main>
      </>
    );
  }

  if (!character) {
    return (
      <>
        <Header />
        <main className="relative max-w-4xl mx-auto py-8 px-4 min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
          <div className="text-center py-20">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold text-red-700 mb-4">Personagem não encontrado</h2>
            <button
              onClick={() => router.push("/characters")}
              className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full shadow-xl hover:from-blue-800 hover:to-blue-600 hover:scale-105 transition-all font-bold"
            >
              Voltar à Listagem
            </button>
          </div>
        </main>
      </>
    );
  }

  const placeholder = "https://ui-avatars.com/api/?name=South+Park&background=ef4444&color=fff&size=128";

  return (
    <>
      <Header />
      <main className="relative max-w-4xl mx-auto py-8 px-4 min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-red-300 opacity-30 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-48 h-48 bg-red-400 opacity-25 rounded-full blur-2xl z-0 animate-pulse" />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-800 via-red-600 to-red-400 bg-clip-text text-transparent mb-4">
              🗑️ Excluir Personagem
            </h1>
            <p className="text-lg text-red-600 font-medium">Esta ação não pode ser desfeita!</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-red-200">
            {/* Aviso */}
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl mb-8">
              <div className="flex items-center">
                <div className="text-2xl mr-3">⚠️</div>
                <div>
                  <h3 className="font-bold text-lg">Atenção!</h3>
                  <p>Você realmente deseja excluir este personagem? Esta ação é irreversível.</p>
                </div>
              </div>
            </div>

            {/* Dados do Personagem */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={character.image || placeholder}
                  alt={character.name}
                  width={120}
                  height={120}
                  className="rounded-full aspect-square border-4 border-red-400 shadow-lg object-cover bg-white"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-red-700 mb-2">{character.name}</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-red-600">Idade:</span>
                      <span className="ml-2 text-gray-700">{character.age || "N/A"}</span>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-red-600">Ocupação:</span>
                      <span className="ml-2 text-gray-700">{character.occupation || "N/A"}</span>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-red-600">Série:</span>
                      <span className="ml-2 text-gray-700">{character.grade || "N/A"}</span>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-red-600">Religião:</span>
                      <span className="ml-2 text-gray-700">{character.religion || "N/A"}</span>
                    </div>
                    
                    {character.voiced_by && (
                      <div className="sm:col-span-2">
                        <span className="font-semibold text-red-600">Dublado por:</span>
                        <span className="ml-2 text-gray-700">{character.voiced_by}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl shadow-lg hover:from-red-700 hover:to-red-600 hover:scale-105 transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deleting ? "Excluindo..." : "🗑️ Confirmar Exclusão"}
              </button>
              
              <button
                onClick={handleCancel}
                disabled={deleting}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded-xl shadow-lg hover:from-gray-700 hover:to-gray-600 hover:scale-105 transition-all font-bold text-lg"
              >
                ↩️ Cancelar
              </button>
            </div>
          </div>

          {/* Link para Home */}
          <div className="text-center mt-8">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full shadow-xl hover:from-blue-800 hover:to-blue-600 hover:scale-105 transition-all font-bold"
            >
              🏠 Voltar à Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}