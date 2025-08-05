// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import GitHub from './pages/GitHub';
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      {/* Simple header/navigation that appears on all pages */}
      <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
        <nav className="flex justify-center space-x-6">
          <Link 
            to="/" 
            className="px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Home
          </Link>
          <Link 
            to="/todo" 
            className="px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            To-Do
          </Link>
          <Link 
            to="/github" 
            className="px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            GitHub
          </Link>
        </nav>
      </header>

      {/* Main content*/}
      <main className="container mx-auto p-4 sm:p-6 min-h-[calc(100vh-64px)]">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          
          {/* To-Do app page */}
          <Route path="/todo" element={<Todo />} />
          
          {/* GitHub search page */}
          <Route path="/github" element={<GitHub />} />
          {/*  */}
<Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;