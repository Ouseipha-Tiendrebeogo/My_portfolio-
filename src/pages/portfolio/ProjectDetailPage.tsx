"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { projects } from '@/data/projectsData';
import { MainLayout } from '@/components/layout/MainLayout';

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <MainLayout>
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-destructive">Projet non trouvé</h1>
          <p className="text-muted-foreground mt-2">Le projet que vous recherchez n'existe pas.</p>
          <Button asChild className="mt-6">
            <Link to="/portfolio/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux projets
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <Button asChild variant="outline" className="mb-4">
          <Link to="/portfolio/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux projets
          </Link>
        </Button>

        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-4xl font-extrabold text-primary dark:text-primary mb-2">{project.title}</CardTitle>
            <CardDescription className="text-xl text-muted-foreground dark:text-muted-foreground">{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground dark:text-foreground mb-3">Description Détaillée</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground dark:text-foreground mb-3">Technologies Utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground text-md px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {project.images && project.images.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold text-foreground dark:text-foreground mb-3 flex items-center gap-2"><ImageIcon size={24} /> Images du Projet</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, i) => (
                    <div key={i} className="relative overflow-hidden rounded-lg shadow-md">
                      <img
                        src={image}
                        alt={`Image du projet ${project.title} ${i + 1}`}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.link && project.link !== "#" && (
              <div>
                <Button asChild className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Voir le projet en ligne <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ProjectDetailPage;