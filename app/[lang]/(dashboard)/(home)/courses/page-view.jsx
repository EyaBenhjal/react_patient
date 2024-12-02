"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react"; // Import Minus et Plus
import { Button } from "@/components/ui/button"; // Import du Button
import { TimelineContent } from "@/components/ui/timeline";
import Link from "next/link";

const handleDateClick = (date, setAvailability) => {
  // Heures fixes à afficher lorsque l'utilisateur clique sur une date
  const fixedTimes = [
    { from: "09:00", to: "10:00" },
    { from: "11:00", to: "12:00" },
    { from: "14:00", to: "15:00" },
    { from: "16:00", to: "17:00" },
  ];
  setAvailability(fixedTimes);
};

const CalendarView = ({ events, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedEventDate, setSelectedEventDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [draggableInitialized, setDraggableInitialized] = useState(false);
  const [date, setDate] = useState(null); // State for selected date
  const [meetingDuration, setMeetingDuration] = useState(30); // State for meeting duration
  const [availability, setAvailability] = useState([]); // State for availability

  return (
    <div className="container mx-auto p-4">
      {/* Instructor Details Section */}
      <section className="instructor-details-area flex justify-between">
        <div className="instructor-details-wrap flex">
          <div className="instructor-details-img">
            <img src="/images/instructor/instructor01.png" alt="Instructor" />
          </div>
          <div className="instructor-details-content ml-4">
            <h1 className="name text-2xl font-bold">Sophie</h1>
            <span className="role text-lg">Psychologue
            </span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      <p className="mb-6"></p>

      <div className="flex gap-6">
        {/* Text Answer Card */}
        <Card className="flex-1">
          <CardHeader className="border-none mb-0 p-6">
            <CardTitle>Meeting Details</CardTitle>
          </CardHeader>
          <CardContent>
            <TimelineContent>
              <div className="md:flex gap-4 items-center">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600">
                    Meeting Duration
                  </h5>
                  <div className="price-container">
                    <input
                      type="number"
                      min="10" // Set minimum value to 10
                      max="120"
                      value={meetingDuration}
                      onChange={(e) => {
                        setMeetingDuration(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* Add message and video call icons */}
                
                
              </div>
            </TimelineContent>
            <TimelineContent>
              <div className="tm-content">
                <p className="text-sm text-default-500 mt-1 mb-4">Select a date to see available times.</p>
              </div>
              <div className="options-container flex flex-col gap-4 mt-4">
  {/* Message Option */}
  <div className="option-card flex items-center gap-2 border rounded-lg p-4">
    <img
      src="/images/message-icon.png"
      alt="Message Icon"
      className="icon-image"
    />
    <div>
      <h5 className="text-base font-medium">Message</h5>
      <p className="text-sm text-gray-500">$20 / text</p>
    </div>
  </div>
  
  {/* Call Option */}
  <div className="option-card flex items-center gap-2 border rounded-lg p-4">
    <img
      src="/images/video-call-icon.png"
      alt="Video Call Icon"
      className="icon-image"
    />
    <div>
      <h5 className="text-base font-medium">Book a Call</h5>
      <p className="text-sm text-gray-500">$20,000 / 15 min</p>
    </div>
  </div>

              {/* Call Option */}
            
            </div>
            </TimelineContent>
          </CardContent>
        </Card>

        {/* Calendar and Availability Card */}
        <Card className="flex-1">
          <CardHeader className="border-none mb-0 p-6">
            <CardTitle>Meeting Parameters</CardTitle>
          </CardHeader>
          <div className="px-3">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(s) => {
                setDate(s);
                handleDateClick(s, setAvailability);
              }}
              className="rounded-md border w-full p-0 border-none"
            />
          </div>
          <CardContent>
            <TimelineContent>
              <div className="tm-content">
                <div className="grow mt-4">
                  <h5 className="font-medium text-sm text-default-600">
                    Availability
                  </h5>
                  {availability.map((time, index) => (
                    <div key={index} className="availability-container flex justify-between items-center">
                      <input
                        type="time"
                        value={time.from}
                        readOnly
                      />
                      <span>to</span>
                      <input
                        type="time"
                        value={time.to}
                        readOnly
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TimelineContent>
          </CardContent>
          <div className="button-social-container flex items-center space-x-2 mt-4">
            <Link
              href="/courses"
              className="btn bg-red-500 text-white px-4 py-2 rounded"
            >
              <span className="text">Validate the meeting</span>
            </Link>
          </div>
        </Card>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px; /* Adjust the max width as needed */
        }
        .price-container,
        .rate-container {
          border: 1px solid #e2e8f0; /* Border color */
          padding: 4px 8px; /* Padding */
          border-radius: 4px; /* Rounded corners */
          display: inline-flex; /* Flex to align items */
          align-items: center; /* Center items vertically */
          margin-top: 16px; /* Margin on top */
          gap: 8px; /* Gap between icon and text */
        }
        .icon-image {
          width: 32px; /* Icon size */
          height: 32px;
        }

        /* Additional styles ... */
      `}</style>
    </div>
  );
};

export default CalendarView;

const Skills = () => {
  return (
    <div className="space-y-6">
      {/* Add your Skills content here */}
    </div>
  );
};
