"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { UploadCloud, Search, LayoutGrid, List } from "lucide-react";
import React from "react";
import SingleFileCard from "./single-file-card";
import ListFileCard from "./list-file-card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch"; // Assurez-vous d'importer le composant Switch

const ViewFiles = () => {
  const [fileView, setFileView] = React.useState("grid");

  const files = [
    // Vos fichiers ici
  ];

  return (
    <Card className="mt-6">
      <CardHeader className="mb-0 border-none p-6">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex-1">
            <div className="text-lg font-medium text-default-900 whitespace-nowrap">
              Vérifications
            </div>
          </div>
           <div className="flex flex-wrap items-center gap-4">
            <Button
              size="icon"
              variant="outline"
              className={cn("hover:bg-transparent", {
                "hover:border-primary hover:text-primary": fileView === "grid",
                "hover:border-muted-foreground hover:text-muted-foreground":
                  fileView !== "grid",
              })}
              color={fileView === "grid" ? "primary" : "secondary"}
              onClick={() => setFileView("grid")}
            >
              <LayoutGrid className="h-5 w-5" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className={cn("hover:bg-transparent", {
                "hover:border-primary hover:text-primary": fileView === "list",
                "hover:border-muted-foreground hover:text-muted-foreground":
                  fileView !== "list",
              })}
              color={fileView === "list" ? "primary" : "secondary"}
              onClick={() => setFileView("list")}
            >
              <List className="h-5 w-5" />
            </Button>

            <div className="relative">
              <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2 text-default-400" />
              <Input placeholder="Rechercher un fichier" className="ltr:pl-7 rtl:pr-8" />
            </div>
            <Select>
              <SelectTrigger className="w-[124px]">
                <SelectValue placeholder="Image" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="file">Fichier</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="video">Vidéo</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="fileUpload">
              <Button asChild>
                <span className="cursor-pointer flex items-center gap-1">
                  <UploadCloud className="h-4 w-4" />
                  Télécharger un fichier
                </span>
              </Button>
              <Input type="file" className="hidden" id="fileUpload" />
            </Label>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <RadioGroup>
            <RadioGroupItem value="cin" id="cin">
              Carte CIN
            </RadioGroupItem>
            <RadioGroupItem value="passport" id="passport">
              Passeport
            </RadioGroupItem>
            <RadioGroupItem value="rne" id="rne">
              RNE
            </RadioGroupItem>
          </RadioGroup>
          <div className="flex items-center gap-2">
            <label htmlFor="uploadImage" className="text-default-900">
              Télécharger une image :
              <Switch />
            </label>
          </div>
          <Input placeholder="Entrez le numéro CIN" />
          <Button>Valider</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewFiles;
