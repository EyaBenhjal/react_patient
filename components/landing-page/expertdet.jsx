"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TimelineContent } from "@/components/ui/timeline";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FaStar, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import googleIcon from "@/public/images/auth/google.png";

const tarifParMinute = 5; // Tarif en dollars par minute
const tempsMinimum = 15; // Temps minimum en minutes

const Competences = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Où je peux vous aider</h1>
      <Card className="bg-gray-500 bg-opacity-50">
        <CardHeader>
          <Button
            size="icon"
            className="flex-none bg-default-100 dark:bg-default-100 text-default-500 hover:bg-default-100 rounded h-6 w-6 -mt-1"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 items-center">
            {["HTML", "HTML 5", "CSS", "JavaScript", "React", "Nextjs", "Vue JS", "Nuxt JS", "PHP", "Tailwind"].map((item, index) => (
              <Badge
                key={`skill-${index}`}
                className="text-xs font-medium text-default-500 bg-default-100 dark:bg-default-50"
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Experdet = ({ trans }) => {
  return (
    <div className="container mx-auto p-4">
      {/* Section Détails Instructeur */}
      <section className="instructor-details-area flex justify-between">
        <div className="instructor-details-wrap flex">
          <div className="instructor-details-img">
            <img src="/images/instructor/instructor_details_img.jpg" alt="Instructeur" />
          </div>
          <div className="instructor-details-content ml-4">
            <h1 className="name text-2xl font-bold text-white">Connor Hickey</h1>
            <span className="role text-lg text-white">Designer Graphique</span>

            <div className="profile-section flex flex-col items-center mt-4">
              <div className="social-icons flex space-x-4 mt-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter style={{ fontSize: '2rem' }} className="text-blue-500" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram style={{ fontSize: '2rem' }} className="text-pink-500" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ fontSize: '2rem' }} className="text-blue-700" />
                </a>
              </div>
              <div className="button-social-container flex items-center space-x-2 mt-4">
                <Link href="/auth/login1" className="btn bg-red-500 text-white px-4 py-2 rounded">
                  <span className="text-white">Réservez-moi</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos de moi */}
      <section className="about-me-area">
        <h1 className="text-3xl font-bold mb-6 text-white">À propos de moi</h1>
        <p className="text-1xl font-bold mb-2 text-white">
          Je suis Analyste Financier dans un bureau indépendant à New York, où je conseille mes clients sur leurs transactions financières les plus complexes, leurs décisions et leurs investissements. Mes clients vont des propriétaires de PME, aux cadres supérieurs, aux familles fortunées et même aux gagnants de la loterie. J'ai travaillé et consulté pour plusieurs entreprises du Fortune 500 et start-ups, notamment Broadridge Financial Solutions, NBCUniversal et ZoomInfo, où j'ai conseillé directement la direction sur leur stratégie financière et d'entreprise. Grâce à mon expérience, je peux vous conseiller dans les domaines suivants : Services de conseil en gestion de patrimoine - Planification financière.
        </p>
      </section>

      {/* Section Compétences */}
      <Competences />

      <p className="mb-6"></p>

      <div className="flex gap-6">
        {/* Carte Réponse Rapide */}
        <Card className="bg-gray-500 bg-opacity-50">
          <CardHeader className="border-none mb-0 p-6">
            <CardTitle className="text-white">Question rapide</CardTitle>
          </CardHeader>
          <CardContent>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 text-white">
                    Posez une question par écrit et choisissez le format de réponse souhaité.
                  </h5>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-9 items-center text-white">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 text-white">
                      Réponse par texte
                    </h5>
                  </div>
                  <div className="price-container">
                    <div className="price-text text-white">$10</div>
                  </div>
                </div>
                <p className="text-sm text-default-500 mt-1 mb-4 text-white">
                  Recevez une réponse écrite à votre question
                </p>
              </div>
            </TimelineContent>

            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-4 items-center text-white">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 text-white">
                      Réponse par vidéo
                    </h5>
                  </div>
                  <div className="price-container">
                    <div className="price-text text-white">$20</div>
                  </div>
                </div>
                <p className="text-sm text-default-500 mt-1 mb-4 text-white">
                  Recevez une réponse vidéo enregistrée à votre question
                </p>
              </div>
            </TimelineContent>
          </CardContent>
        </Card>

        {/* Carte Appel Vidéo */}
        <Card className="bg-gray-500 bg-opacity-50">
          <CardHeader className="border-none mb-0 p-6">
            <CardTitle className="text-white">Appel vidéo</CardTitle>
          </CardHeader>
          <CardContent>
            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 text-white">
                      Réservez un appel personnalisé pour obtenir des conseils sur mesure.
                    </h5>
                  </div>
                </div>
                <div className="rate-container text-white">
                  <div className="rate-text text-white">${tarifParMinute} par minute</div>
                </div>
                <div className="minimum-time text-white">
                  15 minutes minimum. Possibilité d'étendre le temps durant l'appel.
                </div>
              </div>
            </TimelineContent>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px; /* Ajustez la largeur maximale selon vos besoins */
        }
        .price-container, .rate-container {
          border: 1px solid #e2e8f0; /* Couleur de la bordure */
          padding: 4px 8px; /* Rembourrage */
          border-radius: 4px; /* Coins arrondis */
          display: inline-flex; /* Flex pour aligner les éléments */
          align-items: center; /* Centrer les éléments verticalement */
          margin-top: 16px; /* Marge en haut */
          gap: 8px; /* Espace entre l'icône et le texte */
        }
        .price-text, .rate-text {
          font-size: 0.75rem; /* Taille de la police pour le tarif */
          color: #4a5568; /* Couleur du texte */
        }
        .minimum-time {
          font-size: 0.875rem; /* Taille de la police pour le texte du temps minimum */
          color: #718096; /* Couleur du texte */
          margin-top: 8px; /* Marge en haut */
        }
        .tm-content {
          margin-bottom: 16px; /* Ajoutez une marge entre les éléments de la chronologie */
        }
        .instructor-details-wrap {
          display: flex; /* Assurez-vous que le contenu est disposé horizontalement */
        }
        .instructor-details-img {
          margin-right: 16px; /* Ajoutez un espace entre l'image et le contenu */
        }
        .btn-social-media {
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
};

export default Experdet;
