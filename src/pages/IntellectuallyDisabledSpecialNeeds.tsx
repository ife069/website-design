import React from 'react';
import Navbar from '@/components/Navbar';
import { MadeWithDyad } from '@/components/made-with-dyad';

const IntellectuallyDisabledSpecialNeeds = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Intellectually Disabled & Special Needs Care</h1>
        <p className="text-lg text-foreground">
          Specialized support for individuals with intellectual disabilities and special needs.
        </p>
      </main>
      <footer className="w-full bg-amb-dark text-amb-light p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Able Mind & Body. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default IntellectuallyDisabledSpecialNeeds;