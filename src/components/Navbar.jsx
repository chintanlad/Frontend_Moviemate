import { Search } from "lucide-react"

export default function Navbar({ onRegisterClick }) {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-8">
            <img
              src="https://www.metacritic.com/images/icons/metacritic-icon.svg"
              alt="Metacritic"
              className="h-8 w-8"
            />
            <div className="hidden md:flex space-x-6">
              <NavLink href="#">Games</NavLink>
              <NavLink href="#">Movies</NavLink>
              <NavLink href="#">TV Shows</NavLink>
              <NavLink href="#">Music</NavLink>
              <NavLink href="#">News</NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="w-48 md:w-64 rounded-md bg-white px-4 py-1.5 pr-8 text-black"
              />
              <Search className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={onRegisterClick}
              className="rounded bg-yellow-500 px-4 py-1.5 font-medium text-black hover:bg-yellow-400"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm font-medium text-gray-200 hover:text-white">
      {children}
    </a>
  )
}

