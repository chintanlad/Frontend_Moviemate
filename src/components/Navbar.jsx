"use client"

import { useState, React } from "react"
import { Link } from "react-router-dom"
import { Search, User, Clock, ChevronDown } from "lucide-react"

export default function Navbar({ onRegisterClick }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-white">
              Metacritic
            </Link>
            <div className="hidden md:flex space-x-6">
              <NavLink href="/games">Games</NavLink>
              <NavLink href="/movies">Movies</NavLink>
              <NavLink href="/tv">TV Shows</NavLink>
              <NavLink href="/music">Music</NavLink>
              <NavLink href="/news">News</NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="w-64 rounded-full bg-white/10 px-5 py-2 text-white placeholder-gray-400 focus:bg-white focus:text-black focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>

            <Link to="/watchlist" className="flex items-center space-x-2 text-white hover:text-gray-300">
              <Clock className="h-5 w-5" />
              <span>Watch Later</span>
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-lg bg-white p-4 shadow-xl">
                  <ProfileMenu onClose={() => setIsProfileOpen(false)} />
                </div>
              )}
            </div>

            <button
              onClick={onRegisterClick}
              className="rounded-full bg-yellow-500 px-6 py-2 font-medium text-black hover:bg-yellow-400"
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
    <Link to={href} className="text-base font-medium text-gray-300 hover:text-white">
      {children}
    </Link>
  )
}

function ProfileMenu({ onClose }) {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    username: "JohnDoe",
    email: "john@example.com",
  })

  const handleSave = () => {
    setIsEditing(false)
    // Save changes to backend
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b pb-2">
        <h3 className="text-lg font-semibold">Profile</h3>
        {isEditing ? (
          <button onClick={handleSave} className="text-sm font-medium text-green-600 hover:text-green-700">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Edit
          </button>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium text-gray-700">Username</label>
          {isEditing ? (
            <input
              type="text"
              value={userData.username}
              onChange={(e) => setUserData({ ...userData, username: e.target.value })}
              className="mt-1 w-full rounded-md border p-2"
            />
          ) : (
            <div className="mt-1 text-gray-900">{userData.username}</div>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="mt-1 w-full rounded-md border p-2"
            />
          ) : (
            <div className="mt-1 text-gray-900">{userData.email}</div>
          )}
        </div>
      </div>
    </div>
  )
}




// import { Search } from "lucide-react"

// export default function Navbar({ onRegisterClick }) {
//   return (
//     <nav className="bg-black text-white">
//       <div className="container mx-auto px-4">
//         <div className="flex h-14 items-center justify-between">
//           <div className="flex items-center space-x-8">
//             <img
//               src="https://www.metacritic.com/images/icons/metacritic-icon.svg"
//               alt="Metacritic"
//               className="h-8 w-8"
//             />
//             <div className="hidden md:flex space-x-6">
//               <NavLink href="#">Games</NavLink>
//               <NavLink href="#">Movies</NavLink>
//               <NavLink href="#">TV Shows</NavLink>
//               <NavLink href="#">Music</NavLink>
//               <NavLink href="#">News</NavLink>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="search"
//                 placeholder="Search"
//                 className="w-48 md:w-64 rounded-md bg-white px-4 py-1.5 pr-8 text-black"
//               />
//               <Search className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//             </div>
//             <button
//               onClick={onRegisterClick}
//               className="rounded bg-yellow-500 px-4 py-1.5 font-medium text-black hover:bg-yellow-400"
//             >
//               Register
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// function NavLink({ href, children }) {
//   return (
//     <a href={href} className="text-sm font-medium text-gray-200 hover:text-white">
//       {children}
//     </a>
//   )
// }

