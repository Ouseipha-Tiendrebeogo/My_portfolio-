import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, CalendarDays, User } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';
import { MainLayout } from '@/components/layout/MainLayout';

const PersonalDetailsPage = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader className="text-center">
            <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">{personalDetails.name}</h1>
            <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">{personalDetails.title}</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1"><MapPin size={16} /> {personalDetails.location}</span>
              <span className="flex items-center gap-1"><Mail size={16} /> {personalDetails.email}</span>
              <span className="flex items-center gap-1"><Phone size={16} /> {personalDetails.phone1}</span>
              <span className="flex items-center gap-1"><Phone size={16} /> {personalDetails.phone2}</span>
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"><User size={24} /> Détails Personnels</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <p><strong>Date de naissance :</strong> {personalDetails.dob}</p>
            <p><strong>Sexe :</strong> {personalDetails.gender}</p>
            <p><strong>Lieu de naissance :</strong> {personalDetails.birthPlace}</p>
            <p><strong>Permis de conduire :</strong> {personalDetails.drivingLicense}</p>
            <p><strong>Situation matrimoniale :</strong> {personalDetails.maritalStatus}</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default PersonalDetailsPage;