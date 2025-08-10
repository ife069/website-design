import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, ShoppingCart } from 'lucide-react'; // Using Leaf for the logo icon

const Navbar = () => {
  return (
    <header className="w-full bg-white text-amb-dark p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-amb-primary hover:text-amb-dark transition-colors">
          <Leaf className="h-8 w-8" />
          <span className="text-2xl font-bold">Able Mind & Body</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-amb-dark hover:text-amb-primary transition-colors font-medium">Home</Link></li>
            <li><Link to="/services" className="text-amb-dark hover:text-amb-primary transition-colors font-medium">Services</Link></li>
            <li><Link to="/about" className="text-amb-dark hover:text-amb-primary transition-colors font-medium">About Us</Link></li>
            <li><Link to="/contact" className="text-amb-dark hover:text-amb-primary transition-colors font-medium">Contact</Link></li>
          </ul>
          <Button className="bg-amb-accent hover:bg-amb-primary text-amb-dark px-6 py-2 rounded-md shadow-sm transition-colors duration-300">
            Get Insurance
          </Button>
          <ShoppingCart className="h-6 w-6 text-amb-dark cursor-pointer hover:text-amb-primary transition-colors" />
        </nav>

        {/* Mobile Navigation (Placeholder for a hamburger menu or similar) */}
        <div className="md:hidden flex items-center space-x-4">
          <Button className="bg-amb-accent hover:bg-amb-primary text-amb-dark px-4 py-2 rounded-md shadow-sm transition-colors duration-300 text-sm">
            Get Insurance
          </Button>
          <ShoppingCart className="h-6 w-6 text-amb-dark cursor-pointer hover:text-amb-primary transition-colors" />
          {/* You might add a Sheet or Dialog component here for a mobile menu */}
          {/* <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;