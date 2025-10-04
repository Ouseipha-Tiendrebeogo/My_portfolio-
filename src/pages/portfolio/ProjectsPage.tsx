import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projectsData';
import { MainLayout } from '@/components/layout/MainLayout';

const ProjectsPage = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"><FolderGit2 size={24} /> Mes Projets</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Découvrez quelques-uns des projets que j'ai réalisés, mettant en œuvre mes compétences en réseaux et systèmes.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300 ease-in-out dark:hover:border-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200"
                    >
                      Voir le projet <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;