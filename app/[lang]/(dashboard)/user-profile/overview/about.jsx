"use client";
import { UserSign, Web, Mail2 } from '@/components/svg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react';

const About = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-3 border-none">
        <CardTitle className="text-lg font-medium text-default-800">About Me</CardTitle>
        <Button
          size="icon"
          className="w-6 h-6 bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100"
        >
          <Icon icon="heroicons:ellipsis-vertical" className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-default-600 mb-3">
        Hello, I’m Jennyfer Frankin. My approach is straightforward and relatable, ensuring clear and effective communication. As an English speaker, I aim to simplify complex ideas and deliver them in an understandable way. European languages often share common roots, making communication smoother and more inclusive.

        </div>
        <div className="text-sm text-default-600">
        When it comes to designing this space, I’ve ensured a clean and professional look. It’s essential to pair fonts that work well together while keeping the design simple by limiting the number of fonts to three or fewer. Experimentation and careful selection are key to maintaining a professional yet approachable style. This advice, shared by designers I’ve collaborated with, underscores the balance between creativity and simplicity.
        </div>
        <div className='mt-6 flex flex-wrap items-center gap-6 2xl:gap-16'>
          {
            [
              // Ajoutez ici vos éléments
            ].map((item, index) => (
              <div
                key={`about-${index}`}
                className="flex items-center gap-2">
                <div
                  className="bg-default-100 dark:bg-default-50 text-primary h-10 w-10 grid place-content-center rounded">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className='text-sm font-medium text-default-800'>{item.title}</div>
                  <div className="text-xs font-medium text-default-600">{item.position}</div>
                </div>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
