import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardTitle } from "../ui/card";
import Head from 'next/head'; // Import Head component from Next.js
import '@/public/css/main.css'; // Import global CSS
import { SiteLogo } from "@/components/svg";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/main.css" />
      </Head>
      <section className="py-25 2xl:py-[120px] bg-white-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="banner__content-two">
              <h3 className="title tg-svg text-white">
              Obtenez des conseils 
              {" "}
                <span className="position-relative">
                d'experts               
                 </span>{" "}
                instantanément
                              </h3>
              <div className="banner__search-form">
              Entrez en contact direct avec les personnes que vous admirez le plus pour obtenir les réponses dont vous avez besoin. Nous rendons les conseils de classe mondiale facilement accessibles à tous.                <div className="flex mt-3">
                  <Button asChild>
                    <Link
                      href="/auth/expertLP"
                      target="_blank"
                    >
Trouver un expert
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2"> {/* Ajout de l'espace entre les cartes */}
              {/* Première colonne de cartes */}
              <div className="flex flex-col items-center">
                <Card> {/* Nouvelle carte sans classe de taille spécifique */}
                  <img
                    src="/images/instructor/instructor04.png"
                    alt="Instructor"
                    className="img-uniform mb-4"
                  />
                </Card>
                <Card className="mt-2"> {/* Première carte existante sans classe de taille spécifique */}
                  <img
                    src="/images/instructor/instructor01.png"
                    alt="Instructor"
                    className="img-uniform mb-4"
                  />
                </Card>
              </div>

              {/* Deuxième carte existante */}
              <Card>
                <div className="banner__images-col" data-aos="fade-up" data-aos-delay={400}>
                  <img 
                    src="/images/instructor/instructor02.png" 
                    alt="img" 
                    className="img-uniform" 
                    style={{ width: 'auto', height: 'auto' }} 
                  />
                </div>
              </Card>

              {/* Troisième colonne de cartes */}
              <div className="flex flex-col items-center">
                <Card> {/* Nouvelle carte sans classe de taille spécifique */}
                  <img
                    src="/images/instructor/instructor05.png"
                    alt="Instructor"
                    className="img-uniform mb-4"
                  />
                </Card>
                <Card className="mt-2"> {/* Première carte existante sans classe de taille spécifique */}
                  <img
                    src="/images/instructor/instructor03.png"
                    alt="Instructor"
                    className="img-uniform mb-4"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-25 2xl:py-[170px] bg-black">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left side - Image and Book button */}
      
      <div className="contact-container py-4 px-6 bg-black">
      <div className="flex flex-col items-center justify-center space-y-4">
      <div className="instructor-details-img">
          <img src="/images/files/book.png" alt="Instructor" />
       
        </div>
       
      </div>
    </div>

      {/* Right side - Text content */}
      <div className="banner__content-two text-white">
        <h3 className="title tg-svg">
        Transformez n'importe quelle  
        {" "}
          <span className="position-relative">célébrité en votre mentor personnel</span> en quelques secondes
        </h3>
        <div className="banner__search-form">
          <ul className="custom-bullets">
            <li>Arrêtez de chercher des réponses sur Google.
            </li>
            <li>Arrêtez de voir vos messages privés ignorés.
            </li>
            <li>Obtenez des conseils personnalisés et un coaching individuel de la part des personnes que vous admirez le plus.
            </li>
            <li>Payer pour garantir un taux de réponse de 100 %.</li>
          </ul>
          <div className="flex mt-3">
            <Button asChild>
              <Link href="/auth/expertLP" target="_blank">
              Trouver un expert              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="py-25 2xl:py-[120px] bg-dark-900">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="banner__content-two">
        <h3 className="title tg-svg text-white">
        Obtenez   
        {" "}
        <span className="position-relative">
        des conseils{" "}
                </span>
                d'influenceurs instantanément
        </h3>
        <div className="flex mt-3">
          <div className="banner__search-form">
            <ul className="custom-bullets text-white">
              <li>Arrêtez de donner des conseils gratuits.</li>
              <li>Arrêtez de laisser vos messages privés ignorés.</li>
              <li>Partagez une tribune avec les dirigeants et entrepreneurs les plus admirés au monde sur Minnect.</li>
              <li>Monétisez votre temps en proposant des consultations individuelles à votre public</li>
            </ul>
          </div>
          <Button asChild>
            <Link
              href="/auth/infleunceLP"
              target="_blank"
            >
             Trouver un influenceur
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-end space-x-2"> {/* Ajout de l'espace entre les cartes */}
              {/* Première colonne de cartes */}
              <div className="flex flex-col items-center">
                <Card> {/* Nouvelle carte sans classe de taille spécifique */}
                  <img
                    src="/images/instructor/instructor04.png"
                    alt="Instructor"
                    className="img-uniform mb-4"
                  />
                </Card>
                <Card className="mt-2"> {/* Première carte existante sans classe de taille spécifique */}
                  <img
                    src="/images/instructor/instructor01.png"
                    alt="Instructor"
                    className="img-uniform mb-4"
                  />
                </Card>
              </div>

              {/* Deuxième carte existante */}
              <Card>
                <div className="banner__images-col" data-aos="fade-up" data-aos-delay={400}>
                  <img 
                    src="/images/instructor/instructor02.png" 
                    alt="img" 
                    className="img-uniform" 
                    style={{ width: 'auto', height: 'auto' }} 
                  />
                </div>
              </Card>

              {/* Troisième colonne de cartes */}
              <div className="flex flex-col items-center">
                <Card> {/* Nouvelle carte sans classe de taille spécifique */}
                  <img
                    src="/images/instructor/instructor05.png"
                    alt="Instructor"
                    className="img-uniform mb-4"
                  />
                </Card>
                <Card className="mt-2"> {/* Première carte existante sans classe de taille spécifique */}
                  <img
                    src="/images/instructor/instructor03.png"
                    alt="Instructor"
                    className="img-uniform mb-4"
                  />
                </Card>
              </div>
            </div>
          </div>
  </div>
</section>
<section className="py-25 2xl:py-[120px] bg-white-900">
  <div className="container">
    
    <h3 className="title tg-svg text-white mb-8">
    Obtenez les réponses d’une experte à l’aide de nos trois options d’engagement {" "}
      <span className="position-relative">simples :</span>
    </h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Section pour "Video Call" */}
      <div className="banner__content-two lg:col-span-1 lg:row-start-1">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Texte à gauche */}
          <h3 className="title tg-svg text-white mb-4 lg:mb-0 lg:order-1">
          Appel            <span className="position-relative"> vidéo  </span>
          </h3>

          {/* Image à droite */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1 relative group">
            <img
              src="/images/files/VID.png"
              alt="Video Call"
              className="img-uniform max-w-[300px] w-full h-auto object-cover mx-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white">Posez vos questions et obtenez des réponses personnalisées en réservant un appel vidéo avec l'un de nos experts. Rien de tel qu'une bonne discussion !</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section pour "Text Answer" */}
      <div className="banner__content-two lg:col-span-1 lg:row-start-2 lg:col-start-2">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image à gauche */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-2 mb-4 lg:mb-0 relative group">
            <img
              src="/images/files/text.png"
              alt="Text Answer"
              className="img-uniform max-w-[300px] w-full h-auto object-cover mx-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white">Envoyez votre question et obtenez une réponse écrite d’un expert, rapidement et à moindre coût.</p>
            </div>
          </div>

          {/* Texte à droite */}
          <div className="flex flex-col items-center lg:items-end order-2 lg:order-1">
            <h3 className="title tg-svg text-white mb-4">
            Réponse               <span className="position-relative">en texte</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Section pour "Video Answer" */}
      <div className="banner__content-two lg:col-span-2 lg:row-start-3">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Texte à gauche */}
          <div className="flex flex-col items-start lg:items-center mr-4 mb-4 lg:mb-0">
            <h3 className="title tg-svg text-white text-center">
            Réponse               <span className="position-relative"> en vidéo </span>
            </h3>
          </div>

          {/* Image à droite */}
          <div className="flex justify-center lg:justify-end relative group">
            <img
              src="/images/files/image.png"
              alt="Video Answer"
              className="img-uniform max-w-[300px] w-full h-auto object-cover mx-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white">Pour une réponse unique, envoyez votre question à un expert, qui vous répondra par un message vidéo personnalisé.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      <section className="py-25 2xl:py-[120px] bg-white-900">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Texte à gauche */}
      <div className="banner__content-two">
        <div className="flex justify-center space-x-2"> {/* Centrer les images horizontalement */}
          {/* Cartes pour les images côte à côte */}
          
          <Card className="relative rotate-on-click w-64 h-80 p-4 bg-gray-100 shadow-lg">
            <img
              src="/images/instructor/instructor01.png"
              alt="Instructor"
              className="img-uniform w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2 rounded-lg text-center text-white">
              Patrick Bet-David<br />
              CEO and Founder, Valuetainment
            </div>
          </Card>

          <Card className="relative rotate-on-click w-64 h-80 p-4 bg-gray-100 shadow-lg">
            <img
              src="/images/instructor/instructor02.png"
              alt="Instructor"
              className="img-uniform w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2 rounded-lg text-center text-white">
              Patrick Bet-David<br />
              CEO and Founder, Valuetainment
            </div>
          </Card>

          <Card className="relative rotate-on-click w-64 h-80 p-4 bg-gray-100 shadow-lg">
            <img
              src="/images/instructor/instructor05.png"
              alt="Instructor"
              className="img-uniform w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2 rounded-lg text-center text-white">
              Patrick Bet-David<br />
              CEO and Founder, Valuetainment
            </div>
          </Card>

          <Card className="relative rotate-on-click w-64 h-80 p-4 bg-gray-100 shadow-lg">
            <img
              src="/images/instructor/instructor03.png"
              alt="Instructor"
              className="img-uniform w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2 rounded-lg text-center text-white">
            Terrell Owens
            NFL Wide Receiver, Philanthropist<br />
            </div>
          </Card>

          <Card className="relative rotate-on-click w-64 h-80 p-4 bg-gray-100 shadow-lg">
            <img
              src="/images/instructor/instructor06.png"
              alt="Instructor"
              className="img-uniform w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2 rounded-lg text-center text-white">
              Patrick Bet-David<br />
              NFL Wide Receiver, Philanthropist
            </div>
          </Card>
          
        </div>
      </div>

      {/* Vidéo à droite */}
      <div className="image-right">
        {/* Votre contenu vidéo ici */}
      </div>
    </div>
  </div>
</section>





      {/* Style CSS interne pour cette section */}
      <style jsx>{`
        .text-left {
          color: #333; /* Couleur du texte, peut être ajustée */
        }
        .video-right video {
          width: 100%;
          height: auto;
          max-width: 600px; /* Ajuster la taille maximale de la vidéo */
        }
      `}</style>



      {/* Style pour les puces personnalisées */}
      <style jsx>{`
        .custom-bullets {
          list-style-type: none;
          padding: 0;
        }
        .custom-bullets li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
          color: white; /* Texte en blanc */
        }
        .custom-bullets li::before {
          content: '✔'; /* Utilisation d'un symbole de coche */
          position: absolute;
          left: 0;
          color: #2980b9; /* Couleur de la coche */
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default Contact;
