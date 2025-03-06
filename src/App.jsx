"use client";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MediaCarousel from "./components/MediaCarousel";
import AuthModal from "./components/AuthModel";
import MediaDetail from "./pages/MediaDetails";

export default function App() 
{
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [activeAuthTab, setActiveAuthTab] = useState("register"); // 'register' or 'signin'

    return (
        <div className="min-h-screen bg-white">
            <Navbar
                onRegisterClick={() => {
                    setIsAuthModalOpen(true);
                    setActiveAuthTab("register");
                }}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <main className="container mx-auto px-4 py-8">
                            <MediaCarousel />
                        </main>
                    }
                />
                <Route path="/title/:id" element={<MediaDetail />} />
            </Routes>
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                activeTab={activeAuthTab}
                onTabChange={setActiveAuthTab}
            />
        </div>
    );
}





// "use client"

// import { React, useState } from "react"
// import Navbar from "./components/Navbar.jsx"
// import MediaCarousel from "./components/MediaCarousel.jsx"
// import AuthModal from "./components/AuthModel.jsx"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// export default function App() {
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
//   const [activeAuthTab, setActiveAuthTab] = useState("register") // 'register' or 'signin'

//   return (

      
//     <div className="min-h-screen bg-white">
//       <Navbar
//         onRegisterClick={() => {
//           setIsAuthModalOpen(true)
//           setActiveAuthTab("register")
//         }}
//       />
//       <main className="container mx-auto px-4 py-8">
//         <MediaCarousel />
//       </main>
//       <AuthModal
//         isOpen={isAuthModalOpen}
//         onClose={() => setIsAuthModalOpen(false)}
//         activeTab={activeAuthTab}
//         onTabChange={setActiveAuthTab}
//       />
//     </div>
 

    
//   )
// }