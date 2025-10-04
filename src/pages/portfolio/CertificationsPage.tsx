import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { certifications } from '@/data/portfolioData';
import { MainLayout } from '@/components/layout/MainLayout';

const CertificationsPage = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"><Award size={24} /> Certifications et Attestations de Formation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {certifications.map((certCategory, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{certCategory.category}</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {certCategory.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default CertificationsPage;