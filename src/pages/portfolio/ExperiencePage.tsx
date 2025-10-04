import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/data/portfolioData';
import { MainLayout } from '@/components/layout/MainLayout';

const ExperiencePage = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary dark:text-primary flex items-center gap-2"><Briefcase size={24} /> Expériences Professionnelles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                <p className="text-primary dark:text-primary text-md">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{exp.duration}</p>
                {exp.description && <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>}
                {exp.tasks && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ExperiencePage;