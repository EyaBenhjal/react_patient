"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import UsersDataChart from "./users-data-chart";
import UsersDataTable from "./users-data-table";

const UsersStat = () => {
  const users = [
    {
      id: 1,
      country: "Bangladesh",
      count: "05",
    },
    {
      id: 2,
      country: "India",
      count: "06",
    },
    {
      id: 3,
      country: "Pakistan",
      count: "06",
    },
    {
      id: 4,
      country: "Australia",
      count: "10",
    },
    {
      id: 5,
      country: "America",
      count: "08",
    },
  ];
  return (
    <Card>
      
      
    </Card>
  );
};

export default UsersStat;