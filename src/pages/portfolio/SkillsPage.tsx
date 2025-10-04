import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import { skills } from '@/data/portfolioData';
import { MainLayout } from '@/components/layout/MainLayout';

const SkillsPage = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary dark:text-primary flex items-center gap-2"><Award size={24} /> Domaines de Compétences</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-md bg-secondary text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default SkillsPage;