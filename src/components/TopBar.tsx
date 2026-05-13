export default function TopBar() {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">

        {/* Logos */}
        <div className="flex items-center gap-3">
          <img src="/img/pci.png" alt="PCI DSS" className="h-5 opacity-80" />
          <img src="/img/sello.png" alt="Sello" className="h-5 opacity-80" />
        </div>

        {/* Enlaces */}
        <div className="flex items-center gap-4 text-xs text-gray-600">
          <a className="hover:text-[#F57C00] transition">Coffitos</a>
          <span className="text-gray-400">|</span>
          <a className="hover:text-[#F57C00] transition">Legacios</a>
          <span className="text-gray-400">|</span>
          <a className="hover:text-[#F57C00] transition">Ayuda</a>
          <span className="text-gray-400">|</span>
          <a className="hover:text-[#F57C00] transition">Soporte</a>
        </div>

        {/* Frase */}
        <p className="text-xs font-medium text-gray-700">
          Plataforma líder en formación de ingeniería aplicada.
        </p>

      </div>
    </div>
  );
}
