import React from 'react';
import { UserSearch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <UserSearch size={28} />
          <h1 className="text-2xl font-bold">AIFindr</h1>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li><Link to="/" className="hover:text-indigo-200 transition-colors">Home</Link></li>
            <li><a href="#about" className="hover:text-indigo-200 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-indigo-200 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;