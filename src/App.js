import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Attrs from './pages/Attrs';
import Ideias from './pages/Ideias';
import InComing from './pages/InComing';
import CharClass from "./pages/CharClass";
import CharSubClass from "./pages/CharSubClass";

function App() {
  return (
    <>
      <div className='bg-slate-800' >
        <aside className="w-64 fixed left-0 top-0 h-screen bg-slate-900 p-10">
          <Sidebar/>
        </aside>
        <main className="flex-1 ml-60 h-full">
          <div className="container mx-auto px-4 p-10 min-h-screen md:px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="incoming" element={<InComing />} />
              <Route path="classes" element={<Classes />} />
              <Route path="attrs" element={<Attrs />} />
              <Route path="ideias" element={<Ideias />} />
              <Route path="classes/:handle" element={<CharClass />} />
              <Route path="classes/subclass/:handle" element={<CharSubClass />} />
            </Routes>
          </div>
        </main>
        
      </div>
    </>
  );
}

export default App;
