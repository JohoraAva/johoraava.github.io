export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/img/JA_logo.jpg"
            alt="JA"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-400/60"
          />
          <span className="font-semibold text-sm tracking-wide text-slate-800">Johora Ava</span>
        </a>
      </div>
    </header>
  )
}
