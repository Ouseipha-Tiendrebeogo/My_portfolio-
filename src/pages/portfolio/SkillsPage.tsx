import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { skills } from '@/data/portfolioData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MainLayout } from '@/components/layout/MainLayout';

const SkillsPage = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary dark:text-primary flex items-center gap-2"><Award size={24} /> Domaines de Compétences</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {skills.map((skill, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary dark:text-foreground dark:hover:text-primary transition-colors">
                    {skill.name}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground dark:text-muted-foreground pl-4 border-l-2 border-primary-foreground dark:border-primary-foreground">
                    {skill.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default SkillsPage;