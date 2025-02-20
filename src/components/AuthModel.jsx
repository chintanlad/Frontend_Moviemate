import { X } from "lucide-react"

export default function AuthModal({ isOpen, onClose, activeTab, onTabChange }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <img src="https://www.metacritic.com/images/icons/metacritic-icon.svg" alt="Metacritic" className="h-8 w-8" />
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex border-b">
          <button
            className={`flex-1 border-b-2 pb-2 text-center font-medium ${
              activeTab === "register" ? "border-black text-black" : "border-transparent text-gray-500"
            }`}
            onClick={() => onTabChange("register")}
          >
            Register
          </button>
          <button
            className={`flex-1 border-b-2 pb-2 text-center font-medium ${
              activeTab === "signin" ? "border-black text-black" : "border-transparent text-gray-500"
            }`}
            onClick={() => onTabChange("signin")}
          >
            Sign In
          </button>
        </div>

        {activeTab === "register" ? (
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input type="email" id="email" className="mt-1 w-full rounded-md border border-gray-300 p-2" />
            </div>

            <div>
              <label htmlFor="username" className="block font-medium">
                Username
              </label>
              <input type="text" id="username" className="mt-1 w-full rounded-md border border-gray-300 p-2" />
              <p className="mt-1 text-xs text-gray-500">15 characters max, letters and numbers only</p>
            </div>

            <div>
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <input type="password" id="password" className="mt-1 w-full rounded-md border border-gray-300 p-2" />
              <p className="mt-1 text-xs text-gray-500">
                Must be at least 6 characters with 1 number and special character
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-800 py-2 font-medium text-white hover:bg-gray-700"
            >
              Register
            </button>
          </form>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="signin-email" className="block font-medium">
                Email
              </label>
              <input type="email" id="signin-email" className="mt-1 w-full rounded-md border border-gray-300 p-2" />
            </div>

            <div>
              <label htmlFor="signin-password" className="block font-medium">
                Password
              </label>
              <input
                type="password"
                id="signin-password"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-800 py-2 font-medium text-white hover:bg-gray-700"
            >
              Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

