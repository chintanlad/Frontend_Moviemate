"use client"

import { React, useState } from "react"
import Navbar from "./components/Navbar.jsx"
import MediaCarousel from "./components/MediaCarousel.jsx"
import AuthModal from "./components/AuthModel.jsx"

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [activeAuthTab, setActiveAuthTab] = useState("register") // 'register' or 'signin'

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onRegisterClick={() => {
          setIsAuthModalOpen(true)
          setActiveAuthTab("register")
        }}
      />
      <main className="container mx-auto px-4 py-8">
        <MediaCarousel />
      </main>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        activeTab={activeAuthTab}
        onTabChange={setActiveAuthTab}
      />
    </div>
  )
}








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
