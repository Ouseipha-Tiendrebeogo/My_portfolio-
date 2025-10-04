import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-600 dark:text-blue-400">Mon Portfolio Professionnel</h1>
        <p className="text-xl mb-8">
          Bienvenue sur mon portfolio. Ici, vous trouverez mes expériences, mes compétences et mes projets.
        </p>
        <p className="text-lg mb-10">
          Veuillez me fournir les informations de votre CV sous forme de texte pour que je puisse les intégrer ici.
        </p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;