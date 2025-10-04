import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Start building your amazing project here!
        </p>
        <Link to="/portfolio">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
            Voir mon Portfolio
          </Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;