import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Languages, Heart } from 'lucide-react';
import { languages, interests } from '@/data/portfolioData';
import { MainLayout } from '@/components/layout/MainLayout';

const LanguagesInterestsPage = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"><Languages size={24} /> Langues & Centres d'Intérêt</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-1"><Languages size={20} /> Langues</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {languages.map((lang, index) => (
                  <li key={index}>{lang.name} ({lang.level})</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-1"><Heart size={20} /> Centres d'Intérêt</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default LanguagesInterestsPage;