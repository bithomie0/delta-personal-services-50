import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary">Delta Personal Services</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary">About</a>
            <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
            <Button className="bg-secondary text-white hover:bg-secondary/90">Get Started</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</a>
              <Button className="w-full bg-secondary text-white hover:bg-secondary/90 mt-4">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;