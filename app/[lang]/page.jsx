"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LogInForm from "@/components/auth/login-form";
import Contact from "@/components/landing-page/contact.jsx";
import Footer from "@/components/landing-page/footer.jsx";
import AboutUs from "@/components/landing-page/about-us.jsx";

const LoginPage = () => {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <>      <div className="basis-1 bg-black w-full relative hidden xl:flex justify items">
          <div className="lg:w-[-690px]">
            <LogInForm />
          </div>
          <div className="lg:w-[-690px]">

          <Contact/>
          </div>
          
        </div>
    

        <div className="lg:w-[-690px]">

        <Footer/>
        </div>

      <Dialog open={openVideo}>
        <DialogContent size="lg" className="p-0" hideCloseIcon>
          <Button
            size="icon"
            onClick={() => setOpenVideo(false)}
            className="absolute -top-4 -right-4 bg-default-900"
          >
            <X className="w-6 h-6" />
          </Button>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8D6b3McyhhU?si=zGOlY311c21dR70j"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginPage;
