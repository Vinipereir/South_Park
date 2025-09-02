
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-blue-300 overflow-hidden px-4 py-8">
        {/* Fundo decorativo mais bonito */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-96 md:h-96 bg-blue-300 opacity-40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 bg-purple-400 opacity-30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/4 left-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-200 opacity-35 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}} />
          <div className="absolute top-1/3 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-300 opacity-25 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 sm:w-28 sm:h-28 bg-pink-200 opacity-30 rounded-full blur-xl animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}} />
        </div>
        <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 flex flex-col items-center max-w-sm sm:max-w-md md:max-w-lg w-full border border-blue-200">
          <div className="mb-6 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 aspect-square flex items-center justify-center overflow-hidden">
            <Image
              src="/Eu.jpg" // Altere para o nome real do arquivo da sua imagem na pasta public
              alt="Foto do Aluno"
              width={140}
              height={140}
              className="rounded-full object-cover w-full h-full border-4 border-blue-400 shadow-lg hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center drop-shadow">Turma: 2TDS2</h1>
          <h2 className="text-xl text-blue-500 font-semibold mb-2 text-center">Escola: Senai</h2>
          <h3 className="text-lg font-semibold mb-1 text-gray-800">Aluno: Vinicius Pereira </h3>
          <p className="italic text-blue-800 text-center mb-6 text-lg">“A persistência realiza o impossível.”</p>
          <a
            href="/characters"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-500 hover:scale-105 transition-all font-bold text-lg"
          >
            Ver Personagens
          </a>
        </div>
      </main>
    </>
  );
}
