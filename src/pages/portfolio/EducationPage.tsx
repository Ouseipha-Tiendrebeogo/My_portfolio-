import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolioData';
import { MainLayout } from '@/components/layout/MainLayout';

const EducationPage = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary dark:text-primary flex items-center gap-2"><GraduationCap size={24} /> Parcours Académiques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                <p className="text-secondary-foreground dark:text-secondary-foreground text-md">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.year}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default EducationPage;