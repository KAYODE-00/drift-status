type NavbarProps = {
  title: string
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <div className="border-b px-6 py-4 flex items-center justify-between bg-[#F6F3ED]">

      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Hamburger (mobile) */}
        <button className="md:hidden text-lg">☰</button>

        <h1 className="font-medium">{title}</h1>
      </div>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
        <button>Status</button>
        <button>Docs</button>
      </div>

    </div>
  )
}