"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CalendarView = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Instructor Details Section */}
     

      <p className="mb-6"></p>

      <div className="flex gap-6">
        {/* Message and Video Call Options Card */}
        <Card className="flex-1">
          <CardHeader className="border-none mb-0 p-6">
            <CardTitle>Available Services</CardTitle>
          </CardHeader>
          <CardContent>
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
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
        .icon-image {
          width: 32px;
          height: 32px;
        }
        .option-card {
          display: flex;
          align-items: center;
          gap: 16px;
        }
      `}</style>
    </div>
  );
};

export default CalendarView;
