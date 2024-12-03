"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import aveya from "@/public/images/avatar/WhatsApp Image 2024-03-22 at 16.06.08.jpeg"
import { Icon } from "@iconify/react";
import Image from "next/image";
const UserMeta = () => {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-[124px] h-[124px] relative rounded-full">
          <Image src={aveya} alt="avatar" className="w-full h-full object-cover rounded-full" />
          <Button asChild
            size="icon"
            className="h-8 w-8 rounded-full cursor-pointer absolute bottom-0 right-0"
          >
            <Label
              htmlFor="avatar"
            >
              <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
            </Label>
          </Button>
          <Input type="file" className="hidden" id="avatar" />
        </div>
        <div className="mt-4 text-xl font-semibold text-default-900">Farah Rayhan</div>
      </CardContent>
    </Card>
  );
};

export default UserMeta;