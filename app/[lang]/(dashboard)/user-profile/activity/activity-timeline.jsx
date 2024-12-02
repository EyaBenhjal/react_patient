"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Timeline, TimelineItem, TimelineContent, TimelineConnector } from "@/components/ui/timeline";

const ActivityTimeline = () => {
  const [textMessagePrice, setTextMessagePrice] = useState("");
  const [videoMessagePrice, setVideoMessagePrice] = useState("");
  const [meetingPrice, setMeetingPrice] = useState("");

  const handleUpdatePrice = () => {
    // Implémentez la logique pour mettre à jour les prix ici
    console.log("Prix du message texte :", textMessagePrice);
    console.log("Prix du message vidéo :", videoMessagePrice);
    console.log("Prix de la réunion :", meetingPrice);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Prix du message texte
        </label>
        <input
          type="text"
          value={textMessagePrice}
          onChange={(e) => setTextMessagePrice(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Prix du message vidéo
        </label>
        <input
          type="text"
          value={videoMessagePrice}
          onChange={(e) => setVideoMessagePrice(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Prix de la réunion
        </label>
        <input
          type="text"
          value={meetingPrice}
          onChange={(e) => setMeetingPrice(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <Button onClick={handleUpdatePrice} className="mt-4 bg-violet-500 text-white">
        Mettre à jour les prix
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
