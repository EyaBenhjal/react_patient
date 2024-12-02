"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Timeline, TimelineItem, TimelineContent, TimelineConnector } from "@/components/ui/timeline";

const ActivityTimeline = () => {
  const [textMessagePrice, setTextMessagePrice] = useState("");
  const [videoMessagePrice, setVideoMessagePrice] = useState("");
  const [meetingPrice, setMeetingPrice] = useState("");
  
  const [selectedCoins, setSelectedCoins] = useState(1); // Ajouter un état pour les pièces sélectionnées

  const handleUpdatePrice = () => {
    // Implémentez la logique pour mettre à jour les prix ici
    console.log("Prix du message texte :", textMessagePrice);
    console.log("Prix du message vidéo :", videoMessagePrice);
    console.log("Prix de la réunion :", meetingPrice);
  };

  // Calculer les millimes nécessaires
  const millimesNecessaires = selectedCoins * 500;

  return (
    <div>
      <div className="mb-4">
        Vous avez actuellement 0 pièces
      </div>
      <hr />
      1 pièce = 500 millimes Tunisiens
      <hr />
      <label htmlFor="coinSelect">Sélectionnez les pièces à acheter :</label>
      <input
        type="number"
        id="coinSelect"
        value={selectedCoins}
        onChange={(e) => setSelectedCoins(e.target.value)}
        min="1"
        className="ml-2 p-1 border rounded"
      />
      <div className="mt-2">
        Millimes nécessaires : {millimesNecessaires} millimes
      </div>
      <hr />

      <Button onClick={handleUpdatePrice} className="mt-4 bg-violet-500 text-white">
        Ajouter des comptes bancaires
      </Button>
      <hr />
      <Button onClick={handleUpdatePrice} className="mt-4 bg-violet-500 text-white">
        Acheter des pièces
      </Button>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineContent>
            <div className="tm-content">
              <div className="md:flex gap-4">
                {/* Ajoutez votre contenu ici */}
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                {/* Contenu supplémentaire */}
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ActivityTimeline;
