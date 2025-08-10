import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react'; // Removed Leaf icon
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  submenu?: NavItem[];
}

interface MobileNavProps {
  navItems: NavItem[];
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false); // Close sheet on route change
  }, [location.pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-amb-dark" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white p-6">
        <Link to="/" className="flex items-center space-x-2 text-amb-primary mb-6" onClick={() => setIsOpen(false)}>
          <img src="/able-mind-body-website-logo.jpg" alt="Able Mind & Body Logo" className="h-10 w-10 object-contain" /> {/* New logo image */}
          <span className="text-2xl font-bold">Able Mind & Body</span>
        </Link>
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            item.submenu ? (
              <Accordion type="single" collapsible className="w-full" key={item.title}>
                <AccordionItem value={item.title}>
                  <AccordionTrigger className="text-lg font-medium text-amb-dark hover:text-amb-primary py-2 text-center">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4">
                    <ul className="flex flex-col space-y-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.href}
                            className={cn(
                              "block py-2 text-amb-dark hover:text-amb-primary transition-colors text-center",
                              location.pathname === subItem.href && "font-semibold text-amb-primary"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={item.title}
                to={item.href}
                className={cn(
                  "text-lg font-medium text-amb-dark hover:text-amb-primary transition-colors py-2 text-center",
                  location.pathname === item.href && "font-semibold text-amb-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            )
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;