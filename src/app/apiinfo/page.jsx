import Header from "@/components/Header";

export default function ApiInfo() {
  return (
    <>
      <Header />
      <main className="relative max-w-4xl mx-auto py-8 sm:py-12 md:py-16 px-4 min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-300 opacity-30 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute top-1/3 -right-16 sm:-right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-400 opacity-25 rounded-full blur-2xl z-0 animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 bg-blue-200 opacity-40 rounded-full blur-2xl z-0 animate-bounce" style={{animationDuration: '4s'}} />
        
        <div className="relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
              📡 Sobre a API
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-600 font-medium">Descubra os segredos por trás dos dados</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-blue-200 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 sm:p-4 rounded-2xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-blue-800 text-base sm:text-lg flex items-center gap-2">
                    🏷️ Nome da API
                  </h3>
                  <p className="text-blue-700 mt-2 font-semibold text-sm sm:text-base">South Park API</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-100 to-green-200 p-3 sm:p-4 rounded-2xl border-l-4 border-green-500">
                  <h3 className="font-bold text-green-800 text-base sm:text-lg flex items-center gap-2">
                    📖 Documentação
                  </h3>
                  <a href="https://spapi.dev/" target="_blank" className="text-green-700 hover:text-green-900 underline font-semibold transition-colors mt-2 block text-sm sm:text-base break-all">
                    https://spapi.dev/
                  </a>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-3 sm:p-4 rounded-2xl border-l-4 border-purple-500">
                  <h3 className="font-bold text-purple-800 text-base sm:text-lg flex items-center gap-2">
                    🌐 URL Base
                  </h3>
                  <p className="text-purple-700 mt-2 font-mono bg-purple-50 p-2 rounded text-xs sm:text-sm break-all">https://spapi.dev/api/</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-3 sm:p-4 rounded-2xl border-l-4 border-orange-500">
                  <h3 className="font-bold text-orange-800 text-base sm:text-lg flex items-center gap-2">
                    🎯 Endpoint Principal
                  </h3>
                  <p className="text-orange-700 mt-2 font-mono bg-orange-50 p-2 rounded text-sm sm:text-base">/characters</p>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-red-200 p-3 sm:p-4 rounded-2xl border-l-4 border-red-500">
                  <h3 className="font-bold text-red-800 text-base sm:text-lg flex items-center gap-2">
                    📋 Atributos Disponíveis
                  </h3>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs sm:text-sm">
                    {['id', 'name', 'age', 'sex', 'hair_color', 'occupation', 'grade', 'religion', 'voiced_by', 'relatives', 'episodes'].map(attr => (
                      <span key={attr} className="bg-red-50 text-red-700 px-2 py-1 rounded-full font-mono text-xs">
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 sm:p-8 rounded-3xl shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3">
              🌟 Sobre a South Park API
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              A South Park API fornece acesso completo ao universo criado por Trey Parker e Matt Stone. 
              Através dela, você pode explorar informações detalhadas sobre personagens icônicos, 
              suas relações familiares, episódios em que aparecem e muito mais. Uma ferramenta 
              perfeita para desenvolvedores que querem criar aplicações divertidas e envolventes!
            </p>
          </div>

          <div className="flex justify-center mt-8 sm:mt-10">
            <a href="/" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full shadow-xl hover:from-blue-800 hover:to-blue-600 hover:scale-105 transition-all font-bold text-sm sm:text-base md:text-lg flex items-center gap-2">
              🏠 Voltar à Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
