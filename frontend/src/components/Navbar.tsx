import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo links back to home */}
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent cursor-pointer">
          StartupPerks
        </Link>

        <div className="flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          
          {/* Dashboard Link - Make sure this matches your folder name */}
          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>

          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full transition shadow-lg shadow-blue-600/20">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}