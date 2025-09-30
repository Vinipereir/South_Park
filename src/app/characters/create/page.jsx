"use client"

import Header from "@/components/Header";
import { api } from "@/lib/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CreateCharacterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
    grade: "",
    religion: "",
    voiced_by: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['name', 'age'];
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === '') {
        toast.error(`O campo ${field === 'name' ? 'Nome' : 'Idade'} é obrigatório!`);
        return false;
      }
    }

    if (isNaN(formData.age) || parseInt(formData.age) < 0) {
      toast.error('Idade deve ser um número válido!');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      const dataToSubmit = {
        ...formData,
        age: parseInt(formData.age)
      };

      await api.post("characters", dataToSubmit);
      
      toast.success("Personagem criado com sucesso!");
      
      // Aguarda um pouco para mostrar o toast e depois redireciona
      setTimeout(() => {
        router.push("/characters");
      }, 1500);
      
    } catch (error) {
      console.error("Erro ao criar personagem:", error);
      
      if (error.response?.data?.message) {
        toast.error(`Erro: ${error.response.data.message}`);
      } else {
        toast.error("Erro ao criar personagem. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="relative max-w-4xl mx-auto py-8 px-4 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-300 opacity-30 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-48 h-48 bg-blue-400 opacity-25 rounded-full blur-2xl z-0 animate-pulse" />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              ➕ Criar Novo Personagem
            </h1>
            <p className="text-lg text-blue-600 font-medium">Adicione um novo personagem ao universo de South Park</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-blue-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Digite o nome do personagem"
                    required
                  />
                </div>

                {/* Idade */}
                <div>
                  <label htmlFor="age" className="block text-sm font-bold text-blue-700 mb-2">
                    Idade *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Digite a idade"
                    min="0"
                    required
                  />
                </div>

                {/* Ocupação */}
                <div>
                  <label htmlFor="occupation" className="block text-sm font-bold text-blue-700 mb-2">
                    Ocupação
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Digite a ocupação"
                  />
                </div>

                {/* Série/Ano */}
                <div>
                  <label htmlFor="grade" className="block text-sm font-bold text-blue-700 mb-2">
                    Série/Ano
                  </label>
                  <input
                    type="text"
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Digite a série ou ano escolar"
                  />
                </div>

                {/* Religião */}
                <div>
                  <label htmlFor="religion" className="block text-sm font-bold text-blue-700 mb-2">
                    Religião
                  </label>
                  <input
                    type="text"
                    id="religion"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Digite a religião"
                  />
                </div>

                {/* Dublado por */}
                <div>
                  <label htmlFor="voiced_by" className="block text-sm font-bold text-blue-700 mb-2">
                    Dublado por
                  </label>
                  <input
                    type="text"
                    id="voiced_by"
                    name="voiced_by"
                    value={formData.voiced_by}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Digite quem dubla o personagem"
                  />
                </div>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl shadow-lg hover:from-green-700 hover:to-green-600 hover:scale-105 transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Criando..." : "✅ Criar Personagem"}
                </button>
                
                <button
                  type="button"
                  onClick={() => router.push("/characters")}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded-xl shadow-lg hover:from-gray-700 hover:to-gray-600 hover:scale-105 transition-all font-bold text-lg"
                >
                  ↩️ Voltar à Listagem
                </button>
              </div>
            </form>
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