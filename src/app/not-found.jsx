import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDuration: '4s'}} />
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDuration: '6s'}} />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDuration: '5s'}} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-40 animate-ping"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-2xl mx-auto text-center opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease-out_forwards]">
          {/* Error Code */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 select-none animate-[glow_3s_ease-in-out_infinite]">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto mb-4 animate-[pulseGlow_3s_ease-in-out_infinite]"></div>
          </div>
          
          {/* Error Message */}
          <div className="mb-8 space-y-4 opacity-0 translate-y-8 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Página Não Encontrada
            </h2>
            <p className="text-lg text-gray-300 max-w-md mx-auto leading-relaxed">
              Parece que você se perdeu em South Park. A página que você está procurando não existe ou foi movida.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 translate-y-8 animate-[slideUp_0.8s_ease-out_0.5s_forwards]">
            <a 
              href="/" 
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Voltar ao Início
            </a>
            <a 
              href="/characters" 
              className="group inline-flex items-center px-6 py-3 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-purple-600/20 hover:scale-105 transform"
            >
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Ver Personagens
            </a>
          </div>
          
          {/* Additional info */}
          <p className="mt-8 text-sm text-gray-500 opacity-0 translate-y-8 animate-[slideUp_0.8s_ease-out_0.8s_forwards]">
            Código de erro: 404 | Página não encontrada
          </p>
        </div>
      </main>
    </>
  );
}
