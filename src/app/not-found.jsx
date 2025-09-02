import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-100 to-blue-400 overflow-hidden">
        {/* Fundo animado com círculos e sparkles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600 opacity-20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-200 opacity-30 rounded-full blur-2xl animate-bounce" style={{animationDuration:'3s'}} />
          {/* Sparkles */}
          {[...Array(12)].map((_,i)=>(
            <div key={i} className={`absolute animate-ping bg-blue-400 rounded-full opacity-40`} style={{width:8+i*2,height:8+i*2,top:`${10+Math.random()*80}%`,left:`${10+Math.random()*80}%`,animationDuration:`${1.5+Math.random()*2}s`}} />
          ))}
        </div>
        <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full border border-blue-100 animate-fadein">
          <svg className="w-24 h-24 mb-4 animate-bounce-slow" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="#60a5fa" stroke="#2563eb" strokeWidth="4"/><text x="50" y="60" textAnchor="middle" fontSize="48" fill="#fff">😢</text></svg>
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center drop-shadow animate-fadein">Página não encontrada</h1>
          <p className="mb-6 text-center text-lg text-blue-900 animate-fadein">O conteúdo que você procura não existe ou foi removido.</p>
          <a href="/" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-500 hover:scale-105 transition-all font-bold text-lg animate-fadein">Voltar à Home</a>
        </div>
      </main>
    </>
  );
}
