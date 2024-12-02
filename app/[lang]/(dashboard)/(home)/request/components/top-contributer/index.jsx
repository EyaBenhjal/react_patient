import {
  TimelineContent,
} from "@/components/ui/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RatesAndVideoCall = () => {
  const ratePerMinute = 5; // Rate in dollars per minute
  const minimumTime = 15; // Minimum time in minutes

  return (
    <div className="container mx-auto p-4">
      
      <div className="flex gap-6">
        {/* Text Answer Card */}
        

        {/* Video Call Card */}
        <Card className="flex-1">
          <CardHeader className="border-none mb-0 p-6">
            <CardTitle>Video Call</CardTitle>
          </CardHeader>
          <CardContent>
            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600">
                      Book a time for us to have a one-on-one call for the most personalized advice.
                    </h5>
                  </div>
                </div>
                <div className="rate-container">
                  <div className="rate-text">
                    ${ratePerMinute} per minute
                  </div>
                </div>
                <div className="minimum-time">
                  15 minute minimum. Extend time available in call.
                </div>
              </div>
            </TimelineContent>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px; /* Adjust the max width as needed */
        }
        .price-container, .rate-container {
          border: 1px solid #e2e8f0; /* Border color */
          padding: 4px 8px; /* Padding */
          border-radius: 4px; /* Rounded corners */
          display: inline-flex; /* Flex to align items */
          align-items: center; /* Center items vertically */
          margin-top: 16px; /* Margin on top */
          gap: 8px; /* Gap between icon and text */
        }
        .price-text, .rate-text {
          font-size: 0.75rem; /* Font size for rate */
          color: #4a5568; /* Text color */
        }
        .minimum-time {
          font-size: 0.875rem; /* Font size for minimum time text */
          color: #718096; /* Text color */
          margin-top: 8px; /* Margin on top */
        }
        .flex {
          display: flex;
          gap: 16px; /* Gap between cards */
        }
        .flex-1 {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default RatesAndVideoCall;
