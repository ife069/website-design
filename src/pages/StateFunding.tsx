import React from 'react';
import Navbar from '@/components/Navbar';
import { MadeWithDyad } from '@/components/made-with-dyad';

const StateFunding = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">State Funding</h1>
        <p className="text-lg text-foreground">
          Information about state funding will be available here.
        </p>
      </main>
      <footer className="w-full bg-amb-dark text-amb-light p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Able Mind & Body. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default StateFunding;