import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { ShieldCheck, Building, Home, HeartPulse, Car, Users } from 'lucide-react'; // Icons for service cards

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
          <img
            src="/placeholder.svg" // Placeholder image, replace with a relevant image
            alt="Happy family"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-start p-8 md:p-16">
            <div className="max-w-xl text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Dignified, Independent Living at Home
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Able Mind & Body Home Care is an in-home care provider dedicated to helping individuals lead dignified, independent lifestyles in the comfort and safety of their own homes. Our unique community-based approach to service enables us to fully understand the needs of each individual and create a customized care plan.
              </p>
              <Button className="bg-amb-tertiary hover:bg-amb-tertiary/90 text-amb-light px-8 py-3 text-lg rounded-full shadow-md transition-colors duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section (Inspired by "The right insurance plan for every need.") */}
        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
            Our Comprehensive Care Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<ShieldCheck className="h-12 w-12" />}
              title="Personal Care"
              description="Assistance with daily activities like bathing, dressing, and grooming, ensuring comfort and dignity."
              link="/services/personal-care"
            />
            <ServiceCard
              icon={<Building className="h-12 w-12" />}
              title="Homemaking"
              description="Support with light housekeeping, meal preparation, and errands to maintain a tidy home."
              link="/services/homemaking"
            />
            <ServiceCard
              icon={<Home className="h-12 w-12" />}
              title="Companionship"
              description="Friendly visits, engaging conversations, and activities to combat loneliness and promote well-being."
              link="/services/companionship"
            />
            <ServiceCard
              icon={<HeartPulse className="h-12 w-12" />}
              title="Medication Reminders"
              description="Gentle reminders to take medications on time, ensuring adherence to prescribed regimens."
              link="/services/medication-reminders"
            />
            <ServiceCard
              icon={<Car className="h-12 w-12" />}
              title="Transportation"
              description="Safe and reliable transport to appointments, social events, and shopping."
              link="/services/transportation"
            />
            <ServiceCard
              icon={<Users className="h-12 w-12" />}
              title="Respite Care"
              description="Temporary relief for family caregivers, providing them with a much-needed break."
              link="/services/respite-care"
            />
          </div>
        </section>

        {/* Caregivers Section */}
        <section className="py-12">
          <Card className="bg-secondary text-secondary-foreground shadow-lg border-none">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-center text-secondary-foreground">
                Our Dedicated Caregivers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg md:text-xl text-center max-w-4xl mx-auto space-y-4">
              <p>
                We are committed to providing quality, ethical and professional services. Our Caregivers are an integral part of our company - they are the heartbeat of the agency.
              </p>
              <p>
                By design, our Caregivers experience on-going training, they are bonded and insured, and carefully supervised. By nature, our Caregivers are caring, courteous, committed to care, and eager to help.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form Section Placeholder */}
        <section className="py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Contact Us
          </h2>
          <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-card-foreground">
              Please fill out the form below to get in touch with us.
            </p>
            {/* Placeholder for an actual contact form component */}
            <div className="mt-6 p-8 border-2 border-dashed border-amb-tertiary rounded-lg text-amb-tertiary">
              <p className="font-semibold">Contact Form will go here</p>
              <p className="text-sm mt-2">We'll build this out in a future step!</p>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12 bg-card rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Disclaimer</h2>
          <p className="text-sm text-card-foreground leading-relaxed">
            Able Mind & Body Home Care (AMB) does not discriminate on the basis of race, color, national origin, sex, religion, age or disability in employment or the provision of services. AMB will take appropriate action to provide reasonable accommodations to qualified employees and applicants with disabilities, unless providing such accommodations creates an undue hardship. “Able Mind & Body Home Care is committed to providing reasonable accommodations for qualified individuals with disabilities in a fair and equitable manner and in accordance with applicable federal and state law. We seek to promote a diverse and inclusive work community.”Able Mind & Body Home Care (AMB) does not discriminate on the basis of race, color, national origin, sex, religion, age or disability in employment or the provision of services. AMB will take appropriate action to provide reasonable accommodations to qualified employees and applicants with disabilities, unless providing such accommodations creates an undue hardship.
          </p>
          <p className="text-sm text-card-foreground leading-relaxed mt-4">
            “Able Mind & Body Home Care is committed to providing reasonable accommodations for qualified individuals with disabilities in a fair and equitable manner and in accordance with applicable federal and state law. We seek to promote a diverse and inclusive work community.”
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-amb-dark text-amb-light p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Able Mind & Body Home Care. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;