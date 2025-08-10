import React from 'react';
import Navbar from '@/components/Navbar';
import { MadeWithDyad } from '@/components/made-with-dyad';

const NewUpdate2024 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">2024 New Update</h1>
        <p className="text-lg text-foreground">
          The latest updates for 2024 regarding COVID-19.
        </p>
      </main>
      <footer className="w-full bg-amb-dark text-amb-light p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Able Mind & Body. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default NewUpdate2024;