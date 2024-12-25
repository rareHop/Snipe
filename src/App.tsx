import React from 'react';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Members } from './pages/Members';
import { Social } from './pages/Social';

function App() {
  // Simple routing logic - in a real app, use React Router
  const path = window.location.pathname;

  const getPage = () => {
    switch (path) {
      case '/about':
        return <About />;
      case '/projects':
        return <Projects />;
      case '/members':
        return <Members />;
      case '/social':
        return <Social />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;