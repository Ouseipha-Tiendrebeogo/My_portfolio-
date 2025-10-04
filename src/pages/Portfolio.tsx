import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, CalendarDays, User, GraduationCap, Briefcase, Award, Languages, Heart } from 'lucide-react';

const Portfolio = () => {
  const personalDetails = {
    name: "OUSEIPHA TIENDREBEOGO",
    title: "INGÉNIEUR RÉSEAUX & SYSTÈMES INFORMATIQUES",
    location: "Ouagadougou, Bonheur ville",
    email: "tiendrebeogo.ouseipha@gmail.com",
    phone1: "63-33-48-29",
    phone2: "74-64-39-39",
    dob: "18 septembre 1998",
    gender: "Masculin",
    birthPlace: "Ouagadougou",
    drivingLicense: "Catégorie C",
    maritalStatus: "Célibataire sans enfant",
  };

  const experiences = [
    {
      title: "Stage de Formation professionnel",
      duration: "Déc. 2024 – à nos jours",
      company: "Administration publique",
      description: "Mise en position de stage de formation après l’admission à un concours professionnel pour occuper le poste d’ingénieur de conception en sécurité informatique.",
    },
    {
      title: "Ingénieur Réseaux, Maintenance et Systèmes informatiques – Télécoms",
      duration: "Mars. 2022 – Déc. 2024",
      company: "Direction Générale Du Conseil A L’orientation Universitaire Et Des Bourses (DGCOB), Ouagadougou",
      tasks: [
        "Administration et maintenance des systèmes informatiques",
        "Support technique et assistance utilisateurs",
        "Gestion de plateformes et bases de données",
      ],
    },
    {
      title: "Assistant IT",
      duration: "Fév. 2021 – Jan. 2022",
      company: "Network Industry and Services (NETIS-BF), Ouagadougou",
      tasks: [
        "Support et accompagnement utilisateurs",
        "Administration et supervision des infrastructures",
        "Sécurisation et optimisation des systèmes",
      ],
    },
    {
      title: "Stagiaire en réseaux et systèmes des télécoms",
      duration: "Août 2020 - Déc. 2020",
      company: "Direction Générale des Services Informatiques du ministère de l'économie (DGSI), Ouagadougou",
      description: "Stage de fin de cycle pour l’obtention du diplôme d’ingénieur des travaux.",
    },
    {
      title: "Stagiaire en réseaux et télécoms",
      duration: "Mai 2019 - Août 2019",
      company: "Agence Nationale pour la Promotion des Technologies de l'information et de la communication (ANPTIC), Ouagadougou",
      description: "Stage de fin de cycle pour l’obtention diplôme de technicien supérieur.",
    },
  ];

  const education = [
    {
      degree: "Master 1 en Sécurité informatiques (en-cours)",
      year: "2024 – 2025",
      institution: "Institut Burkinabè des Arts et des métiers (IBAM), Ouagadougou",
    },
    {
      degree: "Master 2 en Réseaux informatiques et MultiMedia (en-cours)",
      year: "2023 – 2025",
      institution: "Institut Supérieure de Technologies (IST), Ouagadougou",
    },
    {
      degree: "Diplôme d’Ingénieur des travaux en réseaux et systèmes de télécoms",
      year: "2019 – 2020",
      institution: "Institut Supérieure de Génie Électrique (ISGE-BF), Ouagadougou",
    },
    {
      degree: "Diplôme de Technicien Supérieure en Réseaux et télécoms",
      year: "2017 – 2019",
      institution: "Institut Supérieure de Génie Électrique (ISGE-BF), Ouagadougou",
    },
    {
      degree: "Baccalauréat série D",
      year: "2016 – 2017",
      institution: "Collège Privé Wend Manegda, Ouagadougou",
    },
  ];

  const skills = [
    "Systèmes et virtualisation",
    "Réseaux et télécoms",
    "Analyse et traitement des données",
    "Gestion et supervision",
    "Développement et serveurs",
    "Analyse et programmation",
    "Systèmes d’exploitation",
    "Bureautique et design",
  ];

  const certifications = [
    {
      category: "Systèmes d’exploitation & Administration",
      items: [
        "Administrez un système Linux",
        "Prenez en main Windows Server",
        "Installation et configuration des serveurs DNS",
      ],
    },
    {
      category: "Virtualisation & Cloud",
      items: [
        "Virtualisez votre architecture et vos environnements de travail",
        "Cloud Computing Basics",
        "Optimisez votre déploiement en créant des conteneurs avec Docker",
      ],
    },
    {
      category: "Réseaux & Télécommunications",
      items: [
        "Administrez une architecture réseau avec Cisco",
        "Concevez votre réseau TCP/IP",
        "Simulez des architectures réseaux avec GNS3",
      ],
    },
    {
      category: "Développement & Programmation",
      items: [
        "Apprenez les bases du langage Python",
        "Initiation au Framework Laravel",
        "Develop a free website with WordPress",
      ],
    },
    {
      category: "Électronique & IoT",
      items: [
        "Arduino et systèmes embarqués",
        "Introduction à l’électronique et aux fondamentaux de l’IoT",
        "Modélisation 3D",
      ],
    },
    {
      category: "Gestion & Productivité",
      items: [
        "Gérez votre projet informatique facilement",
        "Découvrez le monde des Systèmes d’Information",
        "Utilisez ChatGPT pour améliorer votre productivité",
        "Apprenez à apprendre",
      ],
    },
  ];

  const languages = [
    { name: "Français", level: "Bon" },
    { name: "Anglais", level: "Moyen" },
    { name: "Moore", level: "Bon" },
  ];

  const interests = ["Lecture", "Sport", "Nouvelles technologies"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Section */}
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

        {/* Personal Details */}
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

        {/* Professional Experience */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"><Briefcase size={24} /> Expériences Professionnelles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                <p className="text-blue-500 dark:text-blue-300 text-md">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{exp.duration}</p>
                {exp.description && <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>}
                {exp.tasks && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Academic Background */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"><GraduationCap size={24} /> Parcours Académiques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                <p className="text-green-600 dark:text-green-400 text-md">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.year}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"><Award size={24} /> Domaines de Compétences</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
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

        {/* Languages & Interests */}
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

        <div className="text-center mt-8">
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;