"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TimelineContent } from "@/components/ui/timeline";

const ProjectPageView = () => {
  const [pendingInvitations, setPendingInvitations] = useState([
    {
      id: 1,
      date: "2024-08-05",
      time: "14:00",
      duration: "30 minutes",
      email: "farahr2001@gmail.com",
      title: "Meeting Request: Consultation with Psychologist",
      status: "Pending Approval"

    },
    {
      id: 2,
      date: "2024-08-06",
      time: "15:00",
      duration: "45 minutes",
      email: "farahr2001@gmail.com",
      title: "Meeting Request: Consultation with Psychologist",
      status: "accepté"
    },
    {
      id: 3,
      date: "2024-08-07",
      time: "16:00",
      duration: "60 minutes",
      email: "example3@gmail.com",
      title: "Meeting Request: Consultation with Psychologist",
      status: "en attente"
    }
  ]);

  const handleAccept = (invitation) => {
    setPendingInvitations(pendingInvitations.map((inv) =>
      inv.id === invitation.id ? { ...inv, status: "accepté" } : inv
    ));
  };

  const handleRefuse = (invitation) => {
    setPendingInvitations(pendingInvitations.filter((inv) => inv.id !== invitation.id));
  };

  const handleDelete = (invitation) => {
    setPendingInvitations(pendingInvitations.filter((inv) => inv.id !== invitation.id));
  };

  const InvitationCard = ({ invitation, onAccept, onRefuse, onDelete }) => (
    <Card className="flex-1 mt-4 mx-2" style={{ width: '500px', height: '340px' }}>
      <CardHeader className="border-none mb-0 p-4 bg-blue-500">
        <CardTitle className="text-white">{invitation.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <TimelineContent>
          <div className="tm-content">
            <div className="flex flex-col items-center mt-4 space-y-2">
              <Button className="bg-blue-500 text-white py-2 px-4 rounded">
                {invitation.date}, {invitation.time}, {invitation.duration}
              </Button>
              <div>{invitation.email}</div>
              <div className="flex items-center space-x-2">
                <span className="font-bold">État :</span>
                <span className={`py-1 px-2 rounded ${invitation.status === "en attente" ? "bg-orange-500 text-white" : "bg-green-500 text-white"}`}>
                  {invitation.status}
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <Button className="bg-red-500 text-white" onClick={() => onDelete(invitation)}>Supprimer</Button>
            </div>
          </div>
        </TimelineContent>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-4">
      <section className="instructor-details-area flex justify-center">
        <h1 className="name text-2xl font-bold text-center">My Requests</h1>
      </section>
      <div className="flex flex-wrap gap-4 justify-center">
        {pendingInvitations.map((invitation) => (
          <InvitationCard
            key={invitation.id}
            invitation={invitation}
            onAccept={handleAccept}
            onRefuse={handleRefuse}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPageView;
