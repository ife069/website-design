import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // Import Checkbox component

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted!");
    // You might want to add a toast notification here later
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" type="text" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" type="text" placeholder="Doe" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="(123) 456-7890" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="How can we help you?" rows={5} required />
      </div>

      {/* New Checkbox Disclaimer */}
      <div className="flex items-start space-x-2">
        <Checkbox id="smsConsent" className="mt-1" />
        <label
          htmlFor="smsConsent"
          className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
        >
          By checking this box, you agree to receive Conversational TEXT messages from Able Mind & Body Home Care at the phone number provided above. You may reply STOP to opt out at any time. For assistance reply HELP. Messages and data rates may apply. Message frequency will vary. Learn more on our{' '}
          <a href="/terms-and-conditions" className="text-amb-primary hover:underline">
            terms and conditions
          </a>.
        </label>
      </div>

      <Button type="submit" className="w-full bg-amb-tertiary hover:bg-amb-tertiary/90 text-amb-light py-3 text-lg rounded-md shadow-md transition-colors duration-300">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;