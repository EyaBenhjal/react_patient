"use client";

import { useState } from 'react';
import Switch from 'react-switch';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Plus } from 'react-feather';
import { Button } from "@/components/ui/button";
import { Minus } from 'lucide-react';

const ProjectPageView = () => {
  // Les jours de la semaine
  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  // State pour les jours et leurs horaires
  const [days, setDays] = useState([
    { day: 'Sunday', times: [{ from: '08:00', to: '18:00' }] },
    { day: 'Monday', times: [{ from: '08:00', to: '18:00' }] },
    { day: 'Tuesday', times: [{ from: '08:00', to: '18:00' }] },
    { day: 'Wednesday', times: [{ from: '08:00', to: '18:00' }] },
    { day: 'Thursday', times: [{ from: '08:00', to: '18:00' }] },
    { day: 'Friday', times: [{ from: '08:00', to: '18:00' }] },
    { day: 'Saturday', times: [{ from: '08:00', to: '18:00' }] }
  ]);

  // State pour les switches des jours de la semaine
  const [switches, setSwitches] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });

  // Fonction pour gérer les changements de switch
  const handleSwitchChange = (day) => {
    setSwitches((prevSwitches) => ({
      ...prevSwitches,
      [day]: !prevSwitches[day],
    }));
  };

  // Fonction pour gérer les changements d'heure
  const handleTimeChange = (day, timeIndex, type, value) => {
    setDays((prevDays) =>
      prevDays.map((dayInfo) =>
        dayInfo.day === day
          ? {
              ...dayInfo,
              times: dayInfo.times.map((time, index) =>
                index === timeIndex ? { ...time, [type]: value } : time
              ),
            }
          : dayInfo
      )
    );
  };

  // Fonction pour ajouter une nouvelle période de temps
  const handleAddTime = (day) => {
    setDays((prevDays) =>
      prevDays.map((dayInfo) =>
        dayInfo.day === day
          ? {
              ...dayInfo,
              times: [...dayInfo.times, { from: '08:00', to: '18:00' }],
            }
          : dayInfo
      )
    );
  };

  // Fonction pour supprimer une période de temps
  const handleRemoveTime = (day, timeIndex) => {
    setDays((prevDays) =>
      prevDays.map((dayInfo) =>
        dayInfo.day === day
          ? {
              ...dayInfo,
              times: dayInfo.times.filter((_, index) => index !== timeIndex),
            }
          : dayInfo
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      {/* Section Détails de l'Instructeur */}
      <section className="instructor-details-area flex justify-between">
        <div className="instructor-details-wrap flex">
          <div className="instructor-details-content ml-4">
            <h1 className="name text-2xl font-bold">Horaires de travail</h1>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <div className="space-y-12"></div>

      <p className="mb-6"></p>

      <div className="flex gap-6">
        {/* Carte de Réponse Textuelle */}
        <Card className="flex-1">
          <CardHeader className="border-none mb-0 p-6"></CardHeader>
          <CardContent>
            <CardTitle className="flex justify-between">
              <div className="flex-1 text-left">
                <Badge className="text-xs font-medium text-default-500 bg-default-100 dark:bg-default-50">
                  Day  
                </Badge>
              </div>
              <div className="flex-1 text-center">
                <Badge className="text-xs font-medium text-default-500 bg-default-100 dark:bg-default-50">
                  From
                </Badge>
              </div>
              <div className="flex-1 text-right">
                <Badge className="text-xs font-medium text-default-500 bg-default-100 dark:bg-default-50">
                  To
                </Badge>
              </div>
            </CardTitle>
            <CardContent>
              {days.map((dayInfo) => (
                <div key={dayInfo.day}>
                  {dayInfo.times.map((time, index) => (
                    <div key={index} className="mt-2 flex justify-between items-center">
                      <div className="flex-1">
                        <Switch
                          checked={switches[dayInfo.day]}
                          onChange={() => handleSwitchChange(dayInfo.day)}
                        />
                        <span className="ml-2">{dayInfo.day}</span>
                      </div>
                      <div className="flex-1 text-center">
                        <input
                          type="time"
                          value={time.from}
                          onChange={(e) =>
                            handleTimeChange(dayInfo.day, index, 'from', e.target.value)
                          }
                        />
                      </div>
                      <div className="flex-1 text-right">
                        <input
                          type="time"
                          value={time.to}
                          onChange={(e) =>
                            handleTimeChange(dayInfo.day, index, 'to', e.target.value)
                          }
                        />
                      </div>
                      <Button
                        size="icon"
                        className="ml-4 bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6"
                        onClick={() => handleAddTime(dayInfo.day)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      {dayInfo.times.length > 1 && (
                        <Button
                          size="icon"
                          className="ml-4 bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6"
                          onClick={() => handleRemoveTime(dayInfo.day, index)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </CardContent>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 flex justify-start">
        <Link href="/courses" className="btn bg-red-500 text-white px-4 py-2 rounded">
          <span className="text">Mettre à jour les informations de la réunion</span>
        </Link>
      </div>

      <style jsx>{`
        .red-button {
          background-color: red;
          color: white;
          border: 2px solid red;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }
        .red-button:hover {
          background-color: darkred;
          border-color: darkred;
        }
        .tg-button-wrap .btn .svg-icon {
          margin-left: 0.5rem;
        }
        .about-me-area {
          margin: 2rem 0;
        }
        .profile-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
        }
        .social-icons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 1rem;
        }
        .button-social-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1rem;
        }
        .tg-button-wrap {
          margin-bottom: 1rem;
        }
        .btn {
          background-color: #f56565;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
        }
      `}</style>
    </div>
  );
};

export default ProjectPageView;
