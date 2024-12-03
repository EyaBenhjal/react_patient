"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Headerexpert from "@/components/auth/Header-expert";
import Footer from "@/components/landing-page/footer.jsx";
import Listexpert from "@/components/landing-page/listexpert.jsx";

const LoginPage = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      {/* Container for the login form and Psychologues list */}
      <div className="flex flex-col xl:flex-row w-full">
        {/* Login Form Section */}
        <div className="flex-1 bg-black p-6 flex justify-center items-center">
        <Headerexpert/>

        {/* List of Psychologues Section */}
        <div className="flex-8 p-11 bg-black">
          <h1 className="text-xl font-bold mb-4">Browse Featured Psychologues</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Listexpert />
          </div>
        </div>
      </div>
      </div>


      {/* Footer Section */}
      <div className="w-full p-6 bg-gray-100">
        <Footer />
      </div>

      {/* Video Dialog */}
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
