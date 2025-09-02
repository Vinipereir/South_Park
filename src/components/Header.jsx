import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 sm:py-6 px-4 sm:px-8 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white shadow-2xl backdrop-blur-md border-b-2 border-blue-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <Link href="/" className="group flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold group-hover:bg-white/30 transition-all duration-300">
            🏔️
          </div>
          <span className="font-extrabold text-lg sm:text-2xl tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            South Park CRUD
          </span>
        </Link>
        <nav className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-6 items-center">
          <Link href="/characters" className="relative px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/20 transition-all duration-300 group text-sm sm:text-base">
            <span className="font-semibold">👥 Personagens</span>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
          <Link href="/apiinfo" className="relative px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/20 transition-all duration-300 group text-sm sm:text-base">
            <span className="font-semibold">📋 Sobre a API</span>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
          <Link href="/not-found" className="relative px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-red-500/30 bg-red-500/20 transition-all duration-300 group border border-red-300/50 text-sm sm:text-base">
            <span className="font-semibold text-red-100">❌ Not Found</span>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
