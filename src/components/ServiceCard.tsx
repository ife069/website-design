import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <Card className="bg-white text-amb-dark shadow-lg border-none flex flex-col items-center text-center p-6">
      <CardHeader className="pb-4">
        <div className="text-amb-accent mb-4">{icon}</div> {/* Icon color from image */}
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Link to={link} className="text-amb-accent hover:text-amb-primary transition-colors text-sm font-medium">
          Learn More
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;