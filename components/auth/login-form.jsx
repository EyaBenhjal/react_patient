import React from "react";
import Link from "next/link";
import { SiteLogo } from "@/components/svg";
import NavMenu from "@/components/landing-page/header/nav-menu";
import Contact from "@/components/landing-page/contact"; // Importation du composant Contact
import Stats from "@/components/landing-page/stats";
import AboutUs from "@/components/landing-page/about-us.jsx";

const SimpleNavba = () => {
  return (
    <>
      <div className="fixed top-0 left-4 w-full py-4 flex justify-between items-center bg-black z-90 text-gray-100">
        <div className="flex items-center">
          <Link href="/" className="inline-block">
            <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
          </Link>
          <span className="ml-4 text-gray-100 text-lg font-semibold">
          Deep Infleunce
          </span>
        </div>
        <div>        <NavMenu />
        </div>
        <hr />
      </div>
      {/* Contenu du Banner2 */}

            {/* Texte et Contact à gauche */}


            {/* Images à droite */}
           
                {/* Ajoutez d'autres images ici si nécessaire */}
            

=    </>
  );
};

export default SimpleNavba;
