"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from "@iconify/react";
import ActivityTimeline from "./activity-timeline";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"
const Activity = () => {
  return (
    <Card className="mt-6">
      <CardHeader className="flex-row flex-wrap items-center gap-4 border-none mb-0">
        <CardTitle className="flex-1 text-2xl font-medium text-default-900 whitespace-nowrap">Update prices</CardTitle>
        
         
      </CardHeader>
      <CardContent>
        <ActivityTimeline />
        <div className="flex justify-center mt-9">
          
        </div>
      </CardContent>
    </Card>
  );
};

export default Activity;