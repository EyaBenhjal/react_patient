"use client"
import Image from "next/image";
import Link from "next/link";
import { SiteLogo } from "@/components/svg";
import { Button } from "@/components/ui/button";
import footerImage from "@/public/images/landing-page/footer.png"
import facebook from "@/public/images/social/facebook-1.png"
import dribble from "@/public/images/social/dribble-1.png"
import linkedin from "@/public/images/social/linkedin-1.png"
import github from "@/public/images/social/github-1.png"
import behance from "@/public/images/social/behance-1.png"
import twitter from "@/public/images/social/twitter-1.png"
import youtube from "@/public/images/social/youtube.png"

const Footer = () => {
  const socials = [
    {
      icon: facebook,
      href: "https://www.facebook.com/Codeshaperbd/"
    },
    {
      icon: github,
      href: "https://github.com/Codeshaper-bd"
    },
    {
      icon: linkedin,
      href: "https://www.linkedin.com/company/codeshaper/"
    },
    {
      icon: youtube,
      href: "https://www.youtube.com/@codeshaper4181"
    },
    {
      icon: twitter,
      href: "https://twitter.com/codeshaperbd"
    },
    {
      icon: dribble,
      href: "https://dribbble.com/codeshaperbd"
    },
    {
      icon: behance,
      href: "https://www.behance.net/codeshaper"
    }
  ]
  return (
    <footer
      className=" bg-cover bg-center bg-no-repeat relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-default-900/90 dark:before:bg-default-100"
      style={{
        background: `url(${footerImage.src})`
      }}
    >
      <div className="py-16 2xl:py-[120px]">
        <div className="max-w-[700px] mx-auto flex flex-col items-center relative">
          <Link
            href="/"
            className="inline-flex items-center gap-4 text-primary-foreground"
          >
            <SiteLogo className="w-[50px] h-[52px]" />
            <span className="text-3xl font-semibold">Deep Infleunces
            </span>
          </Link>
          <p className="text-base leading-7 text-default-200 dark:text-default-600 text-center mt-3">
          Rejoignez notre réseau d'experts et d'influences pour obtenir des conseils personnalisés et des insights exclusifs. Que vous soyez à la recherche de développement professionnel, de stratégies de marque ou d'inspiration créative, nos experts sont là pour vous guider. Connectez-vous avec les personnes qui 
          façonnent votre secteur et faites progresser votre carrière dès aujourd'hui</p>
          <div className="mt-9 flex justify-center flex-wrap gap-4">
           
            
          </div>
          <div className="mt-8 flex items-center justify-center flex-wrap gap-5">
            {
              socials.map((item, index) => (
                <Link
                  href={item.href}
                  key={`social-link-${index}`}
                  target="_blank"
                >
                  <Image src={item.icon} alt="social" width={30} height={30} />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <div className="relative bg-default-900 dark:bg-default-50 py-6">
        <div className="container flex flex-col text-center md:text-start md:flex-row gap-2">
          <p className="text-primary-foreground flex-1 text-base xl:text-lg font-medium">COPYRIGHT &copy; 2024 Deep infleunces All rights Reserved</p>
          <p className="text-primary-foreground flex-none text-base font-medium">
              {" "}
            <Link href="https://codeshaper.net" target="__blank" className="text-primary hover:underline"> </Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;