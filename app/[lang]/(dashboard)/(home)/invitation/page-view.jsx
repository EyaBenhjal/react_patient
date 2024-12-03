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
      title: "Invitation from Timec"
    }
  ]);

  const [acceptedInvitations, setAcceptedInvitations] = useState([]);
  const [refusedInvitations, setRefusedInvitations] = useState([]);

  const handleAccept = (invitation) => {
    setAcceptedInvitations([...acceptedInvitations, invitation]);
    setPendingInvitations(pendingInvitations.filter((inv) => inv.id !== invitation.id));
  };

  const handleRefuse = (invitation) => {
    setRefusedInvitations([...refusedInvitations, invitation]);
    setPendingInvitations(pendingInvitations.filter((inv) => inv.id !== invitation.id));
  };

  const handleDelete = (invitation) => {
    setRefusedInvitations([...refusedInvitations, invitation]);
    setPendingInvitations(pendingInvitations.filter((inv) => inv.id !== invitation.id));
  };

  const InvitationCard = ({ invitation, onAccept, onRefuse, onDelete }) => (
    <Card className="flex-1 mt-8">
      <CardHeader className="border-none mb-0 p-6 bg-blue-500">
        <CardTitle className="text-white">{invitation.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <TimelineContent>
          <div className="tm-content">
            <div className="flex flex-col items-center mt-4 space-y-2">
              <div className="bg-blue-500 text-white py-2 px-4 rounded">
                Date: {invitation.date}, Heure: {invitation.time}, Durée: {invitation.duration}
              </div>
              <div className="text-blue-500">{invitation.email}</div>
            </div>
            <div className="flex gap-4 mt-4">
              {onAccept && <Button className="bg-green-500 text-white" onClick={() => onAccept(invitation)}>Accepter</Button>}
              {onRefuse && <Button className="text-red-500 border border-red-500" onClick={() => onRefuse(invitation)}>Refuser</Button>}
              {onDelete && <Button className="bg-red-500 text-white" onClick={() => onDelete(invitation)}>Supprimer</Button>}
            </div>
          </div>
        </TimelineContent>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-4">
      {/* Pending Invitations Section */}
      <section className="instructor-details-area flex justify-center">
        <h1 className="name text-2xl font-bold text-center">Invitation en Attente</h1>
      </section>
      {pendingInvitations.map((invitation) => (
        <InvitationCard
          key={invitation.id}
          invitation={invitation}
          onAccept={handleAccept}
          onRefuse={handleRefuse}
          onDelete={handleDelete}
        />
      ))}

      {/* Accepted Invitations Section */}
      <hr className="my-8 border-t border-gray-300 w-full" />
      <section className="instructor-details-area flex justify-center">
        <h1 className="name text-2xl font-bold text-center">Invitation Acceptée</h1>
      </section>
      {acceptedInvitations.map((invitation) => (
        <InvitationCard
          key={invitation.id}
          invitation={invitation}
          onRefuse={handleRefuse}
          onDelete={handleDelete}
        />
      ))}

      {/* Refused Invitations Section */}
      <hr className="my-8 border-t border-gray-300 w-full" />
      <section className="instructor-details-area flex justify-center">
        <h1 className="name text-2xl font-bold text-center">Invitation Refusée</h1>
      </section>
      {refusedInvitations.map((invitation) => (
        <InvitationCard
          key={invitation.id}
          invitation={invitation}
          onAccept={handleAccept}
        />
      ))}
    </div>
  );
};

export default ProjectPageView;
