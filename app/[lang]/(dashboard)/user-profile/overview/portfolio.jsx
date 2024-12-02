import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Instagram from "@/public/images/social/instagram.png";
import LinkedIn from "@/public/images/social/linkedin-1.png";
import TikTok from "@/public/images/social/tiktok.png";
import Twitter from "@/public/images/social/twitter.png";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const data = [
    {
      name: "Instagram",
      image: Instagram,
      link: "#",
    },
    {
      name: "Twitter",
      image: Twitter,
      link: "#",
    },
    {
      name: "LinkedIn",
      image: LinkedIn,
      link: "#",
    },
    {
      name: "TikTok",
      image: TikTok,
      link: "#",
    },
    
  ]
  return (
    <Card>
      <CardHeader className="flex-row items-center border-none mb-2">
        <CardTitle className="flex-1"> Vérifier mes comptes de réseaux sociaux</CardTitle>
        <Button
          size="icon"
          className="flex-none bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6 -mt-1"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 items-center">
          {
            data.map((item, index) => (
              <Link key={`portfolio-${index}`} href={item.link}>
                <Image src={item.image} alt={item.name} className="h-9 w-9 rounded-full" />
              </Link>
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
