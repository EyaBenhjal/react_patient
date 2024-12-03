"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Plus } from "lucide-react"; // Assurez-vous d'importer l'icône "Plus" depuis le bon package

const ratePerMinute = 5; // Taux en dollars par minute
const minimumTime = 15; // Temps minimum en minutes

const Skills = () => {
  return (
    <div className="space-y-6">
    </div>
  );
};

const ProjectPageView = ({ trans }) => {
  const { data: session } = useSession();

  // Tableau des URLs d'images
  const images = [
    "/images/instructor/avatar-7.jpg",
  
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Section Détails du Formateur */}

      {/* Section À propos de moi */}
      <section className="about-me-area">
        <h1 className="text-3xl font-bold mb-6">Upcoming meeting</h1>

        {/* Première Carte */}
        <Card className="mb-6">
          <CardHeader className="border-none mb-0 p-6">
            <CardTitle>Meeting with patient </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-default-600">15 mars 2024 - 10:00</p>
            <div className="flex gap-4 mt-4">
              <Button>Rejoindre</Button>
            </div>
            
            <div className="flex items-center mt-4">
              {images.map((src, index) => (
                <Image 
                  key={`image1-${index}`} 
                  src={src} 
                  alt={`Formateur ${index + 1}`} 
                  width={36} 
                  height={36} 
                  className="rounded-full mr-2" 
                />
              ))}

              <Button
                size="icon"
                className="flex-none bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6 ml-2"
              >
                +3
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Deuxième Carte */}
        <Card className="mb-6">
          <CardHeader className="border-none mb-0 p-6">
            <CardTitle>Présentation Client : Présentation des Nouvelles Fonctionnalités</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-default-600">20 mars 2024 - 14:00</p>
            <div className="flex gap-4 mt-4">
              <Button>Rejoindre</Button>
            </div>
          
            <div className="flex items-center mt-4">
              {images.map((src, index) => (
                <Image 
                  key={`image2-${index}`} 
                  src={src} 
                  alt={`Formateur ${index + 1}`} 
                  width={36} 
                  height={36} 
                  className="rounded-full mr-2" 
                />
              ))}
              <Button
                size="icon"
                className="flex-none bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6 ml-2"
              >
                +3
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section Compétences */}
      <Skills />
    </div>
  );
};

export default ProjectPageView;
