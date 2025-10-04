import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 text-foreground p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">BIENVENUE DANS MON PORTFOLIO</h1>
        <p className="text-xl text-muted-foreground mb-8">
         Je vous invite à visiter mon portfolio pour en savoir plus sur moi
        </p>
        <Link to="/portfolio">
          <Button className="bg-primary hover:bg-primary-foreground text-primary-foreground dark:bg-primary dark:hover:bg-primary-foreground">
            Voir mon Portfolio
          </Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;