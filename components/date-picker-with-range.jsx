"use client";

import * as React from "react";
import {  format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTheme } from "next-themes";
export default function DatePickerWithRange({ className }) {
  const [date, setDate] = React.useState(null);
  const { theme: mode } = useTheme();

  return (
          
           
              <h1>Browse Featured Psychologues

              </h1>
            
          
        
  );
}
