import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { personalDetails } from "@/data/portfolioData"; // Import personal details

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-index-background text-index-foreground p-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-4xl mx-auto w-full gap-8">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-lg mb-2">Bonjour, je suis {personalDetails.name.split(' ')[0]},</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
            {personalDetails.title}
          </h1>
          <Link to="/portfolio/details">
            <Button variant="outline" className="mt-4 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
              Parcourir mon portfolio
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center overflow-hidden border-4 border-primary shadow-lg">
            <img
              src="/images/profile-placeholder.svg" // Remplacez ceci par le chemin de votre image, par exemple "/images/mon-profil.jpg"
              alt="Photo de profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;