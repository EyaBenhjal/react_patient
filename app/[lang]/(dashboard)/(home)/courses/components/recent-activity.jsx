import {
  TimelineContent,
} from "@/components/ui/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TextAndVideoAnswerCards = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Rates</h1>
      <p className="text-lg mb-6">
        Find me on the Minnect app and ask me a question or book a call!
      </p>
      <div className="flex gap-6">
        {/* Text Answer Card */}
        <Card className="flex-1">
          <CardHeader className="border-none mb-0 p-6">
            <CardTitle>Quick Question</CardTitle>
          </CardHeader>
          <CardContent>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600">
                    Ask a text question and choose the response format you want.
                  </h5>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-9 items-center">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600">
                      Text Answer
                    </h5>
                  </div>
                  <div className="price-container">
                    <div className="price-text">$10</div>
                  </div>
                </div>
                <p className="text-sm text-default-500 mt-1 mb-4">
                  Get a text response to a text question
                </p>
              </div>
            </TimelineContent>

            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-4 items-center">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600">
                      Video Answer
                    </h5>
                  </div>
                  <div className="price-container">
                    <div className="price-text">$20</div>
                  </div>
                </div>
                <p className="text-sm text-default-500 mt-1 mb-4">
                  Get a recorded video response to a text question
                </p>
              </div>
            </TimelineContent>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px; /* Adjust the max width as needed */
        }
        .price-container {
          border: 1px solid #e2e8f0; /* Border color */
          padding: 4px 8px; /* Padding */
          border-radius: 4px; /* Rounded corners */
          display: inline-flex; /* Flex to align items */
          align-items: center; /* Center items vertically */
          margin-top: 16px; /* Margin on top */
          gap: 8px; /* Gap between icon and text */
        }
        .price-text {
          font-size: 0.75rem; /* Font size for rate */
          color: #4a5568; /* Text color */
        }
        .tm-content {
          margin-bottom: 16px; /* Add margin between timeline items */
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

export default TextAndVideoAnswerCards;
