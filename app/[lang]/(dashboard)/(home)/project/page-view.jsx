"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TimelineContent } from "@/components/ui/timeline";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FaStar, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import googleIcon from "@/public/images/auth/google.png";

const ratePerMinute = 5; // Rate in dollars per minute
const minimumTime = 15; // Minimum time in minutes

const Skills = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Where I can help</h1>
      <Card>
        <CardHeader>
          <Button
            size="icon"
            className="flex-none bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6 -mt-1"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 items-center">
            {[" Relationship Counseling","Stress and Anxiety Management"].map((item, index) => (
              <Badge
                key={`skill-${index}`}
                className="text-xs font-medium text-default-500 bg-default-100 dark:bg-default-50"
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProjectPageView = ({ trans }) => {
  return (
    <div className="container mx-auto p-4">
      {/* Instructor Details Section */}
      <section className="instructor-details-area flex justify-between">
        <div className="instructor-details-wrap flex">
          <div className="instructor-details-img">
            <img src="/images/instructor/instructor01.png" alt="Instructor" />
          </div>
          <div className="instructor-details-content ml-4">
      <h1 className="name text-2xl font-bold">Sophie
      </h1>
      <span className="role text-lg">Psychologue clinicien</span>
     
        
      <div className="profile-section flex flex-col items-center mt-4">
        <div className="social-icons flex space-x-4 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ fontSize: '2rem' }} className="text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ fontSize: '2rem' }} className="text-pink-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: '2rem' }} className="text-blue-700" />
          </a>
        </div>
        <div className="button-social-container flex items-center space-x-2 mt-4">
          <Link href="/courses" className="btn bg-red-500 text-white px-4 py-2 rounded">
            <span className="text">Reserve</span>
          </Link>
        </div>
      </div>
    </div>
      </div>
      </section>

      {/* About Me Section */}
      <section className="about-me-area">
        <h1 className="text-3xl font-bold mb-6">About me</h1>
        <p>
        I am a psychologist specializing in supporting individuals and families navigating complex decisions and significant transitions in their personal and professional lives. I bring a unique expertise in emotional management, conflict resolution, and personal development, drawing on years of experience with a diverse clientele, including business leaders, executives, and families facing major life changes. With my experience, I can guide you in areas such as stress management, family counseling, and navigating periods of transformation.        </p>
      </section>

      {/* Skills Section */}
      <Skills />

      
      <p className="mb-6">
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
                      Reserve a time for us to have a one-on-one call for the most personalized advice.
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
        .tm-content {
          margin-bottom: 16px; /* Add margin between timeline items */
        }
        .instructor-details-area {
          margin-bottom: 2rem; /* Adjust spacing as needed */
        }
        .instructor-details-wrap {
          display: flex;
          align-items: flex-start;
          gap: 2rem; /* Add some space between the image and content */
        }
        .instructor-details-img img {
          max-width: 100%; /* Ensure the image fits within its container */
          height: auto; /* Maintain aspect ratio */
        }
        .instructor-details-content {
          flex: 1; /* Allow content to take up remaining space */
          display: flex;
          flex-direction: column;
        }
        .name {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .role {
          font-size: 1.25rem;
          color: #4a5568;
          margin-bottom: 1rem;
        }
        .featured-experts {
          margin: 1rem 0;
        }
        .instructor-info {
          margin: 1rem 0;
        }
        .red-button {
          background-color: red;
          color: white;
          border: 2px solid red; /* Red border */
          padding: 0.5rem 1rem;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }
        .red-button:hover {
          background-color: darkred; /* Darker red on hover */
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
  background-color: #f56565; /* Tailwind's red-500 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}



      `}</style>
    </div>
  );
};

export default ProjectPageView;
