"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projectsData';
import { MainLayout } from '@/components/layout/MainLayout';
import { Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 4;

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const indexOfLastProject = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary dark:text-primary flex items-center gap-2"><FolderGit2 size={24} /> Mes Projets</CardTitle>
            <CardDescription className="text-muted-foreground dark:text-muted-foreground">
              Découvrez quelques-uns des projets que j'ai réalisés, mettant en œuvre mes compétences en réseaux et systèmes.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> {/* Adjusted grid for 2 columns on large screens to fit 4 items per page better */}
            {currentProjects.map((project, index) => (
              <Card key={index} className="flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300 ease-in-out dark:hover:border-primary">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground dark:text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground dark:text-muted-foreground mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    to={`/portfolio/projects/${project.id}`}
                    className="inline-flex items-center text-primary hover:text-primary-foreground dark:text-primary dark:hover:text-primary-foreground transition-colors duration-200"
                  >
                    Voir les détails <ExternalLink size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </CardContent>
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      isActive={currentPage > 1}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        onClick={() => handlePageChange(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      isActive={currentPage < totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </Card>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;