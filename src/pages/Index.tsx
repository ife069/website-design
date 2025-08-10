import { MadeWithDyad } from "@/components/made-with-dyad";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-primary text-primary-foreground flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Able Mind & Body Home Care
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            is an in-home care provider dedicated to helping individuals lead dignified, independent lifestyles in the comfort and safety of their own homes. Our unique community-based approach to service enables us to fully understand the needs of each individual and create a customized care plan.
          </p>
        </div>
      </section>

      {/* Caregivers Section */}
      <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Our Dedicated Caregivers
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            We are committed to providing quality, ethical and professional services. Our Caregivers are an integral part of our company - they are the heartbeat of the agency.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            By design, our Caregivers experience on-going training, they are bonded and insured, and carefully supervised. By nature, our Caregivers are caring, courteous, committed to care, and eager to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24 bg-background text-foreground px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            Contact Us
          </h2>
          <form className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
            <div>
              <Label htmlFor="name" className="text-lg">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" className="mt-2 p-3 text-base" />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" className="mt-2 p-3 text-base" />
            </div>
            <div>
              <Label htmlFor="message" className="text-lg">Message</Label>
              <Textarea id="message" placeholder="Your Message" rows={5} className="mt-2 p-3 text-base" />
            </div>
            <Button type="submit" className="w-full py-3 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="w-full py-12 md:py-16 bg-accent-brown text-primary-foreground text-sm px-4">
        <div className="max-w-4xl mx-auto text-center opacity-90">
          <h3 className="font-semibold mb-4 text-lg">Disclaimer</h3>
          <p className="leading-relaxed">
            Able Mind & Body Home Care (AMB) does not discriminate on the basis of race, color, national origin, sex, religion, age or disability in employment or the provision of services. AMB will take appropriate action to provide reasonable accommodations to qualified employees and applicants with disabilities, unless providing such accommodations creates an undue hardship.
          </p>
          <p className="mt-4 leading-relaxed">
            “Able Mind & Body Home Care is committed to providing reasonable accommodations for qualified individuals with disabilities in a fair and equitable manner and in accordance with applicable federal and state law. We seek to promote a diverse and inclusive work community.”
          </p>
        </div>
      </section>

      {/* Made with Dyad */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;