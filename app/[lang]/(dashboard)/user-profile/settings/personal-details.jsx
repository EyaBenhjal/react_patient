"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const PersonalDetails = () => {
  const [date, setDate] = useState();

  return (
    <Card className="rounded-t-none pt-6">
      <CardContent>
        <div className="grid grid-cols-12 md:gap-x-12 gap-y-5">
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="firstName" className="mb-2">Prénom</Label>
            <Input id="firstName" />
          </div>             
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="lastName" className="mb-2">Nom</Label>
            <Input id="lastName" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="bio" className="mb-2">Bio</Label>
            <Input id="bio" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="phoneNumber" className="mb-2">Numéro de téléphone</Label>
            <Input id="phoneNumber" type="number" />
          </div>

          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="email" className="mb-2">Adresse e-mail</Label>
            <Input id="email" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="categories" className="mb-2">Catégories</Label>
            <Input id="categories" />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button color="secondary">Annuler</Button>
          <Button>Enregistrer</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalDetails;
