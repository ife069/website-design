import React from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm'; // Assuming you want the form here too
import { MadeWithDyad } from '@/components/made-with-dyad';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="text-lg text-foreground mb-8">
          We'd love to hear from you! Please fill out the form below.
        </p>
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </main>
      <footer className="w-full bg-amb-dark text-amb-light p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Able Mind & Body. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Contact;