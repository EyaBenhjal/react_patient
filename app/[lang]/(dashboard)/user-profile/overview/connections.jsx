
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

import avatar1 from "@/public/images/avatar/avatar-2.jpg"
import avatar2 from "@/public/images/avatar/avatar-3.jpg"
import avatar3 from "@/public/images/avatar/avatar-4.jpg"
import avatar4 from "@/public/images/avatar/avatar-5.jpg"
import avatar5 from "@/public/images/avatar/avatar-6.jpg"
import avatar6 from "@/public/images/avatar/user-2.png"
import Image from "next/image";
import { UserPlus } from "@/components/svg";
import Link from "next/link";
const Connections = () => {
  const data = [
    {
      name: "Alex Smith",
      avatar: avatar1,
      count: 25
    },
    {
      name: "Darrel Barnes",
      avatar: avatar2,
      count: 26
    },
    {
      name: "Eugenia Moore",
      avatar: avatar3,
      count: 27
    },
    {
      name: "Alice Stone",
      avatar: avatar4,
      count: 28
    },
    {
      name: "Monica Bellas",
      avatar: avatar5,
      count: 29
    },
    {
      name: "Prantik Chakraborty",
      avatar: avatar6,
      count: 30
    }
  ]
  return (
    <Card>
        <CardTitle className="flex-1">  </CardTitle>
        
    </Card>
  );
};

export default Connections;