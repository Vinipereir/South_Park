"use client";
import Header from "@/components/Header";
import { api } from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function CharacterDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(`characters/${id}`)
      .then(res => setCharacter(res.data.data))
      .catch(() => setError("Erro ao carregar personagem."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-10">Carregando...</p>;
  if (error) return (
    <div className="text-center mt-10 text-red-600">
      <p>{error}</p>
      <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Voltar</button>
    </div>
  );

  return (
    <>
      <Header />
      <main className="relative max-w-3xl mx-auto py-12 px-4 min-h-[80vh]">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-200 opacity-30 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow">{character.name}</h1>
          <div className="flex justify-center mb-8">
            <Link href="/characters" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow hover:from-blue-700 hover:to-blue-500 transition-all font-bold">Voltar à Listagem</Link>
            <Link href="/" className="ml-4 px-5 py-2 bg-gray-400 text-white rounded-full shadow hover:bg-gray-500 transition-all font-bold">Voltar à Home</Link>
          </div>
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col gap-6 border border-blue-200">
            {character.image ? (
              <img
                src={character.image}
                alt={character.name}
                className="w-36 h-36 rounded-full border-4 border-blue-400 mx-auto mb-4 shadow-lg object-cover bg-white"
              />
            ) : (
              <div className="w-36 h-36 bg-blue-200 rounded-full flex items-center justify-center text-6xl font-extrabold text-blue-700 mx-auto mb-4 shadow-lg">
                {character.name.charAt(0)}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-blue-900">
              <p><span className="font-bold text-blue-700">Sexo:</span> {character.sex}</p>
              <p><span className="font-bold text-blue-700">Ocupação:</span> {character.occupation || "Desconhecida"}</p>
              <p><span className="font-bold text-blue-700">Religião:</span> {character.religion || "-"}</p>
              <p><span className="font-bold text-blue-700">Cor do cabelo:</span> {character.hair_color || "-"}</p>
              <p><span className="font-bold text-blue-700">Id:</span> {character.id}</p>
              <p><span className="font-bold text-blue-700">URL:</span> <a href={character.url} target="_blank" className="text-blue-600 underline break-all">{character.url}</a></p>
              <p><span className="font-bold text-blue-700">Família:</span> <a href={character.family} target="_blank" className="text-blue-600 underline break-all">{character.family}</a></p>
            </div>
            <div className="text-blue-900">
              <span className="font-bold text-blue-700">Parentes:</span>
              <ul className="list-disc list-inside ml-4">
                {character.relatives && character.relatives.length > 0 ? character.relatives.map((rel, i) => (
                  <li key={i}>{rel.relation}: <a href={rel.url} target="_blank" className="text-blue-600 underline break-all">{rel.url}</a></li>
                )) : <li>Nenhum</li>}
              </ul>
            </div>
            <div className="text-blue-900">
              <span className="font-bold text-blue-700">Episódios:</span>
              <ul className="list-disc list-inside ml-4 max-h-32 overflow-y-auto">
                {character.episodes && character.episodes.length > 0 ? character.episodes.map((ep, i) => (
                  <li key={i}><a href={ep} target="_blank" className="text-blue-600 underline break-all">{ep}</a></li>
                )) : <li>Nenhum</li>}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
