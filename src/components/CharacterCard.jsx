import Link from "next/link";

const placeholder = "https://ui-avatars.com/api/?name=South+Park&background=60a5fa&color=fff&size=128";

export default function CharacterCard({ character }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/80 border border-blue-200 rounded-3xl shadow-xl p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
      <img
        src={character.image || placeholder}
        alt={character.name}
        width={110}
        height={110}
        className="rounded-full border-4 border-blue-400 mb-3 shadow-lg object-cover bg-white group-hover:ring-4 group-hover:ring-blue-200 transition-all"
        loading="lazy"
      />
      <h3 className="text-xl font-extrabold text-blue-700 text-center mb-1 drop-shadow">{character.name}</h3>
      <p className="text-sm text-blue-900 mb-3 text-center italic">{character.occupation || "Ocupação desconhecida"}</p>
      <Link href={`/characters/${character.id}`} className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow hover:from-blue-700 hover:to-blue-500 hover:scale-105 transition-all font-bold text-sm">Detalhes</Link>
    </div>
  );
}
