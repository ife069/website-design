import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, ShoppingCart, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import MobileNav from './MobileNav'; // Import the new MobileNav component
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  submenu?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    submenu: [
      { title: "About", href: "/about" },
      { title: "State Funding", href: "/state-funding" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    submenu: [
      { title: "Elderly Home Care", href: "/services/elderly-home-care" },
      { title: "Intellectually Disabled & Special Needs", href: "/services/intellectually-disabled-special-needs" },
      { title: "Mommy Care", href: "/services/mommy-care" },
    ],
  },
  {
    title: "Caregivers",
    href: "/caregivers",
    submenu: [
      { title: "Caregiver Referral Program", href: "/caregivers/referral-program" },
      { title: "AMB Newsletter", href: "/caregivers/newsletter" },
    ],
  },
  {
    title: "COVID-19 Update",
    href: "/covid-19-update",
    submenu: [
      { title: "2024 New Update", href: "/covid-19-update/2024-new-update" },
      { title: "Influenza vs COVID-19", href: "/covid-19-update/influenza-vs-covid-19" },
    ],
  },
  { title: "Resources", href: "/resources" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

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
            {navItems.map((item) => (
              item.submenu ? (
                <li key={item.title}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-amb-dark hover:text-amb-primary font-medium data-[state=open]:text-amb-primary text-center">
                        {item.title}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-md p-1">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.title} asChild>
                          <Link
                            to={subItem.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-amb-dark hover:bg-gray-100 hover:text-amb-primary transition-colors cursor-pointer text-center",
                              location.pathname === subItem.href && "font-semibold text-amb-primary"
                            )}
                          >
                            {subItem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className={cn(
                      "text-amb-dark hover:text-amb-primary transition-colors font-medium text-center",
                      location.pathname === item.href && "font-semibold text-amb-primary"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            ))}
          </ul>
          <Button className="bg-amb-accent hover:bg-amb-primary text-amb-dark px-6 py-2 rounded-md shadow-sm transition-colors duration-300">
            Get Insurance
          </Button>
          <ShoppingCart className="h-6 w-6 text-amb-dark cursor-pointer hover:text-amb-primary transition-colors" />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <Button className="bg-amb-accent hover:bg-amb-primary text-amb-dark px-4 py-2 rounded-md shadow-sm transition-colors duration-300 text-sm">
            Get Insurance
          </Button>
          <ShoppingCart className="h-6 w-6 text-amb-dark cursor-pointer hover:text-amb-primary transition-colors" />
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;